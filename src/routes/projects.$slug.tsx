import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectPage,
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="font-display text-5xl font-extrabold mb-4">Project not found</h1>
        <Link to="/" className="text-accent underline">Back home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="font-display text-3xl font-extrabold mb-4">Something went wrong</h1>
        <p className="text-muted-foreground mb-4">{error.message}</p>
        <Link to="/" className="text-accent underline">Back home</Link>
      </div>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title} — Raghavendra Vajrapu` },
      { name: "description", content: loaderData?.project.desc },
    ],
  }),
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="relative min-h-screen pt-28 pb-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          hash="work"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to work
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <p className="font-mono text-sm text-accent tracking-widest mb-3">
            {p.n} / PROJECT DASHBOARD
          </p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[0.95]">
            {p.title}
          </h1>
          <p className="mt-3 text-accent font-mono text-sm tracking-wide">{p.tag}</p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-12 group"
        >
          <div
            className="absolute -inset-4 rounded-3xl blur-3xl opacity-50"
            style={{ background: p.color }}
          />
          <div className="relative rounded-3xl overflow-hidden border border-border">
            <img src={p.img} alt={p.title} className="w-full h-auto" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {p.highlights.map((h) => (
            <div key={h.label} className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                {h.label}
              </p>
              <p className="mt-2 font-display text-xl font-bold">{h.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="font-display text-3xl font-extrabold mb-3">Overview</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{p.overview}</p>
            </section>
            <section>
              <h2 className="font-display text-3xl font-extrabold mb-3">The problem</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{p.problem}</p>
            </section>
            <section>
              <h2 className="font-display text-3xl font-extrabold mb-3">The solution</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">{p.solution}</p>
            </section>
            <section>
              <h2 className="font-display text-3xl font-extrabold mb-4">Key features</h2>
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span key={f} className="px-3 py-1.5 text-sm rounded-full bg-card border border-border">
                    {f}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2">Role</p>
              <p className="font-display text-lg font-bold">{p.role}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2">Status</p>
              <p className="font-display text-lg font-bold">{p.status}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">Tech stack</p>
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {p.stack.map((s, i) => (
                  <span key={s} className="font-mono text-sm text-foreground">
                    {s}{i < p.stack.length - 1 && <span className="text-muted-foreground ml-2">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-border pt-10">
          <Link to="/" hash="work" className="font-mono text-sm text-muted-foreground hover:text-foreground">
            ← All projects
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="text-right group"
          >
            <p className="font-mono text-xs text-muted-foreground tracking-widest">NEXT PROJECT</p>
            <p className="font-display text-2xl font-extrabold group-hover:text-accent transition-colors">
              {next.title} →
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
