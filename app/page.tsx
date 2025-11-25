import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Software } from "@/components/software"
import Design from "@/components/mydes"
import SecondHead from "@/components/philos"
import Holder from "@/components/holder"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Watercolor background effects */}
      <div className="watercolor-blob watercolor-orange top-0 left-0 w-96 h-96" />
      <div className="watercolor-blob watercolor-pink top-20 right-0 w-[500px] h-[500px]" />
      <div className="watercolor-blob watercolor-cream bottom-0 left-1/4 w-[400px] h-[400px]" />

      <Header />
      <Hero />
      <SecondHead />  
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Skills />
          <Experience />
        </div>
        <Holder />


        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
          <Education />
          <Software />
        </div>
      </div>
    </main>
  )
}
