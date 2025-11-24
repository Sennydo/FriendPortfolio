import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-3xl px-8 py-12 shadow-2xl">
            <h2 className="font-serif text-4xl font-bold mb-2 text-foreground">Let's Connect With Me</h2>
            <p className="text-foreground/70 mb-8">I'd love to hear from you!</p>

            <form className="space-y-4 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-secondary/50 border-border/50" />
                <Input type="email" placeholder="Your Email" className="bg-secondary/50 border-border/50" />
              </div>
              <Input placeholder="Subject" className="bg-secondary/50 border-border/50" />
              <Textarea placeholder="Your Message" rows={4} className="bg-secondary/50 border-border/50 resize-none" />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+911234567890" className="font-semibold hover:text-primary transition-colors">
                +91 1234567890
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/90 pt-4">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="text-sm">hello@parisa.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">New York, USA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
