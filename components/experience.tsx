export function Experience() {
  const experiences = [
    {
      date: "Mar 25 - Apr 25",
      title: "Fashion Design Intern at Marsil Embroideries",
    },
    {
      date: "Jun 25 - Jul 25",
      title: "Fashion Design Intern at Whimsical By Shica",
    },
    {
      date: "February 2025",
      title: "Sales Intern for Jaya Rathore at Bridal Asia 25",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="font-bold text-3xl text-foreground uppercase tracking-tight">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-primary" />
              {index < experiences.length - 1 && <div className="w-0.5 h-full bg-primary/30 mt-2" />}
            </div>
            <div className="pb-6">
              <p className="text-sm text-muted-foreground mb-1">{exp.date}</p>
              <p className="font-medium text-foreground">{exp.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
