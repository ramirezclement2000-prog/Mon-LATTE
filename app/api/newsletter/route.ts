import { NextRequest, NextResponse } from "next/server";
import { addNewsletterClient, duplicateNewsletterMessage } from "@/lib/newsletter";
import { assertSameOrigin, getClientIp, rateLimit, readJsonBody } from "@/lib/security";

export const runtime = "nodejs";
const maxBodyBytes = 8_192;
const maxFieldLength = 180;

function isFilled(value: unknown) {
  return typeof value === "string" && value.trim().length > 1;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isPostalCode(value: string) {
  return /^\d{5}$/.test(value.trim());
}

function isReasonable(value: string) {
  return value.length <= maxFieldLength;
}

export async function POST(request: NextRequest) {
  if (!assertSameOrigin(request)) {
    return NextResponse.json({ message: "Origine refusée." }, { status: 403 });
  }

  if (!rateLimit(`newsletter:${getClientIp(request)}`, 8, 60_000)) {
    return NextResponse.json(
      { message: "Trop de tentatives. Réessayez dans une minute." },
      { status: 429 }
    );
  }

  const parsed = await readJsonBody(request, maxBodyBytes);

  if (!parsed.ok) {
    return parsed.response;
  }

  const body = parsed.body as Record<string, unknown>;

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "La demande est incomplète." }, { status: 400 });
  }

  const firstName = String(body.firstName ?? "");
  const lastName = String(body.lastName ?? "");
  const email = String(body.email ?? "");
  const phone = String(body.phone ?? "");
  const postalCode = String(body.postalCode ?? "");
  const address = String(body.address ?? "");
  const consent = Boolean(body.consent);
  const honeypot = String((body as { company?: unknown }).company ?? "");

  if (honeypot.trim().length > 0) {
    return NextResponse.json({
      message: "C'est noté, vous êtes sur la liste. Les premières nouvelles arrivent bientôt."
    });
  }

  const fields = [firstName, lastName, email, phone, postalCode, address];

  if (
    !isFilled(firstName) ||
    !isEmail(email) ||
    !isPostalCode(postalCode) ||
    !consent ||
    !fields.every(isReasonable)
  ) {
    return NextResponse.json(
      {
        message:
          "Merci d'indiquer votre prénom, votre e-mail, votre code postal et d'accepter l'inscription."
      },
      { status: 400 }
    );
  }

  try {
    const result = await addNewsletterClient({
      firstName,
      lastName,
      email,
      phone,
      postalCode,
      address
    });

    if (!result.ok && result.reason === "duplicate") {
      return NextResponse.json({ message: duplicateNewsletterMessage }, { status: 409 });
    }

    return NextResponse.json({
      message: "C'est noté, vous êtes sur la liste. Les premières nouvelles arrivent bientôt."
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Impossible d'enregistrer vos coordonnées pour le moment. Réessayez dans un instant." },
      { status: 500 }
    );
  }
}
