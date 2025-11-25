import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Header } from "@/components/header"
import Projects from "@/components/projects"
import { Skills } from "@/components/skills"
import { Software } from "@/components/software"

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Watercolor background effects */}
      <div className="watercolor-blob watercolor-orange top-0 left-0 w-96 h-96" />
      <div className="watercolor-blob watercolor-pink top-40 right-0 w-[500px] h-[500px]" />
      <div className="watercolor-blob watercolor-cream bottom-0 left-1/3 w-[400px] h-[400px]" />

      <Header />

      {/*
            <section className="py-24 px-4">
              <div className="container mx-auto max-w-4xl">
                <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16 italic">
                  Kasturi Jana
                </h1>
              </div>
            </section>
      */}

            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <Skills />
                <Experience />
              </div>
            </div>

      
              <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
                <Education />
                <Software />
              </div>
      <div className="container px-5 mx-auto my-15">
        <Projects />
      </div>
    </main>
  )
}
