import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HowToJoinSection } from "@/components/how-to-join-section"

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <HowToJoinSection />
      </div>
      <Footer />
    </main>
  )
}
