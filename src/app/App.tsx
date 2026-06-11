import { Home, User, Github, Linkedin, Send, BookOpen, Download } from "lucide-react";
import { SEOHead } from "./components/SEOHead";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

const NAV_LINKS = [
  { icon: Home,     href: "#home",                                        label: "Home" },
  { icon: User,     href: "#about",                                       label: "About" },
  { icon: Github,   href: "https://github.com/ermizamr",                  label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ermiyas-misiker/", label: "LinkedIn" },
  { icon: BookOpen, href: "#projects",                                    label: "Projects" },
  { icon: Send,     href: "https://t.me/ermijemmy",                       label: "Telegram" },
];

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <SEOHead />

      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-2xl mx-auto px-6 pb-32">

          <header id="home">
            <Hero />
          </header>

          <main id="main-content">
            <div id="about"><About /></div>
            <div id="experience"><Experience /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
          </main>

          <footer id="contact">
            <Contact />
          </footer>
        </div>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-full text-sm font-medium"
        >
          Skip to main content
        </a>

        <nav aria-label="Site navigation">
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-1 bg-background/90 backdrop-blur border border-border rounded-full px-3 py-2 shadow-lg">
              {NAV_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
              <a
                href="https://x.com/ermizamr"
                aria-label="X"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <div className="w-px h-4 bg-border mx-1" aria-hidden="true" />
              <a
                href="/ERMI_RESUME.pdf"
                aria-label="Download CV"
                download="Ermyas_Misiker_CV.pdf"
                className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </ThemeProvider>
  );
}
