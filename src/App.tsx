import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"

export function App() {
  return (
    <div className="relative">
      <Navbar />

      <main className="pt-16">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
