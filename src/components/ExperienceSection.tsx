const experiences = [
  {
    company: "OPPO Indonesia",
    role: "System Project & Support",
    period: "Aug 2025 - Present",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    description:
      "Analyze and preprocess data from Customer Relationship Management (CRM) systems using Python, automating workflows and saving 66% time while generating actionable business insights.",
    highlights: [
      "Analyze and preprocess data from Customer Relationship Management (CRM) systems using Python",
      "Automating workflows and saving 66% time",
      "Generating actionable business insights",
    ],
    tech: ["CRM", "Tableau", "Python"],
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col justify-center py-24 px-6"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-[80px]" />

      <div className="mx-auto w-full max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Career journey
          </p>
          <h2 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Experience
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A timeline of the roles and responsibilities that shaped my engineering mindset.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex gap-8 md:gap-0 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-5 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div
                  className={`ml-12 flex-1 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-10" : "md:pr-10"
                    }`}
                >
                  <div className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
                          <p className="text-sm font-medium text-primary">{exp.company}</p>
                        </div>
                        <span className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
                          {exp.type}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span>{exp.period}</span>
                        <span>·</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mb-4 flex flex-col gap-1.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="mt-0.5 text-primary">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
