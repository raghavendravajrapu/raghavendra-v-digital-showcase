import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-3xl" />
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-mono text-sm text-accent tracking-widest mb-6"
        >
          — LET'S BUILD SOMETHING
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="font-display font-extrabold text-5xl md:text-8xl leading-[0.95]"
        >
          Have an idea?<br />
          <span className="text-gradient">Let's talk.</span>
        </motion.h2>

        <motion.a
          href="mailto:vajrapuraghavendra2006@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="inline-block mt-12 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all"
        >
          vajrapuraghavendra2006@gmail.com
        </motion.a>

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: FaEnvelope, label: "Email", value: "vajrapuraghavendra2006@gmail.com", href: "mailto:vajrapuraghavendra2006@gmail.com" },
            { icon: FaLinkedin, label: "LinkedIn", value: "Connect", href: "https://linkedin.com" },
            { icon: FaGithub, label: "GitHub", value: "Follow", href: "https://github.com" },
            { icon: FaMapMarkerAlt, label: "Location", value: "Hyderabad, IN", href: "#" },
          ].map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
               className="p-5 rounded-2xl bg-card border border-border hover:border-primary/60 transition-colors text-left tilt-card">
              <c.icon className="w-5 h-5 text-primary mb-3" />
              <p className="font-mono text-xs text-muted-foreground">{c.label}</p>
              <p className="text-sm mt-1 truncate">{c.value}</p>
            </a>
          ))}
        </div>

        <p className="mt-20 text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Raghavendra Vajrapu — Built with curiosity.
        </p>
      </div>
    </section>
  );
}
