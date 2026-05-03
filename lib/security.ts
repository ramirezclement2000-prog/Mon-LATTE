import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

const allowedHosts = new Set([
  "monlatte.fr",
  "www.monlatte.fr",
  "mon-latte-web.vercel.app",
  "127.0.0.1:3000",
  "127.0.0.1:3001",
  "127.0.0.1:3002",
  "localhost:3000",
  "localhost:3001",
  "localhost:3002"
]);

const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();

export function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function assertSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  try {
    const originUrl = new URL(origin);
    const host = request.headers.get("host") ?? "";

    return (
      originUrl.host === host ||
      allowedHosts.has(originUrl.host) ||
      originUrl.hostname.endsWith(".vercel.app")
    );
  } catch {
    return false;
  }
}

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const current = rateLimitBuckets.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (current.count >= limit) {
    return false;
  }

  current.count += 1;
  return true;
}

export async function readJsonBody(request: NextRequest, maxBytes: number) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    return { ok: false as const, response: tooLargeResponse() };
  }

  const text = await request.text();
  const byteLength = new TextEncoder().encode(text).length;

  if (byteLength > maxBytes) {
    return { ok: false as const, response: tooLargeResponse() };
  }

  try {
    return { ok: true as const, body: JSON.parse(text) as unknown };
  } catch {
    return {
      ok: false as const,
      response: NextResponse.json({ message: "La demande est invalide." }, { status: 400 })
    };
  }
}

export function secureTokenEquals(candidate: string | null, expected: string | undefined) {
  if (!candidate || !expected) {
    return false;
  }

  const candidateBuffer = Buffer.from(candidate);
  const expectedBuffer = Buffer.from(expected);

  return (
    candidateBuffer.length === expectedBuffer.length &&
    timingSafeEqual(candidateBuffer, expectedBuffer)
  );
}

export function bearerToken(request: NextRequest) {
  const authorization = request.headers.get("authorization") ?? "";
  const [scheme, token] = authorization.split(" ");

  return scheme?.toLowerCase() === "bearer" && token ? token : null;
}

export function noStoreHeaders() {
  return {
    "Cache-Control": "no-store, max-age=0",
    "X-Robots-Tag": "noindex, nofollow, noarchive"
  };
}

function tooLargeResponse() {
  return NextResponse.json({ message: "La demande est trop volumineuse." }, { status: 413 });
}
