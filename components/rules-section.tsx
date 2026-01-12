import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, ScrollText } from "lucide-react"

const rules = [
  {
    id: 1,
    text: "Chovejte se vyspěle! Nenadávejte si a respektujte ostatní lidi na tomto serveru.",
  },
  {
    id: 2,
    text: "Zákaz jakéhokoliv rasistického, homofobního a sexistického chování.",
  },
  {
    id: 3,
    text: "Přísný zákaz šikanování, zastrašování a vyhrožování ostatním lidem.",
  },
  {
    id: 4,
    text: "Zákaz obtěžování ostatních hráčů skrze soukromé zprávy.",
  },
  {
    id: 5,
    text: "Přísný zákaz jakékoliv nelegální činnosti.",
  },
  {
    id: 6,
    text: "Přísně zakázané jsou také přezdívky a profilové obrázky, které budou obsahovat vulgaritu nebo erotický podtext. Jak na DC tak ve hře.",
  },
  {
    id: 7,
    text: "Hráčům je přísně zakázáno nenahlášení/zneužívání/šíření jakýchkoli bugů hry nebo duplikování itemů.",
  },
  {
    id: 8,
    text: "Hráč je povinný stavět s rozvahou, pokud tak neučiní, člen Admin-Teamu má právo na upozornění. Ve vážném případě bez náhrady smazat.",
  },
  {
    id: 9,
    text: "Hráčům je přísně zakázáno jakékoli úmyslné omezování jiných hráčů.",
  },
  {
    id: 10,
    text: "Hráčům je přísně zakázáno jakékoli ničení cizího majetku (platí i pro nezabezpečený majetek).",
  },
  {
    id: 11,
    text: "Hráčům je přísně zakázáno vytváření cyklů v obvodech.",
  },
  {
    id: 12,
    text: "Je zakázáno stavět multiblocky přes více než 1 chunk (za multiblocky se považuje struktura stroje, která sestává z více než 1 blocku, chunky lze zobrazit klávesovou zkratkou F3+G).",
  },
  {
    id: 13,
    text: "Je přísně zakázáno používat cokoliv co hráče zvýhodňuje oproti ostatním hráčům, tj. věci jako x-ray, noclip, killaura, apod.",
  },
  {
    id: 14,
    text: "Náročné věci jako quarry jsou povolené v rozumném množství a každá bude v extra chunku. Žádné pokládání 4 quarry do chunku. Rovněž nevybírejte moc velké regiony. Ideální ~4x4 chunky. Zároveň jediný povolený svět na quarry je těžba. EnderIO Capacitor banky jsou povolené v malém množství (~3x3x1).",
  },
]

export function RulesSection() {
  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <ScrollText className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Pravidla serveru</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Pravidla <span className="text-primary">Tech-Craft</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Dodržováním pravidel pomáháš budovat přátelskou a férovou komunitu pro všechny hráče.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {rules.map((rule) => (
            <Card
              key={rule.id}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-sm shrink-0">
                    {rule.id}
                  </div>
                  <p className="text-foreground leading-relaxed">{rule.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warning Note */}
        <div className="p-5 rounded-xl bg-accent/10 border border-accent/30">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
            <div className="space-y-2">
              <p className="text-foreground font-medium">Neznalost pravidel vás neomlouvá!</p>
              <p className="text-sm text-muted-foreground">
                V případě jakýchkoliv nesrovnalostí či nejasností v pravidlech kontaktujte někoho z vedení na Discordu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
