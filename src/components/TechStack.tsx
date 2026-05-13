import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import {
  SiJavascript, SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiHtml5, SiCss3,
  SiGit, SiGithub, SiFigma, SiOracle, SiExpo,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const groups = [
  {
    title: "Languages",
    items: [
      { icon: FaJava, label: "Java" },
      { icon: SiJavascript, label: "JavaScript" },
      { icon: FaDatabase, label: "SQL" },
      { icon: SiHtml5, label: "HTML" },
      { icon: SiCss3, label: "CSS" },
    ],
  },
  {
    title: "Web",
    items: [
      { icon: SiReact, label: "React.js" },
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiExpress, label: "Express" },
      { icon: SiExpo, label: "Expo" },
    ],
  },
  {
    title: "Cloud & DB",
    items: [
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: SiOracle, label: "Oracle Cloud" },
      { icon: FaDatabase, label: "Databases" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: SiGit, label: "Git" },
      { icon: SiGithub, label: "GitHub" },
      { icon: SiFigma, label: "Figma" },
    ],
  },
];

const all = groups.flatMap((g) => g.items);

export function TechStack() {
  return (
    <section id="skills" className="py-24 border-y border-border bg-card/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 md:px-10 mb-12"
      >
        <p className="font-mono text-sm text-accent tracking-widest mb-3">— TECH STACK</p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl">
          Tools I <span className="text-gradient">build</span> with.
        </h2>
      </motion.div>

      <Marquee gradient gradientColor="oklch(0.18 0.025 280)" speed={40} pauseOnHover>
        {all.concat(all).map((t, i) => (
          <div key={i} className="flex items-center gap-3 mx-6 px-6 py-4 rounded-2xl bg-background/60 border border-border">
            <t.icon className="w-7 h-7 text-primary" />
            <span className="font-mono text-sm">{t.label}</span>
          </div>
        ))}
      </Marquee>

      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16 grid md:grid-cols-4 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: gi * 0.1 }}
            className="p-6 rounded-2xl bg-background border border-border tilt-card"
          >
            <p className="font-mono text-xs text-accent tracking-widest mb-4">{g.title.toUpperCase()}</p>
            <ul className="space-y-2">
              {g.items.map((it) => (
                <li key={it.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <it.icon className="w-4 h-4 text-foreground" /> {it.label}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
