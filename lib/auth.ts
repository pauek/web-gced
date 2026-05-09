import type { NextRequest } from "next/server"

export const AUTH_COOKIE_NAME = "web-auth"
export const AUTH_COOKIE_MAX_AGE = 60 * 60 // 1 hour

export function requestOrigin(req: NextRequest): string {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? req.nextUrl.host
  const proto =
    req.headers.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.") ? "http" : "https")
  return `${proto}://${host}`
}
