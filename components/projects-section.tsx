import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "ML Pipeline Orchestrator",
    problem:
      "Data science teams struggled with inconsistent model training environments and manual deployment processes, leading to delayed releases and production issues.",
    solution:
      "Built an end-to-end ML pipeline orchestrator using Kubeflow and Airflow that automated data preprocessing, model training, evaluation, and deployment with built-in versioning and rollback capabilities.",
    tech: ["Python", "Kubeflow", "Airflow", "Docker", "Kubernetes"],
    github: "#",
    demo: "#",
  },
  {
    title: "LLM Agent Framework",
    problem:
      "Customer support teams were overwhelmed with repetitive queries, leading to slow response times and frustrated customers.",
    solution:
      "Developed an agentic AI framework that orchestrates multiple LLM agents to handle complex, multi-step customer inquiries autonomously, reducing response time by 80%.",
    tech: ["Python", "LangChain", "FastAPI", "Redis", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Model Monitoring",
    problem:
      "ML models in production suffered from silent failures and data drift that went undetected for weeks, causing business impact.",
    solution:
      "Created a comprehensive monitoring dashboard that tracks model performance, data drift, and system health in real-time with automated alerting and retraining triggers.",
    tech: ["Python", "Prometheus", "Grafana", "FastAPI", "InfluxDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Feature Store Platform",
    problem:
      "Feature engineering was duplicated across teams, leading to inconsistent features and wasted compute resources.",
    solution:
      "Implemented a centralized feature store that provides a single source of truth for ML features, enabling feature reuse, versioning, and consistent serving across training and inference.",
    tech: ["Python", "Feast", "Redis", "PostgreSQL", "Kubernetes"],
    github: "#",
    demo: "#",
  },
  {
    title: "GitOps ML Deployment",
    problem:
      "Manual model deployments were error-prone and lacked proper audit trails, making it difficult to track changes and troubleshoot issues.",
    solution:
      "Established a GitOps workflow for ML deployments using ArgoCD and GitHub Actions, enabling declarative, version-controlled deployments with automatic rollbacks.",
    tech: ["GitHub Actions", "ArgoCD", "Helm", "Kubernetes", "Docker"],
    github: "#",
    demo: "#",
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
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border text-muted-foreground hover:text-foreground hover:border-foreground bg-transparent"
                    asChild
                  >
                    <a href={project.github}>
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-border text-muted-foreground hover:text-foreground hover:border-foreground bg-transparent"
                    asChild
                  >
                    <a href={project.demo}>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
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
