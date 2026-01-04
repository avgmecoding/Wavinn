"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-black dark:text-white selection:bg-purple-500/30">
      <Navbar />

      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-20 overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0 -z-10 flex items-center justify-center"
        >
          <div className="w-[500px] h-[500px] rounded-full border border-dashed border-gray-500/30 animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-[700px] h-[700px] rounded-full border border-dotted border-gray-700/20 animate-[spin_100s_linear_infinite_reverse]" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="max-w-4xl text-5xl sm:text-8xl font-medium tracking-tighter leading-[0.9]">
            Visualize <span className="text-gray-400 italic font-serif">motion</span> <br /> 
            through mathematics.
          </h1>

          <p className="mt-8 max-w-lg mx-auto text-gray-500 dark:text-gray-400 font-mono text-xs sm:text-sm uppercase tracking-widest">
            A sandbox for sine waves, Bézier paths, and parametric beauty.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/playground"
              className="group relative px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 font-medium">Launch Playground</span>
            </Link>
            
            <Link
              href="/docs"
              className="px-8 py-3 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              Learn the Math
            </Link>
          </div>
        </motion.div>

        <div className="animate-pulse absolute bottom-10 left-10 hidden lg:block font-mono text-[10px] text-gray-500">
            <p>f(t) = A sin(ωt + φ)</p>
            <p>B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + ...</p>
        </div>
      </section>
    </main>
  );
}