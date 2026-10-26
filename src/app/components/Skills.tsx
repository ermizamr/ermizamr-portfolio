interface SkillDomain {
  domain: string;
  dot: string;
  skills: string[];
}

const skillDomains: SkillDomain[] = [
  {
    domain: "AI & Speech Systems",
    dot: "bg-purple-500",
    skills: [
      "On-Device AI / NMT",
      "Speech & NLP",
      "ONNX Runtime / C++ FFI",
      "PyTorch",
      "Groq / OpenAI API",
    ],
  },
  {
    domain: "Backend & Architecture",
    dot: "bg-blue-500",
    skills: [
      "Python",
      "Django",
      "PostgreSQL",
      "Supabase",
      "REST APIs",
      "RBAC / Auth",
      "Node.js",
    ],
  },
  {
    domain: "Frontend & Mobile",
    dot: "bg-emerald-500",
    skills: [
      "Flutter",
      "Dart",
      "React",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    domain: "DevOps & Integration",
    dot: "bg-amber-500",
    skills: [
      "Telegram Bot API",
      "Git & GitHub",
      "Vercel",
    ],
  },
];

export function Skills() {
  return (
    <section aria-label="Technical Skills" className="py-6 border-t border-border">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <div className="space-y-4">
        {skillDomains.map((group) => (
          <div key={group.domain} className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${group.dot}`} aria-hidden="true" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.domain}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-2.5 py-1 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
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
