import { useState } from "react";
import { Mail, Send, Check, Copy } from "lucide-react";

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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
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
    <section id="contact" aria-label="Contact" className="space-y-6">
      <h2 className="text-xl font-bold tracking-tight">Contact</h2>
      <p className="text-sm text-muted-foreground">
        Feel free to reach out via email or send a message below.
      </p>

      <div className="space-y-4">
        {/* Direct Email Link */}
        <div className="flex items-center gap-3 text-sm">
          <span className="text-muted-foreground">Email:</span>
          <a
            href="mailto:ermizamr197@gmail.com"
            className="font-mono text-foreground hover:underline"
          >
            ermizamr197@gmail.com
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="text-xs px-2.5 py-1 rounded-md border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Message Form */}
        <div className="border border-border rounded-xl p-5 sm:p-6 bg-card">
          {status === "success" ? (
            <div className="py-6 text-center space-y-2">
              <p className="text-sm font-medium">Message sent.</p>
              <p className="text-xs text-muted-foreground">I'll get back to you soon.</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="text-xs underline text-muted-foreground hover:text-foreground cursor-pointer pt-2 inline-block"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Anti-spam honeypot */}
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
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full text-sm bg-muted/40 border border-border rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-foreground transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full text-sm bg-muted/40 border border-border rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-foreground transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full text-sm bg-muted/40 border border-border rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-red-500">Failed to send. Please email me directly.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="text-xs font-medium px-4 py-2 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
