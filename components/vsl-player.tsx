"use client"

import { Volume2, VolumeX } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function VSLPlayer({ videoUrl }: { videoUrl: string }) {
  const [isMuted, setIsMuted] = useState(true)
  const [showUnmutePrompt, setShowUnmutePrompt] = useState(true)
  const [visualProgress, setVisualProgress] = useState(0)
  const progressRef = useRef(0)
  const pauseTimesRef = useRef<number[]>([])
  const hasPausedRef = useRef<Set<number>>(new Set())
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Generate random pause points (1-3 pauses)
    const numPauses = Math.floor(Math.random() * 3) + 1
    const pauses: number[] = []
    for (let i = 0; i < numPauses; i++) {
      pauses.push(Math.random() * 0.7 + 0.1) // Random positions between 10% and 80%
    }
    pauseTimesRef.current = pauses.sort()

    // Simulate progress since we can't get real time from YouTube iframe easily without API
    const duration = 600 // Assume 10 minutes for simulation
    const startTime = Date.now()

    const updateProgress = () => {
      const elapsed = (Date.now() - startTime) / 1000
      const realProgress = Math.min(elapsed / duration, 1)

      // Fake progress logic
      const leadFactor = 1.15
      const target = Math.min(realProgress * leadFactor, 0.95)

      // Check for pause points
      for (const pausePoint of pauseTimesRef.current) {
        if (realProgress >= pausePoint && !hasPausedRef.current.has(pausePoint)) {
          hasPausedRef.current.add(pausePoint)
          // Hold progress for a moment
          setTimeout(
            () => {
              progressRef.current = target
            },
            Math.random() * 600 + 200,
          )
          return
        }
      }

      // Smooth interpolation
      progressRef.current += (target - progressRef.current) * 0.1
      setVisualProgress(progressRef.current)

      if (realProgress < 1) {
        requestAnimationFrame(updateProgress)
      }
    }

    const animationFrame = requestAnimationFrame(updateProgress)

    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  const handleUnmute = () => {
    setIsMuted(false)
    setShowUnmutePrompt(false)
    // Send postMessage to YouTube iframe to unmute
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "unMute",
          args: [],
        }),
        "*",
      )
    }
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-4 sm:mb-6 md:mb-10 lg:mb-12 px-2 sm:px-0">
      <div className="relative w-full bg-black rounded-lg overflow-hidden shadow-2xl aspect-video">
        <iframe
          ref={iframeRef}
          className="w-full h-full absolute inset-0"
          src="https://www.youtube.com/embed/r14Lin6bGoc?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=r14Lin6bGoc&enablejsapi=1"
          title="VSL Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        {/* Unmute Prompt */}
        {showUnmutePrompt && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-10"
            onClick={handleUnmute}
          >
            <div className="flex flex-col items-center gap-2 sm:gap-3 animate-pulse">
              <div className="bg-primary rounded-full p-3 sm:p-4 shadow-lg">
                {isMuted ? <VolumeX className="w-6 h-6 sm:w-8 sm:h-8 text-black" /> : <Volume2 className="w-6 h-6 sm:w-8 sm:h-8 text-black" />}
              </div>
              <p className="text-white text-sm sm:text-lg md:text-xl font-bold px-3 sm:px-4 py-1.5 sm:py-2 bg-black/70 rounded-lg">
                Clique para ouvir
              </p>
            </div>
          </div>
        )}

        {/* Custom Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 z-20">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{
              width: `${visualProgress * 100}%`,
              transitionTimingFunction: "cubic-bezier(0.2, 0.9, 0.2, 1)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
