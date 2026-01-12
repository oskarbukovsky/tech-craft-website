import { Zap } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">Tech-Craft</span>
            <Zap className="h-5 w-5 text-primary" />
          </Link>

          <div className="flex items-center gap-6">
            <a
              href="https://discord.com/invite/cHVsyJdcxv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Discord
            </a>
            <a
              href="https://www.curseforge.com/minecraft/modpacks/tech-craft-neobox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              CurseForge
            </a>
            <Link href="/rules" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pravidla
            </Link>
            <Link href="/vote" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Hlasovat
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tech-Craft. Není spojeno s Mojang.
          </p>
        </div>
      </div>
    </footer>
  )
}
