import { SEOHead } from "./components/SEOHead";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <SEOHead />

      <div className="min-h-screen bg-background text-foreground">
        {/* Simple top header */}
        <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-sm border-b border-border">
          <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
            <a
              href="#"
              className="font-semibold text-sm tracking-tight hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded"
            >
              ermizamr
            </a>
            <div className="flex items-center gap-4 text-xs">
              <nav className="flex items-center gap-3 text-muted-foreground">
                <a
                  href="#projects"
                  className="hover:text-foreground transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="hover:text-foreground transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded"
                >
                  Experience
                </a>
                <a
                  href="#skills"
                  className="hover:text-foreground transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded"
                >
                  Skills
                </a>
                <a
                  href="#contact"
                  className="hover:text-foreground transition-colors py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded"
                >
                  Contact
                </a>
              </nav>
              <div className="w-px h-3.5 bg-border" />
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Focused reading canvas */}
        <main id="main-content" className="max-w-2xl mx-auto px-6 py-12 sm:py-16 space-y-16">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-border py-8 text-xs text-muted-foreground">
          <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Ermyas Misiker</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/ermizamr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ermiyas-misiker/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded"
              >
                LinkedIn
              </a>
              <a
                href="https://t.me/ermijemmy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded"
              >
                Telegram
              </a>
              <a
                href="https://x.com/ermizamr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground rounded"
              >
                X
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
