import { motion } from "framer-motion";

const interests = [
  "Web Development", "Startup Product Ideas", "Cloud Computing", "AI-Based Platforms",
  "UI/UX Concepts", "Data Analytics", "Mobile & Web Apps", "Innovation & Entrepreneurship",
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-accent tracking-widest mb-4">— ABOUT ME</p>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl leading-tight">
            Curious mind, <span className="text-gradient">builder's</span> hands.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-6 text-lg text-muted-foreground"
        >
          <p>
            I'm pursuing <span className="text-foreground font-medium">B.Tech in Computer Science Engineering</span> at
            Sphoorthy Engineering College (2024–2028). Alongside academics, I work on startup ideas and
            modern tech projects that combine innovation with real-world problem-solving.
          </p>
          <p>
            I believe technology becomes powerful when it solves real problems in simple, practical ways.
            My focus is on shipping things — not just learning concepts.
          </p>
          <div className="pt-4">
            <p className="font-mono text-xs text-foreground tracking-widest mb-4">I ENJOY EXPLORING</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((i, idx) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  className="px-3 py-1.5 rounded-full bg-card border border-border text-sm text-foreground"
                >
                  {i}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
