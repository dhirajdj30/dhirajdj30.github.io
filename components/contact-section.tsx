"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-muted-foreground" />
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Contact</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Let&apos;s build something together
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8">
              I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or
              just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:dj@example.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-5 w-5" />
                <span>dj@example.com</span>
                <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-card border-border focus:border-foreground"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-card border-border focus:border-foreground"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-card border-border focus:border-foreground"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-card border-border focus:border-foreground resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
