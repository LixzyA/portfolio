import * as React from "react"
import { Brain, Link as LinkIcon, OpenAiLogoIcon, DatabaseIcon } from "@phosphor-icons/react"

type Skill = {
  name: string
  category: string
  deviconClass?: string
  invertDark?: boolean
  PhosphorIcon?: React.ElementType,
  fill?: string,
}


const skills: Skill[] = [
  { name: "TypeScript", category: "Language", deviconClass: "devicon-typescript-plain colored" },
  { name: "Python", category: "Language", deviconClass: "devicon-python-plain colored" },
  { name: "C++", category: "Language", deviconClass: "devicon-cplusplus-plain colored" },
  { name: "React", category: "Frontend", deviconClass: "devicon-react-original colored" },
  { name: "Tailwind CSS", category: "Frontend", deviconClass: "devicon-tailwindcss-plain colored" },
  { name: "Vite", category: "Frontend", deviconClass: "devicon-vitejs-plain colored", fill: "#82d7f7" },
  { name: "Node.js", category: "Backend", deviconClass: "devicon-nodejs-plain colored" },
  { name: "PostgreSQL", category: "Backend", deviconClass: "devicon-postgresql-plain colored" },
  { name: "ChromaDB", category: "Backend", PhosphorIcon: DatabaseIcon },
  { name: "Redis", category: "Backend", deviconClass: "devicon-redis-plain colored" },
  { name: "HuggingFace", category: "AI / ML", PhosphorIcon: Brain },
  { name: "LangChain", category: "AI / ML", PhosphorIcon: LinkIcon },
  { name: "OpenAI API", category: "AI / ML", PhosphorIcon: OpenAiLogoIcon },
  { name: "scikit-learn", category: "AI / ML", deviconClass: "devicon-scikitlearn-plain", fill: "#8f3a6eff" },
  { name: "Docker", category: "DevOps", deviconClass: "devicon-docker-plain colored" },
  { name: "GitHub Actions", category: "DevOps", deviconClass: "devicon-github-original", invertDark: true },
  { name: "AWS", category: "DevOps", deviconClass: "devicon-amazonwebservices-plain colored" },
  { name: "Vercel", category: "DevOps", deviconClass: "devicon-vercel-original", invertDark: true },
  { name: "Git", category: "Tools", deviconClass: "devicon-git-plain colored" },
]

const categoryColors: Record<string, { badge: string; icon: string }> = {
  Language: { badge: "text-violet-500 bg-violet-500/10 border-violet-500/20", icon: "text-violet-400" },
  Frontend: { badge: "text-blue-500 bg-blue-500/10 border-blue-500/20", icon: "text-blue-400" },
  Backend: { badge: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20", icon: "text-emerald-400" },
  "AI / ML": { badge: "text-pink-500 bg-pink-500/10 border-pink-500/20", icon: "text-pink-400" },
  DevOps: { badge: "text-amber-500 bg-amber-500/10 border-amber-500/20", icon: "text-amber-400" },
  Tools: { badge: "text-sky-500 bg-sky-500/10 border-sky-500/20", icon: "text-sky-400" },
}

function SkillCard({ skill }: { skill: Skill }) {
  const colors = categoryColors[skill.category]
  const { PhosphorIcon } = skill

  return (
    <div className="flex shrink-0 select-none flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card/60 px-7 py-5 backdrop-blur-sm min-w-[152px] transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5">
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center">
        {skill.deviconClass ? (
          <i
            className={[
              skill.deviconClass,
              "text-[2.25rem] leading-none",
              skill.invertDark ? "dark:invert" : "",
            ].join(" ")}
            style={skill.fill ? { color: skill.fill } : undefined}
          />
        ) : PhosphorIcon ? (
          <PhosphorIcon size={36} weight="duotone" className={colors.icon} color={skill.fill} />
        ) : null}
      </div>

      {/* Name */}
      <span className="text-sm font-semibold text-foreground text-center leading-tight whitespace-nowrap">
        {skill.name}
      </span>

      {/* Category badge */}
      <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors.badge}`}>
        {skill.category}
      </span>
    </div>
  )
}

export function SkillsSection() {
  const [paused, setPaused] = React.useState(false)

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Section Header */}
      <div className="mb-12 px-6 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
          What I work with
        </p>
        <h2 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
          Skills & Technologies
        </h2>
        <p className="mt-4 mx-auto max-w-lg text-sm leading-relaxed text-muted-foreground">
          A curated set of tools and technologies I've mastered across the full stack.
        </p>
      </div>

      {/* Marquee wrapper — pause on hover */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade-out edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        {/* Scrolling track — duplicated list for seamless loop */}
        <div
          className="flex gap-4 py-2 px-2"
          style={{
            width: "max-content",
            animation: "portfolio-marquee 45s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
