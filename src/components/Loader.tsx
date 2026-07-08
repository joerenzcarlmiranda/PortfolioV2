import { useState, useEffect } from "react";
import BlurText from "../reactbits/TextAnimations/BlurText/BlurText";
import { motion, AnimatePresence } from "motion/react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
        >
          <BlurText
            text="JoerenzDev"
            delay={100}
            animateBy="letters"
            direction="top"
            className="text-5xl md:text-7xl font-bold font-sans tracking-tighter text-white"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
