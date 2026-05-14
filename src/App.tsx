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
    <main className="relative h-screen w-full bg-[#0A0A0A] font-sans selection:bg-[#00D8FF]/30 overflow-hidden flex flex-col items-center">
      {/* Infrastructure Surgical Texture */}
      <div className="noise-overlay absolute inset-0 z-50 pointer-events-none" />

      {/* Radial Illumination Orbs - Optimized based on reference image */}
      <div className="absolute -top-[5%] -left-[20%] w-[100vw] h-[60vh] bg-[#00D8FF]/[0.06] rounded-full blur-[100px] pointer-events-none z-1" />
      <div className="absolute -bottom-[5%] -right-[10%] w-[80vw] h-[50vh] bg-[#00D8FF]/[0.04] rounded-full blur-[120px] pointer-events-none z-1" />
      
      {/* Precision Grid Accents */}
      <div className="precision-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Header Section - Compressed for single-screen view */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full flex flex-col items-center gap-2 pt-6 pb-2 z-40 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent"
      >
        <img 
          src="https://i.postimg.cc/PrH1tgfy/IGA-Logo-New.png" 
          alt="Iconic Group" 
          className="h-24 md:h-[120px] w-auto object-contain drop-shadow-[0_0_15px_rgba(0,216,255,0.1)]"
          referrerPolicy="no-referrer"
        />
        <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#00D8FF]/80 text-center px-6">
          SOLO PARA CLÍNICAS DENTALES SELECCIONADAS
        </span>
        
        {/* Scarcity / High-Value Highlight - Exact match to reference image glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-3 px-6 py-2 border border-[#00D8FF]/30 rounded-full bg-black/40 backdrop-blur-md shadow-[0_0_25px_rgba(0,216,255,0.15)] flex items-center gap-3 relative overflow-hidden"
        >
          {/* Animated glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D8FF]/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          
          <span className="w-2 h-2 rounded-full bg-[#00D8FF] shadow-[0_0_12px_rgba(0,216,255,1)] animate-pulse" />
          <p className="text-[10px] font-black text-white tracking-tight leading-tight text-center max-w-[280px]">
            SOLO SELECCIONAMOS <span className="text-[#00D8FF] drop-shadow-[0_0_10px_rgba(0,216,255,0.8)]">3 CLÍNICAS POR MES</span> PARA TRABAJAR CON NOSOTROS
          </p>
        </motion.div>
      </motion.div>

      {/* Central Content Area - Flexible height to fit screen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 w-full flex-1 flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="text-center px-6 mb-2 max-w-[320px]">
          <p className="text-[10px] font-medium text-zinc-400 leading-tight">
            Esta evaluación toma menos de <span className="text-[#00D8FF] font-bold">90 segundos</span>. <br/>
            Sé honesto: si tu clínica no califica, te lo decimos al final.
          </p>
        </div>
        <div className="w-full flex-1 flex items-center justify-center px-2 pb-2">
          <iframe 
            src="https://link.markgrowth.pro/widget/survey/86QwFQtDttKxrTz0yHWh" 
            style={{ border: 'none', width: '100%', height: '100%' }} 
            scrolling="yes" 
            id="86QwFQtDttKxrTz0yHWh" 
            title="survey"
          />
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="w-full py-4 z-20 pointer-events-none border-t border-white/5"
      >
        <div className="text-[8px] uppercase tracking-widest text-zinc-500 text-center px-4 leading-loose">
          Iconic Group © 2026 · Aviso de Privacidad · Términos de Servicio
        </div>
      </motion.div>
    </main>
  );
}
