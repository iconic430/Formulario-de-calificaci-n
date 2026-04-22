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
    <main className="relative min-h-screen w-full bg-[#0A0A0A] font-sans selection:bg-cyan-500/30 overflow-y-auto overflow-x-hidden flex flex-col items-center pt-64 pb-20 scroll-smooth">
      {/* Infrastructure Surgical Texture */}
      <div className="noise-overlay absolute inset-0 z-50 pointer-events-none" />

      {/* Radial Illumination Orbs */}
      <div className="absolute -top-[10%] -left-[20%] w-[100vw] h-[100vw] bg-cyan-400/[0.1] rounded-full blur-[120px] pointer-events-none z-1" />
      <div className="absolute bottom-[0%] right-[-10%] w-[80vw] h-[80vw] bg-cyan-400/[0.05] rounded-full blur-[150px] pointer-events-none z-1" />
      
      {/* Precision Grid Accents */}
      <div className="precision-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Logo Section - Absolute instead of Fixed to avoid keyboard overlap glitches */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        className="absolute top-12 w-full flex flex-col items-center gap-4 z-40"
      >
        <img 
          src="https://i.postimg.cc/PrH1tgfy/IGA-Logo-New.png" 
          alt="Iconic Group" 
          className="h-14 md:h-20 w-auto object-contain opacity-100"
          referrerPolicy="no-referrer"
        />
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-cyan-400/80 text-center px-6">
          SOLO PARA CLÍNICAS DENTALES SELECCIONADAS
        </span>
      </motion.div>

      {/* Central Content Area - No box, full width optimization for phone */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.2,
          ease: [0.23, 1, 0.32, 1] 
        }}
        className="relative z-10 w-full px-0 flex flex-col items-center"
      >
        {/* Survey Iframe Implementation - Optimized for Mobile Viewport */}
        <div className="w-full flex items-center justify-center min-h-[600px] bg-transparent">
          <iframe 
            src="https://link.markgrowth.pro/widget/survey/86QwFQtDttKxrTz0yHWh" 
            style={{ border: 'none', width: '100%', minHeight: '800px' }} 
            scrolling="no" 
            id="86QwFQtDttKxrTz0yHWh" 
            title="survey"
          />
        </div>
        
        {/* Minimal Micro Detail for Tech Feel */}
        <div className="mt-8 flex items-center gap-3 opacity-40">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <p className="text-[10px] font-medium uppercase tracking-[0.5em] text-zinc-500">
            System Synchronized • 02.449
          </p>
        </div>
      </motion.div>

      {/* Bottom Status Bar - Compact for Mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full px-8 mt-12 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <div className="h-[1px] w-20 bg-white/10 mb-4" />
        <div className="text-[8px] uppercase tracking-widest text-zinc-700 text-center">
          Iconic Group © 2024 / Authorization Required
        </div>
        <div className="text-[8px] uppercase tracking-widest text-cyan-400/30">
          Protocol: 88-X / Latency: 12ms
        </div>
      </motion.div>
    </main>
  );
}
