import { Terminal, Cpu, Workflow } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Section Header */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-muted-foreground" />
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">About</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Engineering the future of ML systems
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m an Associate Machine Learning Operations Engineer at Qualys, where I bridge the gap between
              machine learning models and production systems. My work focuses on building robust, scalable
              infrastructure that transforms ML experiments into reliable, production-ready solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a deep interest in LLMs and Agentic AI, I&apos;m constantly exploring new ways to automate and
              optimize AI workflows. I believe in building systems that are not just functional, but elegant—where every
              component serves a purpose.
            </p>
          </div>
        </div>

        {/* Stats/Focus Areas */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 border border-border rounded-lg bg-card">
            <Terminal className="h-8 w-8 text-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">DevOps & CI/CD</h3>
            <p className="text-sm text-muted-foreground">
              Automating deployment pipelines and infrastructure management for seamless delivery.
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg bg-card">
            <Cpu className="h-8 w-8 text-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">ML Engineering</h3>
            <p className="text-sm text-muted-foreground">
              Building and optimizing machine learning models for production environments.
            </p>
          </div>
          <div className="p-6 border border-border rounded-lg bg-card">
            <Workflow className="h-8 w-8 text-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Agentic AI</h3>
            <p className="text-sm text-muted-foreground">
              Designing autonomous agent workflows that handle complex, multi-step tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
