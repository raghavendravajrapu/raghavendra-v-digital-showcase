import { motion } from "framer-motion";
import mealmate from "@/assets/project-mealmate.jpg";
import taskbuddy from "@/assets/project-taskbuddy.jpg";
import rentora from "@/assets/project-rentora.jpg";
import rankforge from "@/assets/project-rankforge.jpg";
import rainbank from "@/assets/project-rainbank.jpg";

const projects = [
  {
    n: "01", title: "MealMate", tag: "Subscription Meal Delivery Platform",
    desc: "A full-stack subscription-based meal delivery ecosystem connecting customers, vendors and delivery agents seamlessly.",
    features: ["Subscription Plans", "Vendor Dashboard", "Order Tracking", "Delivery Workflow"],
    stack: ["React", "Node", "Express", "PostgreSQL", "Expo"],
    img: mealmate, color: "oklch(0.72 0.16 40)",
  },
  {
    n: "02", title: "TaskBuddy", tag: "Student Productivity & Collaboration",
    desc: "Helping students organize tasks, collaborate with peers and stay productive with smart workflows.",
    features: ["Smart Tasks", "Team Collaboration", "Reminders", "Progress Tracking"],
    stack: ["React", "Node", "Express", "PostgreSQL"],
    img: taskbuddy, color: "oklch(0.72 0.18 295)",
  },
  {
    n: "03", title: "Rentora", tag: "Gadget & Asset Rental Platform",
    desc: "A modern rental platform to rent gadgets and assets easily, affordably and securely.",
    features: ["Easy Booking", "Secure Payments", "Vendor System", "Flexible Duration"],
    stack: ["React", "Node", "Express", "PostgreSQL", "Cloud"],
    img: rentora, color: "oklch(0.78 0.16 165)",
  },
  {
    n: "04", title: "RankForge", tag: "AI-Powered Student & College Management",
    desc: "A student-driven AI platform where colleges and students manage data, results, rankings and AI-driven predictions.",
    features: ["Student Login", "Results Mgmt", "AI Predictions", "Rankings", "Analytics"],
    stack: ["React", "Node", "Express", "PostgreSQL", "Python"],
    img: rankforge, color: "oklch(0.7 0.18 250)",
  },
  {
    n: "05", title: "Rain Bank ATM", tag: "Smart Rainwater Storage & Water ATM",
    desc: "A sustainable solution to store, filter and distribute rainwater through smart water ATMs in drought-prone areas.",
    features: ["Rainwater Collection", "Smart Filtration", "Water ATM", "Community Impact"],
    stack: ["IoT", "Python", "Database", "Cloud"],
    img: rainbank, color: "oklch(0.78 0.16 200)",
  },
];

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
          Innovative solutions built with modern technologies to solve real-world problems.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((p, i) => (
          <motion.article
            key={p.n}
            initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative group" data-hover>
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity"
                   style={{ background: p.color }} />
              <div className="relative rounded-3xl overflow-hidden border border-border tilt-card">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-auto" />
              </div>
            </div>
            <div>
              <p className="font-mono text-sm text-muted-foreground mb-4">{p.n} / 05</p>
              <h3 className="font-display font-extrabold text-4xl md:text-5xl">{p.title}</h3>
              <p className="mt-2 text-accent font-mono text-sm tracking-wide">{p.tag}</p>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span key={f} className="px-3 py-1.5 text-xs rounded-full bg-card border border-border text-foreground">{f}</span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="font-mono text-xs text-muted-foreground">{s}</span>
                )).reduce((acc: any[], el, idx, arr) => {
                  acc.push(el);
                  if (idx < arr.length - 1) acc.push(<span key={`sep-${idx}`} className="text-muted-foreground">·</span>);
                  return acc;
                }, [])}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
