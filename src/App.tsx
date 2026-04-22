/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Dynamically load the survey embed script
    const script = document.createElement("script");
    script.src = "https://link.markgrowth.pro/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="relative h-screen w-full bg-[#0A0A0A] font-sans selection:bg-cyan-500/30 overflow-hidden flex flex-col items-center">
      {/* Infrastructure Surgical Texture */}
      <div className="noise-overlay absolute inset-0 z-50 pointer-events-none" />

      {/* Radial Illumination Orbs */}
      <div className="absolute -top-[5%] -left-[20%] w-[100vw] h-[60vh] bg-cyan-400/[0.08] rounded-full blur-[100px] pointer-events-none z-1" />
      <div className="absolute -bottom-[5%] -right-[10%] w-[80vw] h-[50vh] bg-cyan-400/[0.05] rounded-full blur-[120px] pointer-events-none z-1" />
      
      {/* Precision Grid Accents */}
      <div className="precision-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Header Section - Compressed for single-screen view */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col items-center gap-2 pt-6 pb-2 z-40 bg-gradient-to-b from-[#0A0A0A] to-transparent"
      >
        <img 
          src="https://i.postimg.cc/PrH1tgfy/IGA-Logo-New.png" 
          alt="Iconic Group" 
          className="h-24 md:h-[120px] w-auto object-contain"
          referrerPolicy="no-referrer"
        />
        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-cyan-400/80 text-center px-6">
          SOLO PARA CLÍNICAS DENTALES SELECCIONADAS
        </span>
      </motion.div>

      {/* Central Content Area - Flexible height to fit screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full flex-1 flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="w-full h-full flex items-center justify-center px-2">
          {/* Survey Iframe - Using flex-1 and h-full to fit perfectly */}
          <iframe 
            src="https://link.markgrowth.pro/widget/survey/86QwFQtDttKxrTz0yHWh" 
            style={{ border: 'none', width: '100%', height: '100%' }} 
            scrolling="yes" 
            id="86QwFQtDttKxrTz0yHWh" 
            title="survey"
          />
        </div>
      </motion.div>

      {/* Micro Detail & Bottom Status - Compressed */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="w-full flex flex-col items-center gap-1 py-4 z-20 pointer-events-none bg-gradient-to-t from-[#0A0A0A] to-transparent"
      >
        <div className="flex items-center gap-2 opacity-30 mb-1">
          <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
          <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-zinc-500">
            System Synchronized • 02.449
          </p>
        </div>
        <div className="h-[1px] w-12 bg-white/10 mb-1" />
        <div className="text-[7px] uppercase tracking-widest text-zinc-700 text-center">
          Iconic Group © 2026 / Auth Required
        </div>
        <div className="text-[7px] uppercase tracking-widest text-cyan-400/20">
          Protocol: 88-X / Latency: 12ms
        </div>
      </motion.div>
    </main>
  );
}
