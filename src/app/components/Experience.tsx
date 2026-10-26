interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Founder & Lead Architect",
    company: "Weg AI",
    period: "Oct 2026 – Present",
    description:
      "Architected a client-side Amharic meeting assistant spanning a Chrome Extension (MV3) and Kotlin Android companion. Real-time audio streaming, Gemini 2.5 Flash summarization, and Hohe ASR bilingual integration.",
  },
  {
    role: "Co-Founder & AI Systems Lead",
    company: "LISAN AI",
    period: "Feb 2026 – Present",
    description:
      "Engineered offline speech-to-speech translation across 4 Ethiopian languages. Zero-copy C++ FFI decoding for on-device VITS MMS-TTS and quantized NLLB-200 within 350MB RAM.",
  },
  {
    role: "Founder & Lead Engineer",
    company: "USDENT",
    period: "Jan 2026 – Present",
    description:
      "Built a B2B SaaS platform automating dental insurance appeal workflows for US clinics. Multi-tenant Django/PostgreSQL backend with RBAC and React frontend.",
  },
  {
    role: "Full-Stack Developer",
    company: "E.mslene",
    period: "Jan 2025 – Present",
    description:
      "Multi-role academic management system with granular role-based access for students, staff, and administrators.",
  },
];

export function Experience() {
  return (
    <section id="experience" aria-label="Work Experience" className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="space-y-1.5 border-l-2 border-border pl-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 className="text-sm">
                <span className="font-semibold">{exp.role}</span>
                <span className="text-muted-foreground"> at {exp.company}</span>
              </h3>
              <span className="text-xs text-muted-foreground tabular-nums">{exp.period}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-2">
        <div className="border-l-2 border-border pl-4 space-y-0.5">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
            <h3 className="text-sm font-semibold">Addis Ababa University</h3>
            <span className="text-xs text-muted-foreground tabular-nums">2022 – 2026</span>
          </div>
          <p className="text-xs text-muted-foreground">BSc Computer Science</p>
        </div>
      </div>
    </section>
  );
}
