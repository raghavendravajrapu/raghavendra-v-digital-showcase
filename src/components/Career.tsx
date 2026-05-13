import { motion } from "framer-motion";

const items = [
  {
    year: "2024 — 2028",
    title: "B.Tech, Computer Science Engineering",
    org: "Sphoorthy Engineering College",
    desc: "Studying DSA, DBMS, OS, Web Tech, Cloud Computing and Software Engineering.",
  },
  {
    year: "2025",
    title: "Oracle Cloud Infrastructure Foundations Associate",
    org: "Oracle",
    desc: "Cloud infrastructure, networking, security, compute, storage and database concepts.",
  },
  {
    year: "2025",
    title: "Oracle Data Platform Foundations Associate",
    org: "Oracle",
    desc: "Data management, analytics platforms, data processing and enterprise data systems.",
  },
  {
    year: "Now",
    title: "Building startup-oriented projects",
    org: "Independent",
    desc: "Shipping MealMate, TaskBuddy, Rentora, RankForge & Rain Bank ATM — from idea to MVP.",
  },
];

export function Career() {
  return (
    <section id="career" className="relative py-32 px-6 md:px-10 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="font-mono text-sm text-accent tracking-widest mb-3">— JOURNEY</p>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl">
            Education & <span className="text-gradient">milestones</span>.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.7 }}
                className={`relative grid md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-16" : "md:text-right md:pr-16"}`}>
                  <p className="font-mono text-sm text-accent">{it.year}</p>
                  <h3 className="font-display font-bold text-2xl mt-1">{it.title}</h3>
                  <p className="text-muted-foreground mt-1">{it.org}</p>
                  <p className="text-muted-foreground mt-3">{it.desc}</p>
                </div>
                <div />
                <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 ring-4 ring-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
