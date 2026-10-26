interface ExperienceItem {
  company: string;
  role: string;
  domain: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Weg (ወግ) AI",
    role: "Founder & Lead Architect",
    domain: "Audio Intelligence",
    period: "Oct 2026 – Present",
    description:
      "Architected a client-side Amharic AI meeting assistant spanning a Manifest V3 Chrome Extension and Kotlin Android companion app. Implemented real-time audio chunk streaming, Gemini 2.5 Flash summarization, and Hohe ASR bilingual integration.",
    skills: ["Chrome MV3", "Android Kotlin", "Gemini 2.5 Flash", "Hohe ASR", "FastAPI"],
  },
  {
    company: "LISAN (ልሳን) AI",
    role: "Co-Founder & AI Systems Lead",
    domain: "Speech & NLP",
    period: "Feb 2026 – Present",
    description:
      "Engineered an offline speech-to-speech translation mobile system across 4 Ethiopian languages. Implemented zero-copy C++ FFI decoding for on-device VITS MMS-TTS and quantized NLLB-200 within a 350MB RAM limit.",
    skills: ["C++ FFI", "ONNX Runtime", "VITS MMS-TTS", "NLLB-200", "Flutter"],
  },
  {
    company: "USDENT",
    role: "Founder & Lead Full-Stack Engineer",
    domain: "B2B SaaS",
    period: "Jan 2026 – Present",
    description:
      "Built a B2B SaaS platform automating dental insurance appeal workflows for US clinics with a multi-tenant Django/PostgreSQL backend and React frontend.",
    skills: ["Django", "PostgreSQL", "React", "Multi-Tenant"],
  },
  {
    company: "E.mslene Educational Platform",
    role: "Full-Stack Developer & Maintainer",
    domain: "EdTech",
    period: "Jan 2025 – Present",
    description:
      "Architected a multi-role academic management system with granular RBAC for students, teaching staff, and administrators.",
    skills: ["Django", "React", "PostgreSQL", "RBAC"],
  },
];

export function Experience() {
  return (
    <section id="experience" aria-label="Work Experience" className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight text-foreground">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="space-y-2 border-l-2 border-border pl-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-base text-foreground">{exp.company}</h3>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded border border-border bg-muted/40 text-muted-foreground">
                  {exp.domain}
                </span>
                <span className="text-xs text-muted-foreground">· {exp.role}</span>
              </div>
              <span className="text-xs text-muted-foreground font-mono shrink-0">{exp.period}</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {exp.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-0.5 rounded-md border border-border bg-muted/40 text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 space-y-3">
        <h3 className="text-sm font-semibold text-foreground">
          Education
        </h3>
        <div className="border-l-2 border-border pl-4 space-y-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h4 className="font-semibold text-base text-foreground">Addis Ababa University</h4>
            <span className="text-xs text-muted-foreground font-mono">2022 – 2026</span>
          </div>
          <p className="text-xs text-muted-foreground">Bachelor of Science in Computer Science</p>
        </div>
      </div>
    </section>
  );
}
