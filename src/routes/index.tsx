import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Landing } from "@/components/Landing";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Work } from "@/components/Work";
import { Career } from "@/components/Career";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Raghavendra Vajrapu — Building Tech Products with Startup Thinking" },
      { name: "description", content: "Portfolio of Raghavendra Vajrapu — CSE student, innovator and entrepreneur building MealMate, TaskBuddy, Rentora, RankForge and Rain Bank ATM." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Cursor />
      <Navbar />
      <Landing />
      <About />
      <TechStack />
      <Work />
      <Career />
      <Contact />
    </main>
  );
}
