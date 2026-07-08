import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="education" ref={containerRef} className="py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Background</span>
          </h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Animated Line */}
          <div className="absolute left-[11px] md:left-1/2 md:-ml-[2px] top-2 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-orange-500 origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Items */}
          <div className="space-y-16">
            
            {/* Primary */}
            <div className="relative md:flex md:justify-between md:items-center w-full group">
              <div className="md:w-5/12 mb-4 md:mb-0 md:text-right pr-0 md:pr-12">
                <p className="text-orange-500 font-bold mb-1 tracking-wide text-sm">2010 - 2016</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Primary Level</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium">Ignacio Centeno Elementary School</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Graduated 2016</p>
              </div>
              <div className="absolute left-[-40px] md:left-1/2 md:-ml-3 mt-1.5 md:mt-0 w-6 h-6 rounded-full bg-orange-500 ring-4 ring-orange-100 dark:ring-orange-900/50 z-10 flex items-center justify-center transition-transform group-hover:scale-125 duration-300">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="md:w-5/12 pl-0 md:pl-12">
                {/* Optional description or empty space to keep alignment */}
              </div>
            </div>

            {/* Secondary */}
            <div className="relative md:flex md:justify-between md:items-center w-full group">
              <div className="md:w-5/12 mb-4 md:mb-0 md:text-right pr-0 md:pr-12 md:order-1 order-2 hidden md:block">
                 {/* Empty space for alternating layout */}
              </div>
              <div className="absolute left-[-40px] md:left-1/2 md:-ml-3 mt-1.5 md:mt-0 w-6 h-6 rounded-full bg-orange-500 ring-4 ring-orange-100 dark:ring-orange-900/50 z-10 flex items-center justify-center md:order-2 transition-transform group-hover:scale-125 duration-300">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <div className="md:w-5/12 pl-0 md:pl-12 md:order-3 order-1">
                <p className="text-orange-500 font-bold mb-1 tracking-wide text-sm">2016 - 2022</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Secondary Level</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">Cobol National High School</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">Graduated August 2022</p>
                <span className="inline-block px-4 py-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-bold rounded-full border border-orange-200 dark:border-orange-800">With Honor</span>
              </div>
            </div>

            {/* Tertiary */}
            <div className="relative md:flex md:justify-between md:items-start w-full group">
              <div className="md:w-5/12 mb-4 md:mb-0 md:text-right pr-0 md:pr-12 pt-2">
                <p className="text-orange-500 font-bold mb-1 tracking-wide text-sm">2022 - 2026</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">Tertiary Level</h3>
                <p className="text-slate-800 dark:text-slate-300 font-bold mb-1">Bachelor of Science in Information Technology</p>
                <p className="text-slate-700 dark:text-slate-400 font-medium mb-1">Pangasinan State University</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">Graduated July 28, 2026</p>
                <span className="inline-block px-5 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm font-extrabold rounded-full border border-yellow-200 dark:border-yellow-800 shadow-sm">Magna Cum Laude</span>
              </div>
              <div className="absolute left-[-40px] md:left-1/2 md:-ml-4 mt-3 md:mt-4 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 ring-4 ring-orange-100 dark:ring-orange-900/50 z-10 flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-md">
                <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
              </div>
              <div className="md:w-5/12 pl-0 md:pl-12 pt-1 md:pt-0">
                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-md hover:border-orange-200 dark:hover:border-orange-900/50">
                  <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">Academic Honors</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-400 ring-2 ring-orange-100 dark:ring-orange-900"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium flex-1">1st Year</span>
                      <span className="text-orange-600 dark:text-orange-400 font-semibold bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-md text-sm">Dean's Lister</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-400 ring-2 ring-orange-100 dark:ring-orange-900"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium flex-1">2nd Year</span>
                      <span className="text-orange-600 dark:text-orange-400 font-semibold bg-orange-50 dark:bg-orange-900/20 px-3 py-1 rounded-md text-sm">Dean's Lister</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 ring-2 ring-amber-100 dark:ring-amber-900"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium flex-1">3rd Year</span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-md text-sm">President's Lister</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500 ring-2 ring-amber-100 dark:ring-amber-900"></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium flex-1">4th Year</span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-md text-sm">President's Lister</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
