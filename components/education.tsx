export function Education() {
  const education = [
    { degree: "AISSE", institution: "BPDAY School, Hyd", year: "(2020)" },
    { degree: "TSBIE", institution: "FIITJEE Jnr Clg, Hyd", year: "(2022)" },
    { degree: "BDes (FD)", institution: "NIFT, Mumbai", year: "(2026)" },
  ]

  return (
    <div className="space-y-6">
      <h2 className="font-bold text-3xl text-foreground uppercase tracking-tight">Education</h2>
      <ul className="space-y-3 list-disc list-inside">
        {education.map((edu, index) => (
          <li key={index} className="text-foreground">
            <span className="font-semibold">{edu.degree}</span> : {edu.institution}{" "}
            <span className="text-muted-foreground">{edu.year}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
