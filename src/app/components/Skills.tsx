const groups = [
  {
    name: "AI & Speech",
    skills: "On-Device NMT, ONNX Runtime, C++ FFI, VITS MMS-TTS, NLLB-200, PyTorch, Gemini API, Hohe ASR",
  },
  {
    name: "Backend",
    skills: "Python, FastAPI, Django, PostgreSQL, Supabase, Node.js, REST APIs",
  },
  {
    name: "Frontend & Mobile",
    skills: "React, TypeScript, Tailwind CSS, Flutter, Dart, Android Kotlin",
  },
  {
    name: "Tools",
    skills: "Chrome MV3, Telegram Bot API, Docker, Git, Vercel",
  },
];

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {groups.map((group) => (
          <div key={group.name}>
            <h3 className="text-sm font-medium mb-1">{group.name}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {group.skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
