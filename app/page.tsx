import Hero from "../components/sections/hero";
import Projects from "../components/sections/projects";
import Expertise from "../components/sections/expertise";
import Contact from "../components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Expertise />
      <Contact />
    </main>
  );
}