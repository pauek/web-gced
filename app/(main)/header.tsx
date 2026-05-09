"use client"

import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import LogoUPC from "@/assets/LogoUPC-full.svg"
import LogoFIB50 from "@/assets/fib50.svg"
import LogoFIBNormal from "@/assets/fib.svg"
import LogoFME from "@/assets/fme.svg"
import LogoTelecos from "@/assets/telecos.svg"

const fibStart50Years = Date.UTC(2026, 3, 5)
const fibEnd50Years = Date.UTC(2027, 3, 5)

export default function Header() {
  const pathname = usePathname()
  const [visible, setVisible] = useState<boolean>(false)

  const toggleVisible = () => setVisible((x) => !x)

  type Props = {
    href: string
    children: React.ReactNode
  }
  const MenuItem_ = ({ href, children }: Props) => (
    <Link
      href={href}
      onClick={(ev) => {
        console.log("hi!")
        setVisible(false)
      }}
      className={cn(
        pathname === href ? "underline decoration-2 underline-offset-4" : "",
        "active:bg-upc w-full p-6 py-10 hover:bg-gray-50 active:text-white",
        "lg:w-auto lg:p-0 lg:hover:bg-inherit lg:active:bg-inherit lg:active:text-inherit",
      )}
    >
      {children}
    </Link>
  )

  // Mostra el logo del 50è aniversari de la FIB o el normal en funció de la data
  const now = Date.now()
  const logoFIB = now >= fibStart50Years && now <= fibEnd50Years ? LogoFIB50 : LogoFIBNormal

  return (
    <header className={cn("h-20 px-0 py-[0.8em] shadow-lg", "sticky top-0 z-50 bg-white")}>
      <div className="mx-auto flex flex-row items-end gap-2 px-3 lg:w-6xl lg:px-0">
        <div className="flex h-14 flex-row gap-6 *:w-auto">
          <Link href="/" className="mr-4 h-14">
            <Image src={LogoUPC} alt="Logotip UPC" className="h-14 w-auto" />
          </Link>
          <Link href="https://www.fib.upc.edu">
            <Image src={logoFIB} alt="Logotip FIB" className="h-14 w-auto" />
          </Link>
          <Link href="https://telecos.upc.edu">
            <Image src={LogoTelecos} alt="Logotip Telecos" className="h-14 w-auto" />
          </Link>
          <Link href="https://fme.upc.edu">
            <Image src={LogoFME} alt="Logotip FME" className="h-14 w-auto" />
          </Link>
        </div>

        <div onClick={toggleVisible} className="flex flex-1 cursor-pointer flex-row justify-end lg:hidden">
          <Menu className="text-upc mx-2 h-13 w-10" />
        </div>
        <div
          className={cn(
            "text-upc justify-end font-bold lg:static lg:flex lg:flex-1 lg:flex-row lg:gap-10 lg:p-0 lg:shadow-none",
            "absolute top-20 right-0 min-w-80 flex-col items-end bg-white p-0 shadow",
            visible ? "z-50 flex" : "hidden",
          )}
        >
          <MenuItem_ href="/">INICI</MenuItem_>
          <MenuItem_ href="/estadistiques">ESTADÍSTIQUES</MenuItem_>
          <MenuItem_ href="/estudiants">GRADUATS</MenuItem_>
          <MenuItem_ href="/projectes">PROJECTES</MenuItem_>
        </div>
      </div>
    </header>
  )
}
