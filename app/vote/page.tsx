import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VoteSection } from "@/components/vote-section"

export default function VotePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <VoteSection />
      </div>
      <Footer />
    </main>
  )
}
