"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const isDark = resolvedTheme === "dark"
    const nodeColor = isDark ? "255, 255, 255" : "0, 0, 0"
    const nodeOpacityBase = isDark ? 0.5 : 0.3
    const lineOpacityBase = isDark ? 0.15 : 0.05

    const nodes: { x: number; y: number; connections: number[]; pulsePhase: number }[] = []
    const nodeCount = 35

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    nodes.forEach((node, i) => {
      const nearestNodes = nodes
        .map((n, j) => ({ index: j, dist: Math.hypot(n.x - node.x, n.y - node.y) }))
        .filter((n) => n.index !== i && n.dist < 200)
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 3)
      node.connections = nearestNodes.map((n) => n.index)
    })

    let animationFrame: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      nodes.forEach((node) => {
        node.connections.forEach((connIndex) => {
          const connNode = nodes[connIndex]
          const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connNode.x, connNode.y)
          ctx.strokeStyle = `rgba(${nodeColor}, ${lineOpacityBase + pulse * 0.15})`
          ctx.lineWidth = 1
          ctx.stroke()
        })
      })

      nodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2 + pulse * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${nodeColor}, ${nodeOpacityBase + pulse * 0.4})`
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [resolvedTheme])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-neutral-900 dark:via-background dark:to-background" />

      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-70" />

      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-foreground/10 dark:border-foreground/20" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-foreground/10 dark:border-foreground/20" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-foreground/10 dark:border-foreground/20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-foreground/10 dark:border-foreground/20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-foreground/30 dark:bg-foreground/50" />
          <span className="inline-block px-5 py-2 text-xs font-mono uppercase tracking-[0.2em] text-foreground/70 dark:text-foreground/90 border border-foreground/20 dark:border-foreground/40 rounded-full bg-background/50 backdrop-blur-sm">
            Associate MLOps Engineer @ Qualys
          </span>
          <div className="h-px w-12 bg-foreground/30 dark:bg-foreground/50" />
        </div>

        <div className="relative mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground">
            Dhiraj
            <span className="block mt-2 text-foreground/20 dark:text-foreground/40">Jagtap</span>
          </h1>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-1 bg-foreground/10 dark:bg-foreground/30" />
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Building <span className="text-foreground font-medium dark:text-white">scalable ML systems</span>,
            automating <span className="text-foreground font-medium dark:text-white">AI workflows</span>, and
            engineering <span className="text-foreground font-medium dark:text-white">intelligent pipelines</span> that
            just work.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mb-16">
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 border-2 border-foreground/20 dark:border-foreground/40 text-foreground/70 dark:text-foreground/90 hover:text-foreground hover:border-foreground hover:bg-foreground/5 dark:hover:bg-foreground/10 bg-background/50 backdrop-blur-sm transition-all duration-300"
            asChild
          >
            <a href="https://github.com/dhirajdj30" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 border-2 border-foreground/20 dark:border-foreground/40 text-foreground/70 dark:text-foreground/90 hover:text-foreground hover:border-foreground hover:bg-foreground/5 dark:hover:bg-foreground/10 bg-background/50 backdrop-blur-sm transition-all duration-300"
            asChild
          >
            <a href="https://www.linkedin.com/in/dhiraj-jagtap-297a7322b" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 border-2 border-foreground/20 dark:border-foreground/40 text-foreground/70 dark:text-foreground/90 hover:text-foreground hover:border-foreground hover:bg-foreground/5 dark:hover:bg-foreground/10 bg-background/50 backdrop-blur-sm transition-all duration-300"
            asChild
          >
            <a href="mailto:dhirajdj30@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <a
          href="#about"
          className="inline-flex flex-col items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="font-mono text-xs tracking-widest uppercase">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-foreground/30 dark:border-foreground/50 rounded-full flex items-start justify-center p-1 group-hover:border-foreground/50 dark:group-hover:border-foreground/70 transition-colors">
            <div className="w-1.5 h-3 bg-foreground/50 dark:bg-foreground/70 rounded-full animate-bounce group-hover:bg-foreground transition-colors" />
          </div>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/20 dark:via-foreground/40 to-transparent" />
    </section>
  )
}
