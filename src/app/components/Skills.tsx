interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "AI & Speech Systems",
    items: [
      "On-Device AI / NMT",
      "Speech & NLP",
      "ONNX Runtime / C++ FFI",
      "VITS MMS-TTS",
      "PyTorch",
      "Gemini API",
      "Hohe ASR",
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      "Python",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "RBAC / Auth",
      "Node.js",
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      "Flutter",
      "Dart",
      "Android (Kotlin)",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Tools & Integration",
    items: [
      "Chrome MV3 Extensions",
      "Telegram Bot API",
      "Git & GitHub",
      "Vercel",
      "Docker",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.category} className="space-y-2.5">
            <h3 className="text-sm font-semibold text-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-md border border-border bg-muted/30 text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
