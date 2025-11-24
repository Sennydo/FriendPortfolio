import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Phone } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">K</span>
          </div>
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

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Phone className="w-4 h-4 mr-2" />
            Call Me
          </Button>
        </div>
      </div>
    </header>
  )
}
