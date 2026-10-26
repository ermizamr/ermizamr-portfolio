import { Globe, Github, Download, Send, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectItem {
  title: string;
  date: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    label: string;
    href: string;
    icon: "globe" | "github" | "download" | "send";
  }[];
}

const projects: ProjectItem[] = [
  {
    title: "Weg (ወግ) — AI Meeting Intelligence",
    date: "October 2026",
    description:
      "Client-side AI meeting notes assistant for Google Meet and Android. Captures tab and system audio directly without bot participants, streams 5-second sequential audio chunks, and transcribes Amharic and Amharic-English bilingual speech using Gemini 2.5 Flash and Hohe ASR to generate structured summaries and action items.",
    tech: ["Chrome MV3", "Android (Kotlin)", "Python", "FastAPI", "Gemini 2.5 Flash", "Hohe ASR", "Tailwind CSS"],
    image: "/weg-cover.jpg",
    links: [
      { label: "Live Site", href: "https://weg.ermizamr.tech", icon: "globe" },
      { label: "Source Code", href: "https://github.com/ermizamr/amharic-notebook", icon: "github" },
    ],
  },
  {
    title: "LISAN (ልሳን) — Offline Speech-to-Speech Mobile App",
    date: "October 2026",
    description:
      "Offline speech-to-speech translation mobile application for Ethiopian and Horn languages (Amharic, Afaan Oromoo, Tigrinya, Somali, English). Runs genuine on-device VITS MMS-TTS and quantized NLLB-200 via zero-copy C++ FFI decoding, operating completely without an internet connection within a strict 350MB RAM limit.",
    tech: ["Flutter", "Dart", "C++ FFI", "ONNX Runtime", "VITS MMS-TTS", "NLLB-200"],
    image: "/lisan-mobile-cover.jpg",
    links: [
      { label: "Download APK", href: "https://lisan.ermizamr.tech/lisan-app.apk", icon: "download" },
      { label: "Product Landing", href: "https://lisan.ermizamr.tech", icon: "globe" },
      { label: "Source Code", href: "https://github.com/ermizamr/LISAN", icon: "github" },
    ],
  },
  {
    title: "LISAN AI Community Validation Hub",
    date: "October 2026",
    description:
      "Crowdsourced micro-task validation ecosystem and open-source benchmark dataset builder for Ethiopian languages. Features a gamified Telegram bot with real-time XP leaderboards and a web verification suite powering 373K+ bitext pairs.",
    tech: ["Python", "FastAPI", "Supabase", "PostgreSQL", "Telegram Bot API", "Tailwind CSS"],
    image: "/lisan.jpg",
    links: [
      { label: "Web Hub", href: "https://lisan.ermizamr.tech/validate.html", icon: "globe" },
      { label: "Telegram Bot", href: "https://t.me/LisanAiEtBot", icon: "send" },
      { label: "Source Code", href: "https://github.com/ermizamr/LISAN", icon: "github" },
    ],
  },
  {
    title: "USDENT — Insurance Appeals Builder",
    date: "January 2026",
    description:
      "B2B SaaS platform automating dental insurance appeal workflows for US dental clinics. Includes a multi-tenant Django/PostgreSQL backend, role-based access control, and automated appeal letter generation.",
    tech: ["Django", "React", "PostgreSQL", "REST APIs"],
    image: "/usdent.jpg",
    links: [
      { label: "Live Demo", href: "https://usdent-appeal-builder.vercel.app", icon: "globe" },
      { label: "Source Code", href: "https://github.com/ermizamr/usdent-appeal-builder", icon: "github" },
    ],
  },
  {
    title: "TG-Teacher Bot",
    date: "March 2026",
    description:
      "AI-powered Telegram bot for space science and STEM learners with persistent context and memory stored via Supabase PostgreSQL.",
    tech: ["Python", "Groq API", "Supabase", "Telegram Bot API"],
    image: "/tgteacherbot.jpg",
    links: [
      { label: "Try Bot", href: "https://t.me/erzamrbot", icon: "send" },
      { label: "Source Code", href: "https://github.com/ermizamr/ai-tg-bot", icon: "github" },
    ],
  },
  {
    title: "Space For ET",
    date: "April 2026",
    description:
      "Mobile application tracking Ethiopia's space science initiatives, live rocket launches, and satellite pass schedules.",
    tech: ["Flutter", "Dart", "REST APIs"],
    image: "/space-et-2.jpg",
    links: [
      { label: "Download APK", href: "https://github.com/ermizamr/SPACE-FOR-ET-APK/releases", icon: "download" },
      { label: "Source Code", href: "https://github.com/ermizamr/SPACE-FOR-ET-APK", icon: "github" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight">Projects</h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border border-border rounded-xl overflow-hidden bg-card"
          >
            <div className="aspect-[16/9] sm:aspect-[2/1] bg-muted overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="font-bold text-base sm:text-lg">{project.title}</h3>
                <span className="text-xs text-muted-foreground font-mono">{project.date}</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md border border-border bg-muted/40 text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {project.links.map((link) => {
                  const Icon =
                    link.icon === "download"
                      ? Download
                      : link.icon === "send"
                      ? Send
                      : link.icon === "github"
                      ? Github
                      : Globe;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-border rounded-lg hover:bg-muted transition-colors"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
