import { Card, CardContent } from "@/components/ui/card"

export function Portfolio() {
  const projects = [
    { title: "Mobile App Design", image: "/mobile-app-interface.png" },
    { title: "Web Dashboard", image: "/web-dashboard-ui-design.jpg" },
    { title: "E-commerce App", image: "/ecommerce-mobile-app.png" },
    { title: "Social Media", image: "/social-media-app-design.jpg" },
    { title: "Portfolio Website", image: "/portfolio-website-design.png" },
  ]

  return (
    <section id="portfolio" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="font-serif text-4xl font-bold mb-2">
            My <span className="text-primary">Latest Works</span>
          </h2>
          <p className="text-muted-foreground">Some of my recent design projects.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-64 border-none shadow-lg hover:shadow-xl transition-shadow snap-start bg-card overflow-hidden group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="font-semibold">{project.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
