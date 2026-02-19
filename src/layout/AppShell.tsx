import type { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

/*
  Layout principal de la aplicación.
  Header + contenido + footer.
*/

interface Props {
  children: ReactNode
}

export default function AppShell({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full px-6">
        {children}
      </main>

      <Footer />
    </div>
  )
}