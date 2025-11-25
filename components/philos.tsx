const SecondHead = () => {

    return (
    <section id="home" className="pt-28 pb-16 px-4 relative overflow-hidden">

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-serif text-3xl lg:text-4xl text-primary italic">My Design Philosophy</p>
            <p className="text-foreground/80 leading-relaxed max-w-lg text-justify">
                I see design as a way to express emotions through form, texture, and detail. 
                My work explores the balance between structure and fluidity, allowing materials to tell stories 
                inspired by people, culture, and everyday experiences. I believe design should go beyond aesthetics — 
                it should evoke feeling, empower individuality, and create a sense of purpose. Each piece I create aims to 
                connect meaningfully with the wearer and their world.
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

export default SecondHead;