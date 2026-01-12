import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Gift, Clock, AlertCircle, Vote } from "lucide-react"

const votingSites = [
  {
    name: "Czech-Craft.eu",
    url: "https://czech-craft.eu/server/tech-craft/vote/",
    hasReward: true,
  },
  {
    name: "CraftList.org",
    url: "https://craftlist.org/tech-craft-server",
    hasReward: true,
  },
  {
    name: "MinecraftServery.eu",
    url: "https://minecraftservery.eu/server/tech-craft",
    hasReward: true,
  },
  {
    name: "Minecraft-List.cz",
    url: "https://www.minecraft-list.cz/server/tech-craft-czsk-modded-server/vote",
    hasReward: true,
  },
  {
    name: "MCServery.eu",
    url: "https://mcservery.eu/server/tech-craft",
    hasReward: false,
  },
]

export function VoteSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Vote className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Podpoř náš server</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Hlasuj pro <span className="text-primary">Tech-Craft</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hlasováním nám pomáháš růst a za každý hlas získáš odměnu!
          </p>
        </div>

        {/* Reward info */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/30">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/20">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Odměna za hlasování</h3>
              <p className="text-muted-foreground mb-3">
                Za každý hlas ve hře obdržíš <span className="text-primary font-bold">50$</span>
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Hlasovat můžeš každé 2 hodiny na každé ze stránek</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div className="mb-8 p-4 rounded-xl bg-accent/10 border border-accent/30 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Tip:</strong> Pro správné obdržení odměn doporučujeme být na serveru
            během hlasování, ale nemělo by to být nutné.
          </p>
        </div>

        {/* Voting sites */}
        <div className="space-y-4 mb-12">
          {votingSites.map((site, index) => (
            <Card
              key={index}
              className={`bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 ${
                !site.hasReward ? "opacity-80" : ""
              }`}
            >
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{site.name}</h3>
                      {!site.hasReward && (
                        <p className="text-xs text-muted-foreground">Aktuálně bez odměn, ale budeme rádi za hlasy</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    {site.hasReward && <span className="text-sm text-primary font-medium">+50$</span>}
                    <Button
                      asChild
                      className="flex-1 sm:flex-none bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a href={site.url} target="_blank" rel="noopener noreferrer">
                        Hlasovat
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 rounded-2xl bg-card/50 border border-border">
          <h3 className="text-xl font-bold mb-3 text-foreground">Děkujeme za podporu!</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Každý hlas nám pomáhá přilákat nové hráče a budovat silnější komunitu. Nezapomeň hlasovat každé 2 hodiny!
          </p>
        </div>
      </div>
    </section>
  )
}
