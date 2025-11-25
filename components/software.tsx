import Projects from "./projects"

export function Software() {
  const software = [
    { name: "Photoshop", color: "bg-blue-500" },
    { name: "InDesign", color: "bg-pink-500" },
    { name: "Illustrator", color: "bg-orange-500" },
    { name: "CLO", color: "bg-purple-500" },
  ]

  const languages = [
    { name: "Hindi", color: "bg-orange-400" },
    { name: "English", color: "bg-blue-400" },
    { name: "Bengali", color: "bg-green-400" },
  ]

  const names = [
    "/icons/icons8-photoshop.svg",
    "/icons/icons8-adobe-indesign.svg",
    "/icons/icons8-illustrator.svg",
    "icons/clo.png"
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="font-bold text-3xl text-foreground uppercase tracking-tight">Softwares</h2>
        <div className="flex gap-4">
          {
            names.map((item, idx) => (
              <img key={idx} src={item} />
            ))
          }
          {/*
                    {software.map((sw, index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-full ${sw.color} flex items-center justify-center text-white font-bold text-xs shadow-lg`}
            >
              {sw.name.substring(0, 2)}
            </div>
          ))}
          */ }

        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-bold text-3xl text-foreground uppercase tracking-tight">Languages</h2>
        <div className="flex gap-3 flex-wrap">
          {languages.map((lang, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full border-2 border-foreground text-foreground font-medium text-sm"
            >
              {lang.name.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
