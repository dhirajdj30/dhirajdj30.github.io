const experiences = [
  {
    title: "Associate MLOps Engineer",
    company: "Qualys",
    period: "2023 — Present",
    description:
      "Leading the development of ML infrastructure and deployment pipelines. Building scalable systems for model training, serving, and monitoring across the organization.",
    highlights: [
      "Reduced model deployment time from days to hours",
      "Implemented automated model monitoring and alerting",
      "Built centralized feature store for ML teams",
    ],
  },
  {
    title: "ML Engineering Intern",
    company: "Tech Startup",
    period: "2022 — 2023",
    description:
      "Worked on end-to-end ML solutions for natural language processing applications. Developed and deployed models for text classification and entity extraction.",
    highlights: [
      "Deployed NLP models to production serving millions of requests",
      "Optimized model inference latency by 40%",
      "Contributed to open-source ML tools",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Enterprise Corp",
    period: "2021 — 2022",
    description:
      "Built backend services and APIs for data-intensive applications. Gained experience in distributed systems and cloud infrastructure.",
    highlights: [
      "Developed RESTful APIs serving 100K+ daily requests",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Managed cloud infrastructure on AWS",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-muted-foreground" />
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">Experience</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-16">Career journey</h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? "" : "md:direction-rtl"}`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-foreground border-4 border-background -translate-x-1.5 md:-translate-x-2" />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                  style={{ direction: "ltr" }}
                >
                  <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1">{exp.title}</h3>
                  <p className="text-foreground/80 font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{exp.description}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                        style={{ justifyContent: index % 2 === 0 ? "flex-end" : "flex-start" }}
                      >
                        <span
                          className={`inline-block w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5 flex-shrink-0 ${
                            index % 2 === 0 ? "order-2" : ""
                          }`}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
