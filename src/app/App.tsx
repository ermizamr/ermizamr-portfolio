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
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="#" className="font-semibold text-sm tracking-tight hover:opacity-70 transition-opacity">
              ermizamr
            </a>
            <div className="flex items-center gap-5 text-xs text-muted-foreground">
              <nav className="hidden sm:flex items-center gap-4">
                <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
                <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
                <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main id="main-content" className="max-w-2xl mx-auto px-6 py-16 sm:py-20 space-y-20">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>

        <footer className="border-t border-border py-8 text-xs text-muted-foreground">
          <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>Ermyas Misiker, {new Date().getFullYear()}</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/ermizamr" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/ermiyas-misiker/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://t.me/ermijemmy" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
