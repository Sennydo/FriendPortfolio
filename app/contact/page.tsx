import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Watercolor background effects */}
      <div className="watercolor-blob watercolor-pink top-0 right-0 w-[500px] h-[500px]" />
      <div className="watercolor-blob watercolor-orange bottom-0 left-0 w-96 h-96" />
      <div className="watercolor-blob watercolor-cream top-1/3 left-1/2 w-[400px] h-[400px]" />

      <Header />
      <ContactSection />
    </main>
  )
}
