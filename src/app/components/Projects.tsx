import { Globe, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    name: "USDENT",
    date: "January 2026",
    description: "B2B SaaS platform automating dental insurance appeal workflows for US dental clinics, with multi-tenant backend and role management.",
    tech: ["Django", "PostgreSQL", "React", "REST APIs"],
    image: "/usdent.jpg",
    live: null,
    github: "https://github.com/ermizamr/usdent-appeal-builder",
  },
  {
    name: "E.mslene Educational Platform",
    date: "January 2025",
    description: "Multi-role academic management system with RBAC for students, teaching staff, and admins. Supports attendance, grades, and registration.",
    tech: ["Django", "React", "PostgreSQL", "RBAC"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=450&fit=crop",
    live: null,
    github: null,
  },
  {
    name: "TG-Teacher Bot",
    date: "March 2026",
    description: "AI-powered Telegram bot for space, STEM, and Ethiopian tech learners. Context-aware responses with persistent memory via Supabase.",
    tech: ["Python", "Groq API", "Supabase", "Telegram Bot API"],
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&h=450&fit=crop",
    live: null,
    github: "https://github.com/ermizamr/ai-tg-bot",
  },
  {
    name: "Space For ET",
    date: "April 2026",
    description: "Mobile app showcasing Ethiopia's contributions to space exploration with live rocket launch alerts and stargazing guidance.",
    tech: ["Flutter", "Dart", "REST APIs"],
    image: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?w=800&h=450&fit=crop",
    live: null,
    github: "https://github.com/ermizamr/SPACE-FOR-ET-APK",
  },
  {
    name: "Space News Bot",
    date: "March 2025",
    description: "Telegram bot that automatically aggregates and delivers daily space science news updates to subscribers.",
    tech: ["Python", "Telegram Bot API"],
    image: "https://images.unsplash.com/photo-1457364887197-9150188c107b?w=800&h=450&fit=crop",
    live: null,
    github: "https://github.com/ermizamr/Space-news-bot",
  },
];

export function Projects() {
  return (
    <section aria-label="Featured Projects" className="py-10 border-t border-border">
      <div className="mb-8 text-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 bg-foreground text-background rounded-full mb-4">My Projects</span>
        <h2 className="text-3xl font-extrabold tracking-tight">Check out my latest work</h2>
        <p className="text-muted-foreground mt-2 text-sm">A mix of SaaS products, bots, and mobile apps — here are a few of my favorites.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article key={project.name} aria-label={project.name} className="border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-muted overflow-hidden">
              <ImageWithFallback src={project.image} alt={project.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-bold text-base">{project.name}</h3>
                <p className="text-xs text-muted-foreground">{project.date}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 border border-border rounded-full text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="flex gap-2 pt-1">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity">
                    <Globe className="h-3 w-3" />Website
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity">
                    <Github className="h-3 w-3" />Source
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
