import { useState } from "react";
import { Globe, Github, Download, Send, ArrowUpRight, Sparkles, Cpu, Layers, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const [activeGallery, setActiveGallery] = useState<{ title: string; images: string[] } | null>(null);

  return (
    <section id="projects" aria-label="Featured Projects" className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-emerald-500" />
          <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Production AI systems, client-side neural speech architectures, and full-stack platforms.
        </p>
      </div>

      {/* Flagship Spotlight 1: Weg (ወግ) AI */}
      <article className="border border-border/80 rounded-2xl overflow-hidden bg-card/60 backdrop-blur-sm hover:border-foreground/30 transition-all shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-5 aspect-video lg:aspect-auto bg-muted overflow-hidden relative group">
            <ImageWithFallback
              src="/weg-cover.jpg"
              alt="Weg AI Meeting Assistant"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <button
              type="button"
              onClick={() => setActiveGallery({
                title: "Weg (ወግ) AI — Companion & Meeting Notes UI",
                images: ["/weg-screen-1.png", "/weg-screen-2.png"]
              })}
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur border border-border text-xs font-medium text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer shadow-md"
            >
              <Eye className="h-3.5 w-3.5" />
              Screenshots (2)
            </button>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Featured AI Product · Oct 2026
                </span>
                <span className="text-xs text-muted-foreground font-mono">Live Production</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Weg (ወግ) — AI Meeting Intelligence
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Client-side AI meeting notes assistant built for Google Meet & Android, specifically designed for Amharic and Amharic-English bilingual code-switching. Captures tab/system audio directly without bot participants, streams 5s sequential audio chunks, and leverages Gemini 2.5 Flash with Hohe ASR to generate instant executive summaries and action items.
              </p>

              {/* Architecture Pipeline Flow */}
              <div className="rounded-xl border border-border/70 bg-muted/30 p-3 space-y-1.5 font-mono text-[11px]">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Cpu className="h-3 w-3 text-emerald-500" /> Pipeline Architecture
                </p>
                <div className="flex flex-wrap items-center gap-1 text-muted-foreground">
                  <span className="px-2 py-0.5 rounded bg-background border border-border text-foreground">Tab Audio</span>
                  <span>➔</span>
                  <span className="px-2 py-0.5 rounded bg-background border border-border text-foreground">5s Chunks</span>
                  <span>➔</span>
                  <span className="px-2 py-0.5 rounded bg-background border border-border text-foreground">Hohe ASR</span>
                  <span>➔</span>
                  <span className="px-2 py-0.5 rounded bg-background border border-border text-foreground">Gemini 2.5 Flash</span>
                  <span>➔</span>
                  <span className="px-2 py-0.5 rounded bg-background border border-border text-emerald-500 font-bold">Executive Notes</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Chrome MV3", "Android (Kotlin)", "Python FastAPI", "Gemini 2.5 Flash", "Hohe ASR", "Tailwind CSS"].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded-full border border-border bg-muted/40 text-muted-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://weg.ermizamr.tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
              >
                <Globe className="h-3.5 w-3.5" />
                Live Product
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/ermizamr/amharic-notebook"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 border border-border rounded-full hover:bg-muted transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Flagship Spotlight 2: LISAN (ልሳን) Mobile App */}
      <article className="border border-border/80 rounded-2xl overflow-hidden bg-card/60 backdrop-blur-sm hover:border-foreground/30 transition-all shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-5 aspect-video lg:aspect-auto bg-muted overflow-hidden relative group">
            <ImageWithFallback
              src="/lisan-mobile-cover.jpg"
              alt="LISAN Mobile App"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <button
              type="button"
              onClick={() => setActiveGallery({
                title: "LISAN (ልሳን) — Offline Speech-to-Speech Mobile UI",
                images: ["/lisan-screen-perfect.jpg", "/lisan-screen-1.jpg"]
              })}
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur border border-border text-xs font-medium text-foreground hover:bg-foreground hover:text-background transition-colors cursor-pointer shadow-md"
            >
              <Eye className="h-3.5 w-3.5" />
              Screenshots (2)
            </button>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  Flagship Speech AI · Oct 2026
                </span>
                <span className="text-xs text-muted-foreground font-mono">100% Offline Neural</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                LISAN (ልሳን) — Offline Speech-to-Speech Mobile
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Offline-first real-time speech-to-speech translation mobile application for Ethiopian & Horn languages (Amharic, Afaan Oromoo, Tigrinya, Somali, English). Powered by 100% genuine on-device VITS neural TTS and quantized NLLB-200 via C++ FFI zero-copy decoding, operating completely without internet within a strict 350MB RAM limit.
              </p>

              {/* Architecture Pipeline Flow */}
              <div className="rounded-xl border border-border/70 bg-muted/30 p-3 space-y-1.5 font-mono text-[11px]">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Cpu className="h-3 w-3 text-purple-500" /> On-Device Neural Pipeline (&lt;350MB RAM)
                </p>
                <div className="flex flex-wrap items-center gap-1 text-muted-foreground">
                  <span className="px-2 py-0.5 rounded bg-background border border-border text-foreground">Mic Audio</span>
                  <span>➔</span>
                  <span className="px-2 py-0.5 rounded bg-background border border-border text-foreground">VITS MMS-TTS</span>
                  <span>➔</span>
                  <span className="px-2 py-0.5 rounded bg-background border border-border text-foreground">NLLB-200 Q4</span>
                  <span>➔</span>
                  <span className="px-2 py-0.5 rounded bg-background border border-border text-foreground">C++ FFI Zero-Copy</span>
                  <span>➔</span>
                  <span className="px-2 py-0.5 rounded bg-background border border-border text-purple-500 font-bold">Offline Audio Out</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Flutter", "Dart", "C++ FFI", "ONNX Runtime", "VITS MMS-TTS", "NLLB-200"].map((t) => (
                  <span key={t} className="text-xs px-2.5 py-0.5 rounded-full border border-border bg-muted/40 text-muted-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://lisan.ermizamr.tech/lisan-app.apk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity"
              >
                <Download className="h-3.5 w-3.5" />
                Download APK
              </a>
              <a
                href="https://lisan.ermizamr.tech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 border border-border rounded-full hover:bg-muted transition-colors"
              >
                <Globe className="h-3.5 w-3.5" />
                Product Landing
              </a>
              <a
                href="https://github.com/ermizamr/LISAN"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 border border-border rounded-full hover:bg-muted transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                Source
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Secondary Projects Grid (2 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* LISAN Validation Hub */}
        <article className="border border-border/80 rounded-xl overflow-hidden bg-card/60 backdrop-blur-sm flex flex-col justify-between hover:border-foreground/30 transition-all">
          <div className="aspect-video bg-muted overflow-hidden">
            <ImageWithFallback src="/lisan.jpg" alt="LISAN Validation Hub" className="w-full h-full object-cover" />
          </div>
          <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-base">LISAN AI Community Validation Hub</h4>
                <span className="text-xs text-muted-foreground">Oct 2026</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Crowdsourced micro-task validation ecosystem and open-source benchmark dataset builder for Ethiopian languages. Gamified Telegram bot with real-time XP leaderboards and a web verification suite powering 373K+ bitext pairs.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Python", "FastAPI", "Supabase", "Telegram Bot API", "Tailwind"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a href="https://lisan.ermizamr.tech/validate.html" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-foreground text-background rounded-full hover:opacity-90">
                <Globe className="h-3 w-3" /> Web Hub
              </a>
              <a href="https://t.me/LisanAiEtBot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-border rounded-full hover:bg-muted">
                <Send className="h-3 w-3" /> Telegram Bot
              </a>
            </div>
          </div>
        </article>

        {/* USDENT */}
        <article className="border border-border/80 rounded-xl overflow-hidden bg-card/60 backdrop-blur-sm flex flex-col justify-between hover:border-foreground/30 transition-all">
          <div className="aspect-video bg-muted overflow-hidden">
            <ImageWithFallback src="/usdent.jpg" alt="USDENT Platform" className="w-full h-full object-cover" />
          </div>
          <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-base">USDENT — Insurance Appeals SaaS</h4>
                <span className="text-xs text-muted-foreground">Jan 2026</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                B2B SaaS platform automating dental insurance appeal workflows for US dental clinics, featuring multi-tenant backend architecture, role-based access control, and automated dispute generation.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Django", "React", "PostgreSQL", "REST APIs", "Multi-Tenant"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a href="https://usdent-appeal-builder.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-foreground text-background rounded-full hover:opacity-90">
                <Globe className="h-3 w-3" /> Live Demo
              </a>
              <a href="https://github.com/ermizamr/usdent-appeal-builder" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-border rounded-full hover:bg-muted">
                <Github className="h-3 w-3" /> Source
              </a>
            </div>
          </div>
        </article>

        {/* TG-Teacher Bot */}
        <article className="border border-border/80 rounded-xl overflow-hidden bg-card/60 backdrop-blur-sm flex flex-col justify-between hover:border-foreground/30 transition-all">
          <div className="aspect-video bg-muted overflow-hidden">
            <ImageWithFallback src="/tgteacherbot.jpg" alt="TG-Teacher Bot" className="w-full h-full object-cover" />
          </div>
          <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-base">TG-Teacher Bot — AI STEM Tutor</h4>
                <span className="text-xs text-muted-foreground">Mar 2026</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                AI-powered Telegram bot for space, STEM, and Ethiopian tech learners. Context-aware conversational responses with persistent memory via Supabase and low-latency LLM inference.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Python", "Groq API", "Supabase", "Telegram Bot API"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a href="https://t.me/erzamrbot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-foreground text-background rounded-full hover:opacity-90">
                <Send className="h-3 w-3" /> Try Bot
              </a>
              <a href="https://github.com/ermizamr/ai-tg-bot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-border rounded-full hover:bg-muted">
                <Github className="h-3 w-3" /> Source
              </a>
            </div>
          </div>
        </article>

        {/* Space For ET */}
        <article className="border border-border/80 rounded-xl overflow-hidden bg-card/60 backdrop-blur-sm flex flex-col justify-between hover:border-foreground/30 transition-all">
          <div className="aspect-video bg-muted overflow-hidden">
            <ImageWithFallback src="/space-et-2.jpg" alt="Space For ET App" className="w-full h-full object-cover" />
          </div>
          <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-base">Space For ET — Space Science Mobile</h4>
                <span className="text-xs text-muted-foreground">Apr 2026</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Mobile app showcasing Ethiopia's contributions to space exploration with live rocket launch alerts, satellite pass tracking, and stargazing guidance.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Flutter", "Dart", "REST APIs", "Mobile Notifications"].map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <a href="https://github.com/ermizamr/SPACE-FOR-ET-APK/releases" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-foreground text-background rounded-full hover:opacity-90">
                <Download className="h-3 w-3" /> Download APK
              </a>
              <a href="https://github.com/ermizamr/SPACE-FOR-ET-APK" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-border rounded-full hover:bg-muted">
                <Github className="h-3 w-3" /> Source
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* Screenshot Lightbox Modal */}
      {activeGallery && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setActiveGallery(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-card border border-border rounded-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <h3 className="font-bold text-base">{activeGallery.title}</h3>
              <button
                type="button"
                onClick={() => setActiveGallery(null)}
                className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeGallery.images.map((img, i) => (
                <div key={img} className="rounded-xl overflow-hidden border border-border bg-muted aspect-[9/16]">
                  <ImageWithFallback src={img} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
