import { Cpu, Server, Smartphone, Wrench } from "lucide-react";

interface SkillDomain {
  domain: string;
  icon: typeof Cpu;
  dot: string;
  color: string;
  skills: string[];
}

const skillDomains: SkillDomain[] = [
  {
    domain: "AI & Speech Systems",
    icon: Cpu,
    dot: "bg-purple-500",
    color: "text-purple-600 dark:text-purple-400",
    skills: [
      "On-Device AI / NMT",
      "Speech & NLP",
      "ONNX Runtime / C++ FFI",
      "VITS MMS-TTS",
      "PyTorch",
      "Gemini 2.5 Flash",
      "Hohe ASR",
      "Groq & OpenAI APIs",
    ],
  },
  {
    domain: "Backend & Systems",
    icon: Server,
    dot: "bg-blue-500",
    color: "text-blue-600 dark:text-blue-400",
    skills: [
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
    domain: "Frontend & Mobile",
    icon: Smartphone,
    dot: "bg-emerald-500",
    color: "text-emerald-600 dark:text-emerald-400",
    skills: [
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
    domain: "Tooling & Integration",
    icon: Wrench,
    dot: "bg-amber-500",
    color: "text-amber-600 dark:text-amber-400",
    skills: [
      "Chrome Extension (MV3)",
      "Telegram Bot API",
      "Git & GitHub",
      "Vercel",
      "Docker",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" aria-label="Technical Skills" className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Cpu className="h-4 w-4 text-emerald-500" />
          <h2 className="text-2xl font-bold tracking-tight">Technical Arsenal</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Core technologies, specialized frameworks, and engineering tools categorized by domain.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillDomains.map((group) => {
          const Icon = group.icon;
          return (
            <div
              key={group.domain}
              className="p-5 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-3 hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${group.dot}`} />
                <Icon className={`h-4 w-4 ${group.color}`} />
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {group.domain}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-2.5 py-1 rounded-full border border-border bg-muted/30 text-foreground hover:bg-foreground hover:text-background transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
