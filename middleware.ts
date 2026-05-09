import { NextRequest, NextResponse } from "next/server"
import { AUTH_COOKIE_NAME } from "@/lib/auth"

export function middleware(req: NextRequest) {
  const expected = process.env.WEB_PASSWORD
  if (!expected) return NextResponse.next()

  const cookie = req.cookies.get(AUTH_COOKIE_NAME)?.value
  if (cookie === expected) return NextResponse.next()

  const url = req.nextUrl.clone()
  const from = req.nextUrl.pathname + req.nextUrl.search
  url.pathname = "/login"
  url.search = `?from=${encodeURIComponent(from)}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!api/login|login|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
