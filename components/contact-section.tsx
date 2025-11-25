import { Mail, MapPin, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  const contactInfo = [

    {
      icon: Mail,
      label: "Email",
      value: "kasturi.jana@nift.ac.in",
      link: "mailto:kasturi.jana@nift.ac.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+917680942637",
      link: "tel:+917680942637",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sector 4, Kharghar, Navi Mumbai",
      link: "#",
    },
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-bold text-4xl md:text-5xl text-foreground text-center mb-4 uppercase tracking-tight">
          Contact
        </h1>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <a href={info.link} className="text-foreground font-medium hover:text-primary transition-colors">
                    {info.value}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
