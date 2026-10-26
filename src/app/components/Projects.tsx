import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FeaturedProject {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  links: { label: string; href: string }[];
}

interface CompactProject {
  title: string;
  description: string;
  links: { label: string; href: string }[];
}

const featured: FeaturedProject[] = [
  {
    title: "Weg (ወግ)",
    subtitle: "AI Meeting Intelligence",
    description:
      "Client-side meeting notes for Google Meet and Android. Captures tab audio directly without bot participants, streams 5-second chunks, and transcribes Amharic and bilingual speech via Gemini 2.5 Flash and Hohe ASR to generate structured summaries and action items.",
    tech: ["Chrome MV3", "Android Kotlin", "FastAPI", "Gemini 2.5 Flash", "Hohe ASR"],
    image: "/weg-cover.jpg",
    links: [
      { label: "Live", href: "https://weg.ermizamr.tech" },
      { label: "Source", href: "https://github.com/ermizamr/amharic-notebook" },
    ],
  },
  {
    title: "LISAN (ልሳን)",
    subtitle: "Offline Speech-to-Speech",
    description:
      "On-device translation across Amharic, Afaan Oromoo, Tigrinya, Somali, and English. Runs VITS MMS-TTS and quantized NLLB-200 via zero-copy C++ FFI decoding, fully offline within a 350MB RAM limit.",
    tech: ["Flutter", "C++ FFI", "ONNX Runtime", "VITS MMS-TTS", "NLLB-200"],
    image: "/lisan-mobile-cover.jpg",
    links: [
      { label: "Download APK", href: "https://lisan.ermizamr.tech/lisan-app.apk" },
      { label: "Landing Page", href: "https://lisan.ermizamr.tech" },
      { label: "Source", href: "https://github.com/ermizamr/LISAN" },
    ],
  },
];

const compact: CompactProject[] = [
  {
    title: "LISAN Validation Hub",
    description:
      "Crowdsourced validation for Ethiopian language bitext. Gamified Telegram bot with XP leaderboards and a web verification suite powering 373K+ pairs.",
    links: [
      { label: "Web Hub", href: "https://lisan.ermizamr.tech/validate.html" },
      { label: "Bot", href: "https://t.me/LisanAiEtBot" },
      { label: "Source", href: "https://github.com/ermizamr/LISAN" },
    ],
  },
  {
    title: "USDENT",
    description:
      "B2B SaaS automating dental insurance appeal workflows for US clinics. Multi-tenant Django backend with role-based access and automated letter generation.",
    links: [
      { label: "Demo", href: "https://usdent-appeal-builder.vercel.app" },
      { label: "Source", href: "https://github.com/ermizamr/usdent-appeal-builder" },
    ],
  },
  {
    title: "TG-Teacher Bot",
    description:
      "AI Telegram tutor for space science and STEM learners with persistent context stored via Supabase.",
    links: [
      { label: "Try it", href: "https://t.me/erzamrbot" },
      { label: "Source", href: "https://github.com/ermizamr/ai-tg-bot" },
    ],
  },
  {
    title: "Space For ET",
    description:
      "Mobile app tracking Ethiopia's space science initiatives, rocket launches, and satellite passes.",
    links: [
      { label: "APK", href: "https://github.com/ermizamr/SPACE-FOR-ET-APK/releases" },
      { label: "Source", href: "https://github.com/ermizamr/SPACE-FOR-ET-APK" },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="space-y-8">
      <h2 className="text-xl font-bold tracking-tight">Projects</h2>

      {/* Featured projects — full cards with images */}
      <div className="space-y-6">
        {featured.map((project) => (
          <article
            key={project.title}
            className="border border-border rounded-xl overflow-hidden bg-card"
          >
            <div className="aspect-[2/1] bg-muted overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              <div>
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.subtitle}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-md border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-foreground font-medium hover:opacity-70 transition-opacity"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Other projects — compact text rows */}
      <div className="divide-y divide-border border-t border-border">
        {compact.map((project) => (
          <div key={project.title} className="py-4 space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-semibold text-sm">{project.title}</h3>
              <div className="flex items-center gap-3 shrink-0">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
