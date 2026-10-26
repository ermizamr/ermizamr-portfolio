import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    initial: "W",
    color: "bg-lime-500/10 text-lime-600 dark:text-lime-400 border border-lime-500/20",
    company: "Weg (ወግ) AI",
    role: "Founder & Lead Systems Architect",
    period: "Oct 2026 – Present",
    description: "Architected a privacy-first Amharic AI meeting intelligence assistant spanning a Manifest V3 Chrome Extension and Kotlin Android companion app. Implemented real-time audio chunk streaming, Gemini 2.5 Flash summarization, and Hohe ASR integration.",
    skills: ["Chrome MV3", "Android Kotlin", "Gemini 2.5 Flash", "Hohe ASR", "FastAPI"],
  },
  {
    initial: "L",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20",
    company: "LISAN (ልሳን) AI",
    role: "Co-Founder & Core AI Systems Lead",
    period: "Feb 2026 – Present",
    description: "Spearheading Ethiopia's first open-source offline speech-to-speech translation mobile system and crowd-validation ecosystem across 4 Ethiopian languages. Engineered serverless webhook architecture, real-time Supabase PostgreSQL store, and gamified Telegram bot.",
    skills: ["C++ FFI", "ONNX Runtime", "VITS MMS-TTS", "NLLB-200", "Flutter"],
  },
  {
    initial: "U",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20",
    company: "USDENT",
    role: "Founder & Lead Full-Stack Engineer",
    period: "Jan 2026 – Present",
    description: "Built and launched a B2B SaaS platform automating dental insurance appeal workflows for US dental clinics. Multi-tenant Django/PostgreSQL backend, React frontend.",
    skills: ["Django", "PostgreSQL", "React", "Multi-Tenant Architecture"],
  },
  {
    initial: "E",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20",
    company: "E.mslene Educational Platform",
    role: "Full-Stack Developer & Maintainer",
    period: "Jan 2025 – Present",
    description: "Architected a multi-role academic management system with granular RBAC serving students, teaching staff, and administrators.",
    skills: ["Django", "React", "PostgreSQL", "RBAC"],
  },
];

export function Experience() {
  return (
    <section id="experience" aria-label="Work Experience and Education" className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="h-4 w-4 text-emerald-500" />
          <h2 className="text-2xl font-bold tracking-tight">Work Experience</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Founding roles, core AI systems engineering, and full-stack product leadership.
        </p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="p-5 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-3 hover:border-foreground/20 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${exp.color}`}>
                  {exp.initial}
                </span>
                <div>
                  <h3 className="font-bold text-base">{exp.company}</h3>
                  <p className="text-xs text-muted-foreground font-medium">{exp.role}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground font-mono sm:text-right shrink-0">
                {exp.period}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-11">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pl-11">
              {exp.skills.map((s) => (
                <span key={s} className="text-xs px-2 py-0.5 rounded-full border border-border bg-muted/30 text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education Tile */}
      <div className="pt-2">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
          <GraduationCap className="h-4 w-4" />
          Education
        </h3>
        <div className="p-5 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <h4 className="font-bold text-base">Addis Ababa University</h4>
            <p className="text-xs text-muted-foreground">Bachelor of Science in Computer Science</p>
          </div>
          <span className="text-xs text-muted-foreground font-mono">2022 – 2026</span>
        </div>
      </div>
    </section>
  );
}
