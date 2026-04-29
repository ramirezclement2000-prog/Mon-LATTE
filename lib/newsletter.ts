import { promises as fs } from "node:fs";
import path from "node:path";
import { get, put } from "@vercel/blob";

export type NewsletterClientInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postalCode: string;
  address: string;
};

type NewsletterClientRecord = NewsletterClientInput & {
  createdAt: string;
  consentAt: string;
  consentText: string;
  privacyVersion: string;
  source: string;
};

const csvPath = "newsletter/clients.csv";
const localCsvPath = path.join(process.cwd(), "data", "clients.csv");
const privacyVersion = "2026-04-29";
const newsletterConsentText =
  "J'accepte que MON latte conserve mes coordonnées pour m'envoyer les nouvelles liées à l'ouverture et aux newsletters.";
const header = [
  "createdAt",
  "consentAt",
  "firstName",
  "lastName",
  "email",
  "phone",
  "postalCode",
  "address",
  "consentText",
  "privacyVersion",
  "source"
];

export const duplicateNewsletterMessage =
  "On sait que vous avez hâte de goûter nos préparations, ne vous inquiétez pas, on a déjà vos coordonnées !";

function cleanValue(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function normalizeEmail(email: string) {
  return cleanValue(email).toLowerCase();
}

function normalizePhone(phone: string) {
  return cleanValue(phone).replace(/[^\d+]/g, "");
}

function escapeCsv(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

function toCsvRow(record: NewsletterClientRecord) {
  return header.map((key) => escapeCsv(record[key as keyof NewsletterClientRecord])).join(",");
}

function parseCsvLine(line: string) {
  const values: string[] = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      values.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
}

function parseClients(csv: string) {
  const lines = csv.trim().split("\n").filter(Boolean);

  return lines.slice(1).map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(header.map((key, index) => [key, values[index] ?? ""])) as NewsletterClientRecord;
  });
}

function normalizeCsv(csv: string) {
  const clients = parseClients(csv);
  const rows = clients.map((client) =>
    toCsvRow({
      createdAt: client.createdAt,
      consentAt: client.consentAt || client.createdAt,
      firstName: client.firstName,
      lastName: client.lastName,
      email: client.email,
      phone: client.phone,
      postalCode: client.postalCode,
      address: client.address,
      consentText: client.consentText || newsletterConsentText,
      privacyVersion: client.privacyVersion || privacyVersion,
      source: client.source || "site"
    })
  );

  return `${header.join(",")}\n${rows.join("\n")}${rows.length ? "\n" : ""}`;
}

async function readLocalCsv() {
  try {
    return await fs.readFile(localCsvPath, "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return `${header.join(",")}\n`;
    }

    throw error;
  }
}

async function writeLocalCsv(csv: string) {
  await fs.mkdir(path.dirname(localCsvPath), { recursive: true });
  await fs.writeFile(localCsvPath, csv, "utf8");
}

async function readBlobCsv() {
  const blob = await get(csvPath, { access: "private", useCache: false });

  if (!blob || blob.statusCode === 304 || !blob.stream) {
    return `${header.join(",")}\n`;
  }

  return new Response(blob.stream).text();
}

async function writeBlobCsv(csv: string) {
  await put(csvPath, csv, {
    access: "private",
    allowOverwrite: true,
    contentType: "text/csv; charset=utf-8",
    cacheControlMaxAge: 60
  });
}

export async function readNewsletterCsv() {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    return readBlobCsv();
  }

  return readLocalCsv();
}

async function writeNewsletterCsv(csv: string) {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    await writeBlobCsv(csv);
    return;
  }

  await writeLocalCsv(csv);
}

export async function addNewsletterClient(input: NewsletterClientInput) {
  const email = normalizeEmail(input.email);
  const phone = normalizePhone(input.phone);
  const postalCode = cleanValue(input.postalCode);
  const firstName = cleanValue(input.firstName);
  const lastName = cleanValue(input.lastName);
  const address = cleanValue(input.address);

  const csv = await readNewsletterCsv();
  const normalizedCsv = normalizeCsv(csv);
  const clients = parseClients(normalizedCsv);
  const duplicate = clients.some(
    (client) =>
      normalizeEmail(client.email) === email ||
      (phone.length > 0 && normalizePhone(client.phone) === phone)
  );

  if (duplicate) {
    return { ok: false, reason: "duplicate" as const, message: duplicateNewsletterMessage };
  }

  const now = new Date().toISOString();
  const record: NewsletterClientRecord = {
    createdAt: now,
    consentAt: now,
    firstName,
    lastName,
    email,
    phone,
    postalCode,
    address,
    consentText: newsletterConsentText,
    privacyVersion,
    source: "site"
  };

  const nextCsv = `${normalizedCsv.trimEnd()}\n${toCsvRow(record)}\n`;
  await writeNewsletterCsv(nextCsv);

  return { ok: true as const };
}
