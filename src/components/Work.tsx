import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="relative py-32 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-20"
      >
        <p className="font-mono text-sm text-accent tracking-widest mb-3">— FEATURED WORK</p>
        <h2 className="font-display font-extrabold text-5xl md:text-7xl leading-[0.95]">
          Selected <span className="text-gradient">projects</span>.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl text-lg">
          Click any project to open its dashboard.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <Link
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="relative group block"
              data-hover
            >
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"
                   style={{ background: p.color }} />
              <div className="relative rounded-3xl overflow-hidden border border-border tilt-card">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-auto" />
              </div>
            </Link>
            <div>
              <p className="font-mono text-sm text-muted-foreground mb-4">{p.n} / 0{projects.length}</p>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="inline-flex items-center gap-3 group"
                data-hover
              >
                <h3 className="font-display font-extrabold text-4xl md:text-5xl group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <ArrowUpRight className="w-7 h-7 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </Link>
              <p className="mt-2 text-accent font-mono text-sm tracking-wide">{p.tag}</p>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span key={f} className="px-3 py-1.5 text-xs rounded-full bg-card border border-border text-foreground">{f}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1">
                {p.stack.map((s, idx) => (
                  <span key={s} className="font-mono text-xs text-muted-foreground">
                    {s}{idx < p.stack.length - 1 && <span className="ml-2">·</span>}
                  </span>
                ))}
              </div>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
                data-hover
              >
                View project dashboard <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
