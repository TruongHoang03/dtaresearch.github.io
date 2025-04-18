import { Hero } from "@/components/sections/hero";
import { Programs } from "@/components/sections/programs";
import { About } from "@/components/sections/about";
import { Stats } from "@/components/sections/stats";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Programs />
      <Stats />
      <Contact />
    </main>
  );
}