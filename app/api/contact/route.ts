import { NextRequest, NextResponse } from "next/server";

const contactEmail = "contact@monlatte.fr";

function valueOf(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
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
