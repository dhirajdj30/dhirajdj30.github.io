import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "ORBIT — Operational Risk Based Intelligent Telemetry",
    problem:
      "Traditional observability platforms generate overwhelming alert noise, require manual investigation, and lack intelligent signal correlation, leading to slow incident resolution and high operational overhead.",
    solution:
      "Designed an AI-driven observability framework powered by autonomous multi-agent systems that analyze telemetry signals, surface correlations, generate natural-language diagnostics, and progressively enable proactive and self-healing operations.",
    tech: [
      "Agentic AI",
      "LLMs",
      "FastAPI",
      "Python",
      "Prometheus",
      "Grafana",
      "Vector DB",
      "Kubernetes"
    ],
  },
  {
    title: "AI for Metabase — Natural-Language Dashboard Generator",
    problem:
      "Business teams rely heavily on engineers and analysts to create dashboards, resulting in delays and friction between insights and execution.",
    solution:
      "Built an AI-powered workflow that converts natural-language instructions into SQL, generates Metabase cards, and assembles entire dashboards automatically. The system interprets user intent, infers schema context, and handles end-to-end generation from query to dashboard.",
    tech: [
      "Python",
      "FastAPI",
      "LLMs",
      "LangChain",
      "Metabase API",
      "PostgreSQL"
    ],
  },
  {
    title: "MLflow Platform & Automated Model Migration",
    problem:
      "Model development lacked versioning, governance, and a consistent path from experimentation to production, resulting in delays and unclear model lineage.",
    solution:
      "Implemented an enterprise-grade MLflow platform for experiment tracking, model registry, and lineage. Designed a Jenkins-powered automated migration pipeline that promotes models from development to production based on evaluation metrics and governance checks.",
    tech: [
      "MLflow",
      "Python",
      "Jenkins",
      "Docker",
      "Model Registry",
      "Kubernetes"
    ],
  },
  {
    title: "Unified Stock Intelligence",
    problem:
      "Retail investors lack a unified, intelligent system that merges technical, fundamental, and news-driven insights for stock decision-making.",
    solution:
      "Created a multi-agent system that analyzes market fundamentals, technical indicators, and real-time news sentiment, then synthesizes insights into predictive signals for better decision-making.",
    tech: [
      "Agentic AI",
      "Python",
      "LLMs",
      "FastAPI",
      "Vector Search",
      "Plotting Libraries"
    ],
    github: "https://github.com/dhirajdj30/Unified-Stock-Intelligence",
  },
  {
    title: "APIgentMan — Autonomous API Testing CLI",
    problem:
      "Existing API testing tools are heavy, manual, and lack intelligent insight generation for debugging or anomaly detection.",
    solution:
      "Developed a lightweight CLI-based agentic tool that executes API test collections, performs assertions, monitors performance, detects anomalies, and even generates new tests using an LLM. Designed for developers who prefer terminal-first workflows.",
    tech: [
      "Python",
      "Agentic AI",
      "CLI",
      "YAML",
      "LLMs",
      "FastAPI"
    ],
    github: "https://github.com/dhirajdj30/APIgentMan",
    demo: "https://github.com/dhirajdj30/APIgentMan",
  },
]


export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-muted-foreground" />
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Projects</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-16">Selected work</h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group p-8 border border-border rounded-lg bg-card hover:border-foreground transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-border text-muted-foreground hover:text-foreground hover:border-foreground bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-border text-muted-foreground hover:text-foreground hover:border-foreground bg-transparent"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">The Problem</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">The Solution</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono text-muted-foreground bg-secondary rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
