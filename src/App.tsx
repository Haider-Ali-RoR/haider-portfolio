import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import DotField from "./components/DotField";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return "light";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      {/* Fixed page backdrop, two faint layers behind everything:
          (1) a field of randomly scattered, theme-aware dots, and
          (2) a soft brand-blue glow for a little warmth. */}
      <DotField />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_80%_-10%,rgba(47,132,251,0.10),transparent),radial-gradient(35rem_35rem_at_-10%_30%,rgba(47,132,251,0.06),transparent)] dark:bg-[radial-gradient(40rem_40rem_at_80%_-10%,rgba(47,132,251,0.14),transparent),radial-gradient(35rem_35rem_at_-10%_30%,rgba(47,132,251,0.08),transparent)]"
      />

      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
