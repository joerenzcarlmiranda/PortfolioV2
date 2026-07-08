import React from "react";
import { Download, Linkedin, Briefcase, Github } from "lucide-react";
import { motion } from "motion/react";
import TiltedCard from "../reactbits/Components/TiltedCard/TiltedCard";
import TrueFocus from "../reactbits/TextAnimations/TrueFocus/TrueFocus";
import RotatingText from "../reactbits/TextAnimations/RotatingText/RotatingText";

export default function HeroSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between w-full gap-12 z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium tracking-wide border border-orange-200 dark:border-orange-800/50 mb-4">
            Available for new opportunities
          </div>
          <div className="flex justify-center lg:justify-start w-full mb-6 relative z-20">
            <TrueFocus 
              sentence="Joerenz Carl M. Miranda"
              manualMode={false}
              blurAmount={4}
              borderColor="#f97316"
              glowColor="rgba(249, 115, 22, 0.6)"
              animationDuration={0.4}
              pauseBetweenAnimations={1.0}
            />
          </div>
          <h2 className="text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300 flex flex-wrap gap-2 items-center justify-center lg:justify-start mt-2">
             <span>I am a</span>
             <RotatingText
               texts={['Fullstack Developer', 'Data Analyst', 'IT Technical Support', 'Virtual Assistant']}
               mainClassName="px-3 bg-orange-500 text-white overflow-hidden py-1 rounded-lg"
               staggerFrom="last"
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               exit={{ y: "-120%" }}
               staggerDuration={0.025}
               splitLevelClassName="overflow-hidden"
               transition={{ type: "spring", damping: 30, stiffness: 400 }}
               rotationInterval={3000}
             />
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed pb-4">
            I'm a passionate developer specializing in building exceptional digital experiences. I love combining modern technologies with beautiful design to solve real-world problems.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 mb-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800/30 transition-all shadow-sm">
              <Linkedin size={22} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-200 dark:hover:border-green-800/30 transition-all shadow-sm" title="Upwork / OnlineJobs">
              <Briefcase size={22} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm">
              <Github size={22} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white transition-all duration-200 bg-slate-900 dark:bg-white dark:text-slate-900 border border-transparent rounded-full hover:bg-slate-800 dark:hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download CV <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-900 dark:text-white transition-all duration-200 bg-transparent border border-slate-300 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Profile Card wrapped in TiltedCard for 3D effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none"
        >
          <div className="w-[300px] md:w-[350px] h-[400px] md:h-[450px]">
            <TiltedCard
              imageSrc="/profilecard.jfif"
              altText="JoerenzDev"
              captionText="JoerenzDev"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showTooltip={false}
              showMobileWarning={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[15px] w-[300px] md:w-[350px] h-[400px] md:h-[450px]">
                  <h3 className="text-3xl font-bold text-white mb-2">JoerenzDev</h3>
                  <p className="text-base text-gray-200 font-medium tracking-wide">BSIT | Full Stack Dev</p>
                </div>
              }
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
