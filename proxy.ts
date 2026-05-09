import { NextRequest, NextResponse } from "next/server"
import { AUTH_COOKIE_NAME, requestOrigin } from "@/lib/auth"

export function proxy(req: NextRequest) {
  const expected = process.env.WEB_PASSWORD
  if (!expected) return NextResponse.next()

  const cookie = req.cookies.get(AUTH_COOKIE_NAME)?.value
  if (cookie === expected) return NextResponse.next()

  const from = req.nextUrl.pathname + req.nextUrl.search
  const url = new URL("/login", requestOrigin(req))
  url.searchParams.set("from", from)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!api/login|login|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
