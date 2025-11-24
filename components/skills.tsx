import { Star } from "lucide-react"

export function Skills() {
  const skills = [
    { name: "Fashion Illustrations", rating: 5 },
    { name: "Trend Forecasting", rating: 3 },
    { name: "Graphic Designing", rating: 4 },
    { name: "Print Design", rating: 4 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="font-bold text-3xl text-foreground uppercase tracking-tight">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="font-medium text-foreground">{skill.name}</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < skill.rating ? "fill-purple-500 text-purple-500" : "fill-none text-purple-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
