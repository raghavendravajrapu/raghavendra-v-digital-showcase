import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#career", label: "Career" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-5 backdrop-blur-md bg-background/40 border-b border-border"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#top" className="font-display font-extrabold tracking-tight text-xl">
          R<span className="text-gradient">V</span>.
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="story-link hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:vajrapuraghavendra2006@gmail.com"
          className="text-xs md:text-sm px-4 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Let's talk
        </a>
      </div>
    </motion.header>
  );
}
