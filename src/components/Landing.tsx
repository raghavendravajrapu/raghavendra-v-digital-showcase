import { motion } from "framer-motion";
import avatar from "@/assets/avatar.jpg";

export function Landing() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col overflow-hidden pt-28 pb-12">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full bg-primary/30 blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative max-w-7xl w-full mx-auto px-6 md:px-10 grid lg:grid-cols-[1.6fr_1fr] xl:grid-cols-[2fr_1fr] gap-14 items-center flex-1">
        <div className="text-center lg:text-left min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-mono text-sm text-accent tracking-widest mb-6"
          >
            ⟶ HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display font-extrabold leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="block text-gradient">RAGHAVENDRA</span>
            <span className="block">VAJRAPU</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="mt-6 font-display text-xl md:text-2xl text-muted-foreground"
          >
            Building <span className="text-foreground">real-world tech products</span> with startup thinking.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }}
            className="mt-4 text-muted-foreground max-w-xl text-base md:text-lg mx-auto md:mx-0"
          >
            CSE student · Innovator · Entrepreneur — turning ideas into digital platforms that solve real problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }}
            className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <a href="#work" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:glow transition-all">
              See my work →
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-border hover:bg-card transition-colors">
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative justify-self-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-2xl opacity-50 animate-float" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/40 animate-float">
            <img src={avatar} alt="Raghavendra Vajrapu" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-4 px-4 py-2 rounded-full bg-card border border-border font-mono text-xs whitespace-nowrap">
            🚀 Available for collabs
          </div>
        </motion.div>
      </div>
    </section>
  );
}
