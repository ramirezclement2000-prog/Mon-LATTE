import { NextRequest, NextResponse } from "next/server";
import { readNewsletterCsv } from "@/lib/newsletter";
import { bearerToken, noStoreHeaders, secureTokenEquals } from "@/lib/security";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const token = bearerToken(request) ?? request.nextUrl.searchParams.get("token");

  if (!secureTokenEquals(token, process.env.NEWSLETTER_EXPORT_TOKEN)) {
    return NextResponse.json(
      { message: "Accès refusé." },
      { status: 401, headers: noStoreHeaders() }
    );
  }

  const csv = await readNewsletterCsv();

  return new NextResponse(csv, {
    headers: {
      ...noStoreHeaders(),
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="mon-latte-clients-newsletter.csv"'
    }
  });
}
