"use client"

import { Button } from "@/components/ui/button"
import { Download, Copy, Check, Vote } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { ServerStatus, SERVER_IP } from "./server-status"

export function HeroSection() {
  const [copied, setCopied] = useState(false)

  const copyIP = () => {
    navigator.clipboard.writeText(SERVER_IP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/dark-minecraft-landscape-with-futuristic-machinery.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-card/80 border border-border backdrop-blur-sm">
            <span className="text-sm text-muted-foreground">Server status</span>
            <div className="h-4 w-px bg-border" />
            <ServerStatus />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          <span className="text-primary">⚡</span> Tech-Craft <span className="text-primary">⚡</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          Zažij Minecraft jako nikdy předtím. Stavěj komplexní stroje, bojuj s epickými bossy, prozkoumej nové dimenze a
          vytvoř si svůj příběh v našem modovaném vesmíru.
        </p>

        {/* Server IP Card */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-primary/30 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">IP Serveru:</span>
            <code className="px-3 py-1.5 rounded-lg bg-secondary text-primary font-mono text-sm font-bold">
              {SERVER_IP}
            </code>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={copyIP} aria-label="Kopírovat IP">
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow text-lg px-8 py-6"
          >
            <a
              href="https://www.curseforge.com/minecraft/modpacks/tech-craft-neobox"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Stáhnout Modpack
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6 bg-transparent"
          >
            <Link href="/vote">
              <Vote className="mr-2 h-5 w-5" />
              Hlasovat
            </Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
