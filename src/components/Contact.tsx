import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:vajrapuraghavendra2006@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-3xl" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-mono text-sm text-accent tracking-widest mb-6"
          >
            — LET'S BUILD SOMETHING
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-display font-extrabold text-5xl md:text-7xl leading-[0.95]"
          >
            Have an idea? <span className="text-gradient">Let's talk.</span>
          </motion.h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Send me a message below or reach out on any platform. I usually reply within a day.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-[1.2fr_1fr] gap-8">
          {/* Contact form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="p-6 md:p-8 rounded-3xl bg-card border border-border space-y-5"
          >
            <p className="font-mono text-xs text-accent tracking-widest">SEND A MESSAGE</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs text-muted-foreground font-mono">Your name</span>
                <input
                  required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-colors"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground font-mono">Your email</span>
                <input
                  required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-colors"
                  placeholder="jane@example.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs text-muted-foreground font-mono">Message</span>
              <textarea
                required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary outline-none transition-colors resize-none"
                placeholder="Tell me about your idea, project or just say hi..."
              />
            </label>
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all"
            >
              {sent ? "Opening your email…" : "Send message →"}
            </button>
            <p className="text-xs text-muted-foreground">
              This will open your email app with the message pre-filled.
            </p>
          </motion.form>

          {/* Direct contacts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <p className="font-mono text-xs text-accent tracking-widest mb-2">OR REACH OUT DIRECTLY</p>
            {[
              { icon: FaEnvelope, label: "Email", value: "vajrapuraghavendra2006@gmail.com", href: "mailto:vajrapuraghavendra2006@gmail.com" },
              { icon: FaWhatsapp, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/910000000000" },
              { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/raghavendra-vajrapu", href: "https://www.linkedin.com/in/raghavendra-vajrapu" },
              { icon: FaGithub, label: "GitHub", value: "github.com/raghavendravajrapu", href: "https://github.com/raghavendravajrapu" },
              { icon: FaMapMarkerAlt, label: "Based in", value: "Hyderabad, Telangana, India", href: "#" },
            ].map((c) => (
              <a
                key={c.label} href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/60 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center border border-border group-hover:border-primary/60 transition-colors">
                  <c.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm truncate">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        <p className="mt-20 text-center text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Raghavendra Vajrapu — Built with curiosity.
        </p>
      </div>
    </section>
  );
}
