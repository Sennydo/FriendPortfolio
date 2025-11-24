export function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 px-4 relative overflow-hidden gradient-bg">
      <div className="watercolor-blob watercolor-pink w-96 h-96 top-10 left-10" />
      <div className="watercolor-blob watercolor-orange w-80 h-80 top-40 right-20" />
      <div className="watercolor-blob watercolor-yellow w-72 h-72 bottom-20 left-1/4" />
      <div className="watercolor-blob watercolor-peach w-64 h-64 top-1/2 right-1/3" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-serif text-3xl lg:text-4xl text-primary italic">Fashion Designer</p>
            <h1 className="font-bold text-5xl lg:text-7xl text-foreground tracking-tight uppercase">KASTURI JANA</h1>
            <p className="text-foreground/80 leading-relaxed max-w-lg text-justify">
              I am a responsible, competent, reliable and orderly person with strong communication skills and a keen eye
              for details. Adaptable under pressure, I excel at problem-solving and delivering creative solutions. With
              a structured and organized approach, I am eager to contribute my skills and grow through valuable
              experiences within your company.
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="image-fade-popup w-full max-w-md h-[500px]">
              <img
                src="/professional-woman-portrait.png"
                alt="Kasturi Jana"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
