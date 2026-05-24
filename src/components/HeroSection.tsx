import { ArrowDown, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

export function HeroSection() {
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to new opportunities
        </div>

        {/* Name */}
        <h1 className="font-heading text-6xl font-semibold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Felix{" "}
          <span className="relative inline-block text-primary">
            Antony
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.5C50 1.5 150 1.5 199 5.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="text-primary/60"
              />
            </svg>
          </span>
        </h1>

        {/* Title */}
        <p className="font-heading text-xl text-muted-foreground md:text-2xl">
          Software Engineer & AI Enthusiast
        </p>

        {/* Description */}
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          I craft elegant digital experiences at the intersection of clean code and thoughtful design. Passionate about building software that makes a real difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-card/80 px-6 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-muted"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3 pt-1">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground backdrop-blur-sm transition-all hover:bg-muted hover:text-foreground hover:scale-110"
          >
            <GithubLogo size={16} weight="fill" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/80 text-muted-foreground backdrop-blur-sm transition-all hover:bg-muted hover:text-foreground hover:scale-110"
          >
            <LinkedinLogo size={16} weight="fill" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#skills"
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground animate-bounce"
        aria-label="Scroll to skills section"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
