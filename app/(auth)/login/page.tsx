import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const dynamic = "force-dynamic"

type Props = {
  searchParams: Promise<{ from?: string; error?: string }>
}

export default async function LoginPage({ searchParams }: Props) {
  const { from = "/", error } = await searchParams

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>Accés restringit</CardTitle>
          <CardDescription>Introdueix la contrasenya per continuar.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="/api/login" method="POST" className="flex flex-col gap-4">
            <input type="hidden" name="from" value={from} />
            <Input
              type="password"
              name="password"
              autoFocus
              required
              autoComplete="current-password"
              placeholder="Contrasenya"
            />
            {error && <p className="text-sm text-red-600">Contrasenya incorrecta.</p>}
            <Button type="submit" className="w-full">
              Entra
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
