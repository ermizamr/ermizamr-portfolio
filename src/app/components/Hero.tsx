import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="pb-12 pt-16 sm:pt-24">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h1 className="text-4xl sm:text-5xl tracking-tight" style={{ fontWeight: 800 }}>
          Hi, I'm Ermyas&nbsp;👋
        </h1>
        <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-border">
          <ImageWithFallback
            src="/Ermi_Cartoon.jpg"
            alt="Ermyas Misiker"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 0%" }}
          />
        </div>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
        Full-stack developer building web apps, Telegram bots, and automation tools.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="text-sm font-medium px-5 py-2.5 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity"
        >
          View My Work
        </a>
        <a
          href="mailto:ermizamr197@gmail.com"
          className="text-sm font-medium px-5 py-2.5 border border-border rounded-full hover:bg-muted transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
