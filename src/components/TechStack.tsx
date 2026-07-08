import LogoLoop, { LogoItem } from "../reactbits/Animations/LogoLoop/LogoLoop";

const logos: LogoItem[] = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", title: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", title: "Laravel" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", title: "Docker" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", title: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", title: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", title: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", title: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", title: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", title: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", title: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", title: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", title: "Kotlin" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", title: "Flutter" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", title: "Vue" },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Technologies & Tools
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-center">
          The languages, frameworks, and tools I use to build modern digital products.
        </p>
      </div>

      <div className="w-full">
         <LogoLoop
            logos={logos}
            speed={60}
            direction="left"
            logoHeight={60}
            gap={60}
            fadeOut={true}
            pauseOnHover={true}
         />
      </div>
    </section>
  );
}
