import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, Linkedin, Send, Mail, MapPin, GraduationCap, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Ermyas Misiker
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Full-stack developer and AI systems engineer based in Addis Ababa, Ethiopia.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5" /> Addis Ababa
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="size-3.5" /> Computer Science, AAU
            </span>
          </div>
        </div>

        <div className="shrink-0 size-20 sm:size-24 rounded-full overflow-hidden border border-border">
          <ImageWithFallback
            src="/Ermi_Cartoon.jpg"
            alt="Ermyas Misiker"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 0%" }}
          />
        </div>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        I build production web platforms, on-device speech AI models, and real-time meeting assistants. Currently building <strong className="text-foreground font-medium">Weg</strong> (client-side Amharic meeting notes for Google Meet and Android) and <strong className="text-foreground font-medium">LISAN</strong> (offline on-device speech translation for Ethiopian languages).
      </p>

      {/* Direct, clean links */}
      <div className="flex flex-wrap items-center gap-2.5 pt-1">
        <a
          href="https://github.com/ermizamr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-border rounded-lg hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <Github className="size-3.5" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ermiyas-misiker/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-border rounded-lg hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <Linkedin className="size-3.5" /> LinkedIn
        </a>
        <a
          href="https://t.me/ermijemmy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-border rounded-lg hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <Send className="size-3.5" /> Telegram
        </a>
        <a
          href="mailto:ermizamr197@gmail.com"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-border rounded-lg hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <Mail className="size-3.5" /> Email
        </a>
        <a
          href="/ERMI_RESUME.pdf"
          download="Ermyas_Misiker_CV.pdf"
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 border border-border rounded-lg hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <Download className="size-3.5" /> Resume
        </a>
      </div>
    </section>
  );
}
