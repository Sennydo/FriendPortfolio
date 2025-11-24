import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function Testimonials() {
  const clients = [
    {
      name: "John Smith",
      role: "CEO, Tech Company",
      image: "/professional-man.jpg",
      rating: 5,
      testimonial: "Excellent work! Very professional and creative designer.",
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      image: "/professional-woman-diverse.png",
      rating: 5,
      testimonial: "Amazing attention to detail and great communication.",
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      image: "/professional-asian-man.png",
      rating: 5,
      testimonial: "Transformed our vision into reality. Highly recommend!",
    },
  ]

  const companyLogos = [
    { name: "Company 1", color: "from-blue-400 to-blue-600" },
    { name: "Company 2", color: "from-green-400 to-green-600" },
    { name: "Company 3", color: "from-purple-400 to-purple-600" },
    { name: "Company 4", color: "from-orange-400 to-orange-600" },
    { name: "Company 5", color: "from-pink-400 to-pink-600" },
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-2">
            My <span className="text-primary">Clients</span>
          </h2>
          <p className="text-muted-foreground">Some of The My Clients</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto mb-16">
          {companyLogos.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <div
                className={`w-20 h-20 rounded-lg bg-gradient-to-br ${company.color} opacity-30 hover:opacity-50 transition-opacity`}
              />
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-2">
            What <span className="text-primary">Clients Says</span>
          </h2>
          <p className="text-muted-foreground">Feedback from my satisfied clients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <Card key={index} className="border-none shadow-lg bg-card">
              <CardContent className="pt-6 pb-6 space-y-4 text-center">
                <Avatar className="w-20 h-20 mx-auto">
                  <AvatarImage src={client.image || "/placeholder.svg"} alt={client.name} />
                  <AvatarFallback>
                    {client.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{client.name}</h3>
                  <p className="text-sm text-muted-foreground">{client.role}</p>
                </div>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: client.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{client.testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
