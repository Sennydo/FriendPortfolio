import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Phone } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-primary">Kasturi's Page</h1>
    
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About Me
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact Me
          </Link>
        </nav>


      </div>
    </header>
  )
}
