import { useState } from "react";
import { Mail, Send, Check, Copy, MessageSquare } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("ermizamr197@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form._gotcha) {
      setStatus("success");
      setForm({ name: "", email: "", message: "", _gotcha: "" });
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xzzyjvvv", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", _gotcha: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" aria-label="Contact Ermyas Misiker" className="space-y-8">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-4 w-4 text-emerald-500" />
          <h2 className="text-2xl font-bold tracking-tight">Let's Connect</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Have an interesting AI challenge, founding opportunity, or engineering project? Let's talk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Direct Channels Column */}
        <div className="md:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Direct Contact
            </h3>
            
            {/* Copy Email Button */}
            <button
              type="button"
              onClick={copyEmail}
              className="w-full flex items-center justify-between p-3 rounded-xl border border-border hover:bg-muted text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-foreground text-background">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">ermizamr197@gmail.com</p>
                </div>
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-md bg-muted text-foreground group-hover:bg-foreground group-hover:text-background transition-colors flex items-center gap-1">
                {copied ? <Check className="h-3 w-3 text-emerald-500" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copied" : "Copy"}
              </span>
            </button>

            {/* Telegram DM */}
            <a
              href="https://t.me/ermijemmy"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-between p-3 rounded-xl border border-border hover:bg-muted text-left transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  <Send className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Telegram</p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">@ermijemmy</p>
                </div>
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted text-muted-foreground group-hover:text-foreground transition-colors">
                Open Chat →
              </span>
            </a>
          </div>
        </div>

        {/* Message Form Column */}
        <div className="md:col-span-7">
          <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm">
            {status === "success" ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold">Message Delivered!</h3>
                <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                  Thanks for reaching out. I'll get back to your inbox as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-xs text-foreground font-semibold underline hover:opacity-80 transition-opacity cursor-pointer pt-2 inline-block"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Honeypot field for anti-bot spam */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form._gotcha}
                  onChange={(e) => setForm({ ...form, _gotcha: e.target.value })}
                  className="hidden pointer-events-none select-none"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 outline-none focus:ring-1 focus:ring-foreground transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-muted-foreground">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 outline-none focus:ring-1 focus:ring-foreground transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, idea, or questions..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 outline-none focus:ring-1 focus:ring-foreground transition-all resize-none placeholder:text-muted-foreground/50"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500">Something went wrong. Please email me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold px-6 py-3 bg-foreground text-background rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
