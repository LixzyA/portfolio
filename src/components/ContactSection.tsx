import * as React from "react"
import { EnvelopeSimple, GithubLogo, LinkedinLogo, PaperPlaneTilt } from "@phosphor-icons/react"
import { useForm, ValidationError } from '@formspree/react';

const email = "felix.antony168@gmail.com"
const github = "https://github.com/LixzyA"
const linkedin = "https://www.linkedin.com/in/felix-antony-dev/"

const contactLinks = [
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: email,
    href: "mailto:" + email,
    description: "Best way to reach me directly.",
  },
  {
    icon: GithubLogo,
    label: "GitHub",
    value: github.substring(8),
    href: github,
    description: "Check out my open-source work.",
  },
  {
    icon: LinkedinLogo,
    label: "LinkedIn",
    value: linkedin.substring(8),
    href: linkedin,
    description: "Let's connect professionally.",
  },
]

export function ContactSection() {
  const [state, handleSubmit] = useForm("mgoqlerz")

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center py-24 px-6"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
            Let's talk
          </p>
          <h2 className="font-heading text-4xl font-semibold text-foreground md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you. My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact Links */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {contactLinks.map(({ icon: Icon, label, value, href, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={`${label}: ${value}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  <Icon size={18} weight="duotone" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground">{label}</p>
                  <p className="truncate text-sm font-medium text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground/70">{description}</p>
                </div>
              </a>
            ))}

            {/* Availability note */}
            <div className="mt-2 rounded-xl border border-border bg-card/30 p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-foreground">Currently available</span>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                I'm open to full-time roles, freelance projects, and consulting. Response time is typically within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-border bg-card/50 p-7 backdrop-blur-sm lg:col-span-3">
            {state.succeeded ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center py-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <PaperPlaneTilt size={24} weight="duotone" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Message sent!</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-medium text-foreground">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="h-10 rounded-lg border border-border bg-background/50 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-400 mt-0.5" />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-medium text-foreground">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="h-10 rounded-lg border border-border bg-background/50 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-0.5" />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-medium text-foreground">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project or just say hi..."
                    className="resize-none rounded-lg border border-border bg-background/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-400 mt-0.5" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  id="contact-submit"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <>
                      <span className="h-3.5 w-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <PaperPlaneTilt size={14} weight="fill" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-xs text-muted-foreground relative z-10">
        <p>
          Designed & built by{" "}
          <span className="font-medium text-foreground">Felix Antony</span> · {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  )
}
