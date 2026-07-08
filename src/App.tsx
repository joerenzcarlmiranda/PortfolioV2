import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import LanyardComponent from "./components/LanyardComponent";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import LifeStyle from "./components/LifeStyle";
import Contact from "./components/Contact";
import { Theme } from "./types";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Check initial preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-100">
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <NavBar theme={theme} setTheme={setTheme} />
          <main>
            <HeroSection />
            <LanyardComponent />
            <Education />
            <LifeStyle />
            <TechStack />
            <Projects />
            <Contact />
          </main>
          
          <footer className="py-8 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
            <p>© {new Date().getFullYear()} JoerenzDev. All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}
