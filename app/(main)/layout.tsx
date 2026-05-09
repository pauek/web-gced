import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import Header from "./header"
import Footer from "./footer"
import "leaflet/dist/leaflet.css"

export const dynamic = "force-static"

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// })
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// })

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "GCED",
  description: "Grau en Ciència i Enginyeria de Dades",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="msSjVHdwoztuyX2PRHgA_I4n6T5qGgwJcop11mVISFM" />
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col antialiased`}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
