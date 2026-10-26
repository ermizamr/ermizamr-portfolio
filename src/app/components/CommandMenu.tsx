import { useState, useEffect } from "react";
import { Search, Globe, Github, Download, Mail, Moon, Sun, Laptop, ArrowRight, X, Cpu, Briefcase, FileCode } from "lucide-react";
import { useTheme } from "./theme-provider";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Projects" | "Actions";
  icon: typeof Globe;
  action: () => void;
  shortcut?: string;
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const items: CommandItem[] = [
    // Navigation
    {
      id: "nav-projects",
      title: "Jump to Projects",
      category: "Navigation",
      icon: Cpu,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "nav-experience",
      title: "Jump to Work Experience",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "nav-skills",
      title: "Jump to Technical Arsenal",
      category: "Navigation",
      icon: FileCode,
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "nav-contact",
      title: "Jump to Contact",
      category: "Navigation",
      icon: Mail,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    // Projects
    {
      id: "proj-weg",
      title: "Weg (ወግ) AI — Live App",
      category: "Projects",
      icon: Globe,
      action: () => {
        window.open("https://weg.ermizamr.tech", "_blank");
        setOpen(false);
      },
    },
    {
      id: "proj-lisan-apk",
      title: "LISAN (ልሳን) AI — Download APK",
      category: "Projects",
      icon: Download,
      action: () => {
        window.open("https://lisan.ermizamr.tech/lisan-app.apk", "_blank");
        setOpen(false);
      },
    },
    {
      id: "proj-lisan-hub",
      title: "LISAN AI Community Validation Hub",
      category: "Projects",
      icon: Globe,
      action: () => {
        window.open("https://lisan.ermizamr.tech/validate.html", "_blank");
        setOpen(false);
      },
    },
    {
      id: "proj-usdent",
      title: "USDENT — Insurance Appeals Builder",
      category: "Projects",
      icon: Globe,
      action: () => {
        window.open("https://usdent-appeal-builder.vercel.app", "_blank");
        setOpen(false);
      },
    },
    // Actions
    {
      id: "act-copy-email",
      title: "Copy Email (ermizamr197@gmail.com)",
      category: "Actions",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText("ermizamr197@gmail.com");
        setOpen(false);
      },
    },
    {
      id: "act-theme",
      title: `Toggle Theme (Currently ${theme})`,
      category: "Actions",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setOpen(false);
      },
    },
    {
      id: "act-resume",
      title: "Download Resume (PDF)",
      category: "Actions",
      icon: Download,
      action: () => {
        const link = document.createElement("a");
        link.href = "/ERMI_RESUME.pdf";
        link.download = "Ermyas_Misiker_CV.pdf";
        link.click();
        setOpen(false);
      },
    },
    {
      id: "act-github",
      title: "Visit GitHub Profile",
      category: "Actions",
      icon: Github,
      action: () => {
        window.open("https://github.com/ermizamr", "_blank");
        setOpen(false);
      },
    },
  ];

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Trigger Button in Header */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-border bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted text-xs transition-colors cursor-pointer"
        title="Open command menu (⌘K)"
      >
        <Search className="h-3.5 w-3.5" />
        <span className="hidden md:inline font-mono text-[11px] bg-background/80 px-1 py-0.5 rounded border border-border">
          ⌘K
        </span>
      </button>

      {/* Modal Backdrop & Dialog */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-150">
          <div
            className="w-full max-w-lg rounded-2xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-sm bg-transparent outline-none placeholder:text-muted-foreground/60 text-foreground"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Command List */}
            <div className="overflow-y-auto p-2 divide-y divide-border/40 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-xs text-muted-foreground">
                  No commands matching "{query}"
                </div>
              ) : (
                filtered.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={item.action}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-muted text-left transition-colors cursor-pointer group text-xs sm:text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg border border-border bg-background group-hover:border-foreground/30 transition-colors">
                          <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.category}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-muted/30 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
              <span>Navigate with mouse or keyboard</span>
              <span className="font-mono">ESC to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
