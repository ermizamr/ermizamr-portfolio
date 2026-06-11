const experiences = [
  {
    initial: "U",
    color: "bg-blue-100 text-blue-700",
    company: "USDENT",
    role: "Founder & Lead Full-Stack Engineer",
    period: "Jan 2026 – Present",
    description: "Built and launched a B2B SaaS platform automating dental insurance appeal workflows for US dental clinics. Multi-tenant Django/PostgreSQL backend, React frontend.",
  },
  {
    initial: "E",
    color: "bg-green-100 text-green-700",
    company: "E.mslene Educational Platform",
    role: "Full-Stack Developer & Maintainer",
    period: "Jan 2025 – Present",
    description: "Architected a multi-role academic management system with granular RBAC serving students, teaching staff, and administrators.",
  },
];

export function Experience() {
  return (
    <section aria-label="Work Experience and Education" className="py-10 border-t border-border">
      <h2 className="text-xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${exp.color}`}>
              {exp.initial}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                <span className="font-semibold text-sm">{exp.company}</span>
                <span className="text-xs text-muted-foreground shrink-0">{exp.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{exp.role}</p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-base font-semibold mb-4">Education</h3>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-sm font-bold shrink-0">A</div>
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <span className="font-semibold text-sm">Addis Ababa University</span>
              <span className="text-xs text-muted-foreground">Sep 2025 – Jul 2029 (Expected)</span>
            </div>
            <p className="text-sm text-muted-foreground">BSc in Computer Science</p>
          </div>
        </div>
      </div>
    </section>
  );
}
