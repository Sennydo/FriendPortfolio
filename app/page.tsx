import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import SecondHead from "@/components/philos"
import Projects from "@/components/projects"

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
      <div className="container px-5 mx-auto">
        <Projects />
      </div>
      {
        /*
              <div className="container mx-auto px-4 py-16">

        <Holder />
      </div>
        */
      }
    </main>
  )
}
