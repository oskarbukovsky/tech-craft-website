"use client"

import useSWR from "swr"
import { Users, Wifi, WifiOff } from "lucide-react"

const SERVER_IP = "play-tech-craft.666777123.xyz"

interface ServerStatus {
  online: boolean
  players: {
    online: number
    max: number
  }
  version?: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function ServerStatus() {
  const { data, error, isLoading } = useSWR<ServerStatus>(`https://api.mcsrvstat.us/3/${SERVER_IP}`, fetcher, {
    refreshInterval: 60000,
  })

  const isOnline = data?.online ?? false
  const playersOnline = data?.players?.online ?? 0
  const playersMax = data?.players?.max ?? 0

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {isLoading ? (
          <div className="h-3 w-3 rounded-full bg-muted animate-pulse" />
        ) : isOnline ? (
          <>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <Wifi className="h-4 w-4 text-green-500" />
          </>
        ) : (
          <>
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <WifiOff className="h-4 w-4 text-red-500" />
          </>
        )}
        <span className={`text-sm font-medium ${isOnline ? "text-green-500" : "text-red-500"}`}>
          {isLoading ? "Načítání..." : isOnline ? "Online" : "Offline"}
        </span>
      </div>

      {isOnline && (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/30">
          <Users className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">
            {playersOnline}/{playersMax}
          </span>
        </div>
      )}
    </div>
  )
}

export function useServerStatus() {
  const { data, error, isLoading } = useSWR<ServerStatus>(`https://api.mcsrvstat.us/3/${SERVER_IP}`, fetcher, {
    refreshInterval: 60000,
  })

  return {
    isOnline: data?.online ?? false,
    playersOnline: data?.players?.online ?? 0,
    playersMax: data?.players?.max ?? 0,
    isLoading,
    error,
  }
}

export { SERVER_IP }
