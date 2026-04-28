import { NextRequest, NextResponse } from "next/server";
import { addNewsletterClient, duplicateNewsletterMessage } from "@/lib/newsletter";

export const runtime = "nodejs";

function isFilled(value: unknown) {
  return typeof value === "string" && value.trim().length > 1;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

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

  if (
    !isFilled(firstName) ||
    !isFilled(lastName) ||
    !isEmail(email) ||
    !isFilled(phone) ||
    !isFilled(postalCode) ||
    !isFilled(address) ||
    !consent
  ) {
    return NextResponse.json(
      { message: "Merci de compléter vos coordonnées et d'accepter l'inscription." },
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
