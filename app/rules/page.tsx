import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RulesSection } from "@/components/rules-section"

export default function RulesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <RulesSection />
      </div>
      <Footer />
    </main>
  )
}
