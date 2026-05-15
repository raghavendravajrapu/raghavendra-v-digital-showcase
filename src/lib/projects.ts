import mealmate from "@/assets/project-mealmate.jpg";
import taskbuddy from "@/assets/project-taskbuddy.jpg";
import rentora from "@/assets/project-rentora.jpg";
import rankforge from "@/assets/project-rankforge.jpg";
import rainbank from "@/assets/project-rainbank.jpg";

export type Project = {
  slug: string;
  n: string;
  title: string;
  tag: string;
  desc: string;
  features: string[];
  stack: string[];
  img: string;
  color: string;
  overview: string;
  problem: string;
  solution: string;
  highlights: { label: string; value: string }[];
  role: string;
  status: string;
};

export const projects: Project[] = [
  {
    slug: "mealmate",
    n: "01", title: "MealMate", tag: "Subscription Meal Delivery Platform",
    desc: "A full-stack subscription-based meal delivery ecosystem connecting customers, vendors and delivery agents seamlessly.",
    features: ["Subscription Plans", "Vendor Dashboard", "Order Tracking", "Delivery Workflow"],
    stack: ["React", "Node", "Express", "PostgreSQL", "Expo"],
    img: mealmate, color: "oklch(0.72 0.16 40)",
    overview: "MealMate is a three-sided marketplace connecting hungry customers, home-style vendors and delivery agents through one subscription engine.",
    problem: "Daily tiffin and meal subscriptions are fragmented — customers chase vendors on WhatsApp, vendors lose track of plans, and deliveries are unorganized.",
    solution: "A unified platform with subscription plans, vendor dashboards, real-time order tracking and a structured delivery workflow that scales across cities.",
    highlights: [
      { label: "User Roles", value: "Customer · Vendor · Delivery" },
      { label: "Core Loop", value: "Subscribe → Cook → Dispatch → Track" },
      { label: "Scale Goal", value: "Multi-city rollout" },
    ],
    role: "Founder & Full-stack Developer",
    status: "In active development",
  },
  {
    slug: "taskbuddy",
    n: "02", title: "TaskBuddy", tag: "Student Productivity & Collaboration",
    desc: "Helping students organize tasks, collaborate with peers and stay productive with smart workflows.",
    features: ["Smart Tasks", "Team Collaboration", "Reminders", "Progress Tracking"],
    stack: ["React", "Node", "Express", "PostgreSQL"],
    img: taskbuddy, color: "oklch(0.72 0.18 295)",
    overview: "TaskBuddy is built for students who juggle assignments, group projects and personal goals in one calm productivity space.",
    problem: "Students bounce between Notes, WhatsApp groups and paper planners — nothing is connected and deadlines slip through the cracks.",
    solution: "Smart tasks, shared boards, reminders and progress tracking designed around the rhythm of college life.",
    highlights: [
      { label: "Audience", value: "Students & study groups" },
      { label: "Core Modules", value: "Tasks · Teams · Reminders" },
      { label: "Vibe", value: "Calm, focused, friendly" },
    ],
    role: "Founder & Product Engineer",
    status: "MVP",
  },
  {
    slug: "rentora",
    n: "03", title: "Rentora", tag: "Gadget & Asset Rental Platform",
    desc: "A modern rental platform to rent gadgets and assets easily, affordably and securely.",
    features: ["Easy Booking", "Secure Payments", "Vendor System", "Flexible Duration"],
    stack: ["React", "Node", "Express", "PostgreSQL", "Cloud"],
    img: rentora, color: "oklch(0.78 0.16 165)",
    overview: "Rentora makes renting gadgets and assets feel as easy as booking a cab — a few taps, secure payment and you are done.",
    problem: "Buying gadgets for short-term needs is wasteful, and existing rental options are slow, unsafe or scattered.",
    solution: "A trusted marketplace with verified vendors, flexible durations, secure payments and a clean booking experience.",
    highlights: [
      { label: "Categories", value: "Cameras · Laptops · Tools" },
      { label: "Trust", value: "Vendor verification + payments" },
      { label: "Flex", value: "Hourly to monthly rentals" },
    ],
    role: "Founder & Full-stack Developer",
    status: "Prototype",
  },
  {
    slug: "rankforge",
    n: "04", title: "RankForge", tag: "AI-Powered Student & College Management",
    desc: "A student-driven AI platform where colleges and students manage data, results, rankings and AI-driven predictions.",
    features: ["Student Login", "Results Mgmt", "AI Predictions", "Rankings", "Analytics"],
    stack: ["React", "Node", "Express", "PostgreSQL", "Python"],
    img: rankforge, color: "oklch(0.7 0.18 250)",
    overview: "RankForge gives colleges and students a single AI-native workspace for results, rankings and growth analytics.",
    problem: "College result systems are static PDFs — students cannot benchmark themselves and colleges cannot spot trends early.",
    solution: "A unified portal that ingests results, ranks performance, predicts outcomes with AI and surfaces insights to both sides.",
    highlights: [
      { label: "AI Layer", value: "Performance prediction" },
      { label: "Stakeholders", value: "Students · Faculty · Admin" },
      { label: "Output", value: "Rankings + analytics dashboards" },
    ],
    role: "Founder & AI Product Builder",
    status: "Building",
  },
  {
    slug: "rain-bank-atm",
    n: "05", title: "Rain Bank ATM", tag: "Smart Rainwater Storage & Water ATM",
    desc: "A sustainable solution to store, filter and distribute rainwater through smart water ATMs in drought-prone areas.",
    features: ["Rainwater Collection", "Smart Filtration", "Water ATM", "Community Impact"],
    stack: ["IoT", "Python", "Database", "Cloud"],
    img: rainbank, color: "oklch(0.78 0.16 200)",
    overview: "Rain Bank ATM turns seasonal rainfall into year-round, on-demand clean water for communities that need it most.",
    problem: "Drought-prone regions waste monsoon rainfall and then struggle for clean drinking water months later.",
    solution: "A smart system that harvests, filters and dispenses rainwater through community Water ATMs with usage tracking.",
    highlights: [
      { label: "Impact", value: "Drought-prone communities" },
      { label: "Tech", value: "IoT sensors + cloud monitoring" },
      { label: "Access", value: "Pay-per-litre Water ATM" },
    ],
    role: "Concept Lead & Builder",
    status: "Concept / Pilot",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
