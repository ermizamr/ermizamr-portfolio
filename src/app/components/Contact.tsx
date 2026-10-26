import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", _gotcha: "" });
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form._gotcha) {
      // Honeypot caught bot spam - pretend success without consuming quota
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
    <section aria-label="Contact Ermyas Misiker" className="py-10 border-t border-border">
      <h2 className="text-xl font-bold mb-2">Get In Touch</h2>
      <p className="text-muted-foreground text-sm mb-8">Let's discuss your next project or collaboration opportunity.</p>
      {status === "success" ? (
        <div className="rounded-xl border border-border p-6 bg-muted/30 text-center space-y-3">
          <p className="text-sm font-semibold">Thanks for reaching out! 👋</p>
          <p className="text-xs text-muted-foreground">I'll get back to you as soon as possible.</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs text-foreground font-medium underline hover:opacity-80 transition-opacity cursor-pointer pt-1 inline-block"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Honeypot field for bot spam prevention */}
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
              <label className="text-xs font-medium text-muted-foreground">Your Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full text-sm bg-muted/50 border border-border rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-foreground transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-muted-foreground">Your Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full text-sm bg-muted/50 border border-border rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-foreground transition-all"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-muted-foreground">Your Message</label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full text-sm bg-muted/50 border border-border rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
            />
          </div>
          {status === "error" && (
            <p className="text-sm text-red-500">Something went wrong. Please try again or email me directly.</p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="text-sm font-medium px-5 py-2.5 bg-foreground text-background rounded-full hover:opacity-80 transition-opacity disabled:opacity-50 cursor-pointer"
          >
            {status === "sending" ? "Sending…" : "Send Message →"}
          </button>
        </form>
      )}
    </section>
  );
}
