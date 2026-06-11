export function Skills() {
  const skills = [
    "Python", "Django", "JavaScript", "TypeScript",
    "React", "Flutter", "Node.js",
    "PostgreSQL", "Supabase", "REST APIs",
    "RBAC / Auth", "Git & GitHub", "Vercel",
    "Telegram Bot API", "Groq / OpenAI API",
  ];

  return (
    <section aria-label="Technical Skills" className="py-10 border-t border-border">
      <h2 className="text-xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium px-3 py-1.5 bg-foreground text-background rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
