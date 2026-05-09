import { NextRequest, NextResponse } from "next/server"
import { AUTH_COOKIE_MAX_AGE, AUTH_COOKIE_NAME, requestOrigin } from "@/lib/auth"

const safeRedirectPath = (raw: string | null | undefined): string => {
  if (!raw) return "/"
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/"
  return raw
}

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const password = formData.get("password")?.toString() ?? ""
  const from = safeRedirectPath(formData.get("from")?.toString())

  const expected = process.env.WEB_PASSWORD
  const origin = requestOrigin(req)

  if (!expected || password !== expected) {
    const url = new URL("/login", origin)
    url.searchParams.set("from", from)
    url.searchParams.set("error", "1")
    return NextResponse.redirect(url, 303)
  }

  const target = new URL(from, origin)
  const res = NextResponse.redirect(target, 303)
  res.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: expected,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: AUTH_COOKIE_MAX_AGE,
  })
  return res
}
