import { NextRequest, NextResponse } from "next/server";
import { assertSameOrigin, getClientIp, rateLimit } from "@/lib/security";

const contactEmail = "contact@monlatte.fr";
const maxBodyBytes = 12_288;

function valueOf(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  if (!assertSameOrigin(request)) {
    return NextResponse.json({ message: "Origine refusée." }, { status: 403 });
  }

  if (!rateLimit(`contact:${getClientIp(request)}`, 6, 60_000)) {
    return NextResponse.json(
      { message: "Trop de tentatives. Réessayez dans une minute." },
      { status: 429 }
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (Number.isFinite(contentLength) && contentLength > maxBodyBytes) {
    return NextResponse.json({ message: "La demande est trop volumineuse." }, { status: 413 });
  }

  const formData = await request.formData();
  const subject = "Demande événement MON latte";
  const lines = [
    `Entreprise: ${valueOf(formData, "Entreprise")}`,
    `Contact: ${valueOf(formData, "Nom")}`,
    `E-mail: ${valueOf(formData, "Email")}`,
    `Téléphone: ${valueOf(formData, "Téléphone")}`,
    `Type d'événement: ${valueOf(formData, "Type d'événement")}`,
    `Participants: ${valueOf(formData, "Participants")}`,
    `Date souhaitée: ${valueOf(formData, "Date")}`,
    `Lieu: ${valueOf(formData, "Lieu")}`,
    "",
    valueOf(formData, "Message")
  ];

  const params = new URLSearchParams({
    subject,
    body: lines.join("\n")
  });

  return NextResponse.redirect(`mailto:${contactEmail}?${params.toString()}`, 303);
}
