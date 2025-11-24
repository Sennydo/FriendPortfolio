import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Watercolor background effects */}
      <div className="watercolor-blob watercolor-orange top-0 left-0 w-96 h-96" />
      <div className="watercolor-blob watercolor-pink top-40 right-0 w-[500px] h-[500px]" />
      <div className="watercolor-blob watercolor-cream bottom-0 left-1/3 w-[400px] h-[400px]" />

      <Header />

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-5xl md:text-6xl text-primary text-center mb-16 italic">
            My Design Philosophy
          </h1>

          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl leading-relaxed text-foreground text-center">
              I see <span className="font-bold">design</span> as a way to express{" "}
              <span className="font-bold">emotions</span> through <span className="font-bold">form</span>,{" "}
              <span className="font-bold">texture</span>, and <span className="font-bold">detail</span>. My work
              explores the <span className="font-bold">balance</span> between{" "}
              <span className="font-bold">structure</span> and <span className="font-bold">fluidity</span>, allowing
              materials to tell stories inspired by <span className="font-bold">people</span>,{" "}
              <span className="font-bold">culture</span>, and everyday experiences. I believe design should go beyond
              aesthetics — it should evoke feeling, <span className="font-bold">empower individuality</span>, and create
              a <span className="font-bold">sense of purpose</span>. Each piece I create aims to connect meaningfully
              with the wearer and their world.
            </p>

            <p className="text-right mt-8 font-serif text-xl md:text-2xl italic text-foreground">~ Kasturi Jana</p>
          </div>
        </div>
      </section>
    </main>
  )
}
