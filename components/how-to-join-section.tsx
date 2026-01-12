import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Server, MessageSquare, Play } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Stáhni Modpack",
    description:
      "Stáhni si náš modpack z CurseForge. Klikni na tlačítko níže nebo vyhledej 'Tech-Craft' v CurseForge launcheru.",
    action: {
      label: "CurseForge",
      href: "https://www.curseforge.com/minecraft/modpacks/tech-craft-neobox",
    },
  },
  {
    number: "2",
    icon: Play,
    title: "Nainstaluj a spusť",
    description:
      "Použij CurseForge Launcher nebo XMCL pro instalaci modpacku. Ujisti se, že máš přiděleno alespoň 8GB RAM.",
    action: {
      label: "Stáhnout CurseForge Launcher",
      href: "https://www.curseforge.com/download/app",
    },
  },
  {
    number: "3",
    icon: Server,
    title: "Připoj se na server",
    description: "Přidej náš server do svého seznamu serverů pomocí IP: play-tech-craft.666777123.xyz",
  },
  {
    number: "4",
    icon: MessageSquare,
    title: "Připoj se na Discord",
    description: "Spoj se s komunitou, získej pomoc a sleduj novinky na našem Discord serveru.",
    action: {
      label: "Připojit se na Discord",
      href: "https://discord.com/invite/cHVsyJdcxv",
    },
  },
]

export function HowToJoinSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Jak se <span className="text-primary">připojit</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Začít je snadné! Postupuj podle těchto jednoduchých kroků a za chvíli budeš hrát.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground font-bold text-xl shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    {step.action && (
                      <Button
                        asChild
                        variant="outline"
                        className="border-primary/50 text-foreground hover:bg-primary/10 bg-transparent"
                      >
                        <a href={step.action.href} target="_blank" rel="noopener noreferrer">
                          {step.action.label}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Připraven na dobrodružství?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Stáhni modpack, připoj se na server a začni hrát s ostatními hráči v ultimátním modovaném Minecraftu.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              <a
                href="https://www.curseforge.com/minecraft/modpacks/tech-craft-neobox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-5 w-5" />
                Stáhnout a hrát
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
