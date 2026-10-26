import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, Linkedin, Send, Mail, MapPin, GraduationCap, ArrowUpRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="space-y-10">
      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for high-impact AI & full-stack engineering
      </div>

      {/* Main Profile Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Ermyas Misiker
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground font-mono">
              @ermizamr
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-semibold text-foreground/90 flex items-center gap-2">
            AI Systems Engineer & Full-Stack Founder
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Addis Ababa, Ethiopia
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="h-3.5 w-3.5" /> Addis Ababa University (CS)
            </span>
          </div>
        </div>

        <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-border/80 shadow-md">
          <ImageWithFallback
            src="/Ermi_Cartoon.jpg"
            alt="Ermyas Misiker"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 0%" }}
          />
        </div>
      </div>

      {/* Bio Narrative */}
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
        I engineer on-device multilingual AI models, real-time audio meeting assistants, and production B2B platforms. Creator of <strong className="text-foreground font-semibold">Weg AI</strong> (Amharic meeting intelligence for Google Meet & Android) and <strong className="text-foreground font-semibold">LISAN AI</strong> (offline speech-to-speech translation). Focused on advancing African language AI infrastructure and privacy-first client-side systems.
      </p>

      {/* CTAs and Social Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
          >
            Explore Projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-5 py-2.5 border border-border rounded-full hover:bg-muted transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ermizamr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/ermiyas-misiker/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://t.me/ermijemmy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="p-2.5 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href="mailto:ermizamr197@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* High-Signal Engineering Metrics Bento Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
        <div className="p-4 rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-1">
          <p className="text-2xl font-extrabold tracking-tight text-foreground">373K+</p>
          <p className="text-xs text-muted-foreground leading-snug">Bitext Validation Pairs (LISAN Hub)</p>
        </div>
        <div className="p-4 rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-1">
          <p className="text-2xl font-extrabold tracking-tight text-foreground">&lt; 350MB</p>
          <p className="text-xs text-muted-foreground leading-snug">On-Device Neural RAM (C++ FFI)</p>
        </div>
        <div className="p-4 rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-1">
          <p className="text-2xl font-extrabold tracking-tight text-foreground">5s Chunks</p>
          <p className="text-xs text-muted-foreground leading-snug">Streaming Audio Pipeline (Weg AI)</p>
        </div>
        <div className="p-4 rounded-xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-1">
          <p className="text-2xl font-extrabold tracking-tight text-foreground">100%</p>
          <p className="text-xs text-muted-foreground leading-snug">Bot-Free Privacy-First Capture</p>
        </div>
      </div>
    </section>
  );
}
