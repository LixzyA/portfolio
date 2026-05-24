import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react"

const projects = [
  {
    title: "RAG chatbot",
    description:
      "An intelligent document-augmented conversational AI system that intelligently routes queries to specialized or generalist LLMs while retrieving relevant context from uploaded documents.",
    tech: ["TypeScript", "React", "LangChain", "HuggingFace API", "FastAPI", "ChromaDB", "Vite"],
    github: "https://github.com/LixzyA/RAG-Chatbot",
    live: "https://example.com",
    featured: true,
    category: "AI",
  },
  {
    title: "GPT-2 Finetuning for Summarization",
    description:
      "Finetuned GPT-2 to produce abstractive summaries of news articles,",
    tech: ["HuggingFace", "PyTorch", "Scikit-learn", "NumPy", "Jupyter"],
    github: "https://github.com/LixzyA/GPT2-Finetuning",
    live: "https://example.com",
    featured: true,
    category: "AI",
  },
  {
    title: "Learning Recommendation System",
    description:
      "Integrated Weaviate to maintain contextual relevance and optimize between semantic and keyword search using NDCG@k.",
    tech: ["FastAPI", "HuggingFace", "Weaviate", "Scrapy", "SQLite", "Cohere Reranker", "Kubernetes"],
    github: "https://github.com/LixzyA/Learning-Recommendation-System-with-LLM",
    // live: "https://example.com",
    featured: false,
    category: "AI",
  },
  {
    title: "Portfolio (This Site!)",
    description:
      "A single-page portfolio website with dark / light mode and smooth animations. Built with React, Vite, TailwindCSS v4, and shadcn/ui components.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/LixzyA/portfolio",
    live: '#',
    featured: false,
    category: "Web",
  },
]

const categoryColors: Record<string, string> = {
  AI: "text-violet-500 bg-violet-500/10 border-violet-500/20",
  "Web App": "text-blue-500 bg-blue-500/10 border-blue-500/20",
  Tooling: "text-amber-500 bg-amber-500/10 border-amber-500/20",
  Backend: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  ML: "text-pink-500 bg-pink-500/10 border-pink-500/20",
  Web: "text-sky-500 bg-sky-500/10 border-sky-500/20",
}

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center py-24 px-6"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-primary/5 blur-[80px]" />

      <div className="mx-auto w-full max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            What I've built
          </p>
          <h2 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A selection of open-source and personal projects I've shipped across different domains.
          </p>
        </div>

        {/* Featured projects */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col rounded-xl border border-border bg-card/50 p-7 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Featured badge */}
              <div className="absolute right-5 top-5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20">
                Featured
              </div>

              <div className="mb-4 flex items-start justify-between pr-20">
                <div>
                  <span
                    className={`mb-2 inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[project.category]}`}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                </div>
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mb-5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubLogo size={14} weight="fill" />
                  Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowSquareOut size={14} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {rest.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-3 flex items-start justify-between">
                <span
                  className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${categoryColors[project.category]}`}
                >
                  {project.category}
                </span>
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">{project.title}</h3>
              <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="rounded-full border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} GitHub`}
                  className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GithubLogo size={13} weight="fill" />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live`}
                    className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowSquareOut size={13} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
