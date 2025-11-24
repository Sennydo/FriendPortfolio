import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function About() {
  const skills = [
    { name: "Web Design", percentage: 95 },
    { name: "UI/UX Design", percentage: 90 },
    { name: "HTML & CSS", percentage: 85 },
    { name: "Graphic Design", percentage: 80 },
  ]

  const achievements = [
    {
      count: "320+",
      label: "Happy Clients",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      count: "867+",
      label: "Project Completed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ]

  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">About Me</p>
              <h2 className="font-serif text-4xl font-bold mb-4">Why You Hire Me?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-primary font-semibold">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-400 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-pink-200/40 via-pink-300/30 to-transparent rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-2xl" />
              <img
                src="/woman-in-pink-hoodie-with-laptop.jpg"
                alt="About"
                className="relative w-full max-w-md mx-auto rounded-2xl"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 border-none shadow-md bg-card">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">{achievement.count}</h3>
                      <p className="font-semibold mb-2">{achievement.label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
