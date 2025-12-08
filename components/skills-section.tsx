import {
  Code2,
  Container,
  Network,
  GitBranch,
  Zap,
  Brain,
  Cpu,
  Cloud,
  Terminal,
  GitMerge,
  Database,
  Server,
} from "lucide-react"

const skills = [
  { name: "Python", icon: Code2 },
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Network },
  { name: "GitHub Actions", icon: GitBranch },
  { name: "FastAPI", icon: Zap },
  { name: "TensorFlow", icon: Brain },
  { name: "PyTorch", icon: Cpu },
  { name: "AWS", icon: Cloud },
  { name: "Linux", icon: Terminal },
  { name: "Git", icon: GitMerge },
  { name: "PostgreSQL", icon: Database },
  { name: "Redis", icon: Server },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-muted-foreground" />
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Skills</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-16">Tech stack & tools</h2>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 p-6 border border-border rounded-lg bg-background hover:border-foreground transition-colors"
            >
              <skill.icon className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 flex flex-wrap gap-3">
          {[
            "MLOps",
            "LLMs",
            "Agentic AI",
            "CI/CD",
            "Microservices",
            "REST APIs",
            "gRPC",
            "Monitoring",
            "Prometheus",
            "Grafana",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-mono text-muted-foreground border border-border rounded-full hover:text-foreground hover:border-foreground transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
