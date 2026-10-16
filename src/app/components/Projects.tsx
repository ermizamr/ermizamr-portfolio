import { Globe, Github, ChevronLeft, ChevronRight, Download, Send } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface Project {
  name: string;
  date: string;
  description: string;
  tech: string[];
  image: string;
  screenshots?: string[];
  live: string | null;
  liveLabel?: string;
  secondaryLive?: {
    url: string;
    label: string;
    icon?: "bot" | "web" | "download";
  };
  github: string | null;
}

const projects: Project[] = [
  {
    name: "LISAN (ልሳን) AI",
    date: "October 2026",
    description: "First open-source offline speech-to-speech translation mobile system and crowd-validation platform for Ethiopian & Horn languages (Amharic, Afaan Oromoo, Tigrinya, Somali). Features on-device neural inference and a real-time validation hub with a Telegram bot.",
    tech: ["Python", "FastAPI", "Flutter", "PyTorch", "Supabase", "Telegram Bot API"],
    image: "/lisan.jpg",
    screenshots: [
      "/lisan-screen-1.jpg",
    ],
    live: "https://lisan.ermizamr.tech/validate.html",
    liveLabel: "Web Hub",
    secondaryLive: {
      url: "https://t.me/LisanAiEtBot",
      label: "Telegram Bot",
      icon: "bot",
    },
    github: "https://github.com/ermizamr/LISAN",
  },
  {
    name: "USDENT",
    date: "January 2026",
    description: "B2B SaaS platform automating dental insurance appeal workflows for US dental clinics, with multi-tenant backend and role management.",
    tech: ["Django", "PostgreSQL", "React", "REST APIs"],
    image: "/usdent.jpg",
    live: "https://usdent-appeal-builder.vercel.app",
    github: "https://github.com/ermizamr/usdent-appeal-builder",
  },
  {
    name: "E.Mslene Educational Platform",
    date: "January 2025",
    description: "Multi-role academic management system with RBAC for students, teaching staff, and admins. Supports attendance, grades, and registration.",
    tech: ["Django", "React", "PostgreSQL", "RBAC"],
    image: "/emslene.jpg",
    live: null,
    github: null,
  },
  {
    name: "TG-Teacher Bot",
    date: "March 2026",
    description: "AI-powered Telegram bot for space, STEM, and Ethiopian tech learners. Context-aware responses with persistent memory via Supabase.",
    tech: ["Python", "Groq API", "Supabase", "Telegram Bot API"],
    image: "/tgteacherbot.jpg",
    live: "https://t.me/erzamrbot",
    liveLabel: "Try Bot",
    github: "https://github.com/ermizamr/ai-tg-bot",
  },
  {
    name: "Space For ET",
    date: "April 2026",
    description: "Mobile app showcasing Ethiopia's contributions to space exploration with live rocket launch alerts and stargazing guidance.",
    tech: ["Flutter", "Dart", "REST APIs"],
    image: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?w=800&h=450&fit=crop",
    screenshots: [
      "/space-et-1.jpg",
      "/space-et-2.jpg",
      "/space-et-3.jpg",
      "/space-et-4.jpg",
      "/space-et-5.jpg",
    ],
    live: "https://github.com/ermizamr/SPACE-FOR-ET-APK/releases",
    liveLabel: "Download APK",
    github: "https://github.com/ermizamr/SPACE-FOR-ET-APK",
  },
  {
    name: "Space News Bot",
    date: "March 2025",
    description: "Telegram bot that automatically aggregates and delivers daily space science news updates to subscribers.",
    tech: ["Python", "Telegram Bot API"],
    image: "https://images.unsplash.com/photo-1457364887197-9150188c107b?w=800&h=450&fit=crop",
    live: "https://t.me/et_space_news_bot",
    liveLabel: "Try Bot",
    github: "https://github.com/ermizamr/Space-news-bot",
  },
];

function ProjectScreenshots({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  if (!images.length) return null;

  return (
    <div className="mt-1">
      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">Screenshots</p>
      <div className="relative rounded-lg overflow-hidden bg-muted aspect-[9/16] max-h-80">
        <ImageWithFallback
          src={images[current]}
          alt={`${name} screenshot ${current + 1}`}
          className="w-full h-full object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === current ? "bg-foreground" : "bg-foreground/30"
                  }`}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

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
              {project.screenshots && project.screenshots.length > 0 && (
                <ProjectScreenshots images={project.screenshots} name={project.name} />
              )}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity">
                    {project.liveLabel === "Download APK"
                      ? <Download className="h-3 w-3" />
                      : project.liveLabel === "Try Bot"
                      ? <Send className="h-3 w-3" />
                      : <Globe className="h-3 w-3" />
                    }
                    {project.liveLabel ?? "Website"}
                  </a>
                )}
                {project.secondaryLive && (
                  <a href={project.secondaryLive.url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity">
                    {project.secondaryLive.icon === "bot" ? <Send className="h-3 w-3" /> : <Globe className="h-3 w-3" />}
                    {project.secondaryLive.label}
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
