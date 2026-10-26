const groups = [
  {
    name: "AI & Speech",
    skills: "On-Device NMT / Speech AI, ONNX Runtime, C++ FFI, VITS MMS-TTS, Quantized NLLB-200, PyTorch, Gemini 2.5 Flash, Hohe ASR, Prompt Engineering, RAG Pipelines",
  },
  {
    name: "Backend",
    skills: "Java 17+, Spring Boot 3 (Spring Security 6, Spring Data JPA, Hibernate), Python (FastAPI, Django), Node.js, Express, PostgreSQL, Supabase, RESTful APIs, OpenAPI/Swagger",
  },
  {
    name: "Frontend & Mobile",
    skills: "React, Next.js, Vite, Tailwind CSS, Flutter, Dart, Android (Kotlin), Chrome MV3 Extensions, WebSockets / Socket.io",
  },
  {
    name: "Security & Tools",
    skills: "JWT & RBAC, Threat Modeling, Docker, Git, GitHub, Maven, Postman, Vercel, Render, Linux / Bash",
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
