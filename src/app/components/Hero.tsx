import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-balance">
            Ermyas Misiker
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Building speech AI for Ethiopian languages
          </p>
        </div>

        <div className="shrink-0 size-20 sm:size-28 rounded-2xl overflow-hidden border border-border">
          <ImageWithFallback
            src="/Ermi_Cartoon.jpg"
            alt="Ermyas Misiker"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 0%" }}
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
        Full-stack engineer and CS student at Addis Ababa University.
        Currently shipping{" "}
        <strong className="text-foreground font-medium">Weg</strong>{" "}
        (Amharic meeting intelligence for Google Meet) and{" "}
        <strong className="text-foreground font-medium">LISAN</strong>{" "}
        (offline on-device speech translation across 4 Ethiopian languages).
      </p>

      <nav aria-label="Social links" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        <a
          href="https://github.com/ermizamr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ermiyas-misiker/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://t.me/ermijemmy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Telegram
        </a>
        <a
          href="mailto:ermizamr197@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Email
        </a>
        <a
          href="/ERMI_RESUME.pdf"
          download="Ermyas_Misiker_CV.pdf"
          className="inline-flex items-center gap-1 text-foreground font-medium hover:opacity-70 transition-opacity"
        >
          Resume <ArrowDown className="size-3.5" />
        </a>
      </nav>
    </section>
  );
}
