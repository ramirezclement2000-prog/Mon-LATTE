import { NextRequest, NextResponse } from "next/server";
import { readNewsletterCsv } from "@/lib/newsletter";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!process.env.NEWSLETTER_EXPORT_TOKEN || token !== process.env.NEWSLETTER_EXPORT_TOKEN) {
    return NextResponse.json({ message: "Accès refusé." }, { status: 401 });
  }

  const csv = await readNewsletterCsv();

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="mon-latte-clients-newsletter.csv"'
    }
  });
}
