import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "⚡| Tech-Craft™ |⚡ - Modded Minecraft Server",
  description:
    "Join Tech-Craft™, a modded Minecraft 1.20.1 server featuring custom mobs, epic boss battles, new worlds to explore, complex machinery, and endless building possibilities. Download our custom modpack and start your adventure!",
  keywords: [
    "Minecraft",
    "modded server",
    "Tech-Craft",
    "modpack",
    "Minecraft server",
    "1.20.1",
    "machinery",
    "bosses",
  ],
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
