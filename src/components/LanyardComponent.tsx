import { motion } from "motion/react";
import { Github, FolderGit2, Code2, GitCommit } from "lucide-react";
import CountUp from "../reactbits/TextAnimations/CountUp/CountUp";

export default function LanyardComponent() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900/50 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row gap-12 items-center">
        
        {/* Left Column - About Me */}
        <div className="flex-1 flex flex-col pointer-events-auto">
          <div className="mb-0">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                I am a dedicated software engineer with a passion for crafting elegant and scalable solutions.
                My journey began with a fascination for how things work under the hood, and it has evolved into
                a career where I build applications that people use and love.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or mentoring aspiring developers.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 mb-2">
                    <FolderGit2 size={20} />
                    <span className="font-medium text-sm">Repositories</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
                    <CountUp to={17} from={0} duration={2} separator="," />
                  </div>
                </div>
                
                <div className="flex flex-col p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 mb-2">
                    <Code2 size={20} />
                    <span className="font-medium text-sm">Projects</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
                    <CountUp to={12} from={0} duration={2} />
                    <span className="text-slate-500 ml-1">+</span>
                  </div>
                </div>

                <div className="flex flex-col p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 mb-2">
                    <GitCommit size={20} />
                    <span className="font-medium text-sm">Commits</span>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white flex items-center">
                    <CountUp to={482} from={0} duration={2} separator="," />
                    <span className="text-slate-500 ml-1">+</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a href="https://github.com/joerenzcarlmiranda" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-xl hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors font-medium">
                  <Github size={20} />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Giphy Animation */}
        <div className="flex-1 relative w-full min-h-[500px] lg:min-h-[600px] pointer-events-auto flex items-center justify-center lg:justify-end pr-0 lg:pr-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="w-full max-w-[400px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800"
          >
            <div className="aspect-square relative flex items-center justify-center bg-slate-100 dark:bg-slate-800">
              <img 
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWswY3Rjb2EyOGxsYnpzd2c4MTM2MTFmOWw3dW42M3NtNjF3ZXVoaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SWoSkN6DxTszqIKEqv/giphy.gif" 
                alt="Programming Animation" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
