import { Github, Linkedin, Send, Download, ArrowUpRight } from "lucide-react";
import { SEOHead } from "./components/SEOHead";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <SEOHead />

      <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
        {/* Sticky Top Navigation Bar */}
        <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-lg bg-foreground text-background font-bold text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                E
              </span>
              <span className="font-bold text-sm tracking-tight hidden sm:inline-block">
                Ermyas Misiker
              </span>
            </a>

            <nav className="flex items-center gap-1 sm:gap-4 text-xs font-medium text-muted-foreground">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2.5 py-1.5 rounded-md hover:text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <a
                href="/ERMI_RESUME.pdf"
                download="Ermyas_Misiker_CV.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 border border-border rounded-full hover:bg-muted transition-colors"
              >
                <Download className="h-3 w-3" />
                Resume
              </a>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main id="main-content" className="max-w-4xl mx-auto px-6 py-12 sm:py-16 space-y-24">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-border/60 py-10 mt-20 text-center text-xs text-muted-foreground space-y-2">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Ermyas Misiker · Addis Ababa, Ethiopia</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/ermizamr" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/ermiyas-misiker/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://t.me/ermijemmy" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
              <a href="https://x.com/ermizamr" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">X</a>
            </div>
          </div>
        </footer>

        {/* Floating Quick Navigation Dock on Mobile */}
        <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <div className="flex items-center gap-2 bg-background/90 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-xl">
            <a href="#projects" className="text-xs font-medium px-2 py-1 text-muted-foreground hover:text-foreground">
              Projects
            </a>
            <div className="w-px h-3 bg-border" />
            <a href="#contact" className="text-xs font-medium px-2 py-1 text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <div className="w-px h-3 bg-border" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
