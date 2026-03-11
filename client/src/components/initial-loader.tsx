import { motion } from "framer-motion";

export default function InitialLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      {/* subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(102,255,229,0.07),_transparent_60%)]" />

      {/* Logo + bar, centered */}
      <div className="flex flex-col items-center gap-10">

        {/* Hex + letter */}
        <div className="relative h-28 w-28">
          <svg viewBox="0 0 120 120" className="h-full w-full">
            {/* filled backdrop — animates in */}
            <motion.path
              d="M60 10 L98 32 L98 78 L60 100 L22 78 L22 32 Z"
              fill="rgba(10,10,10,0.9)"
              stroke="rgba(102,255,229,0.18)"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* stroke draw */}
            <motion.path
              d="M60 10 L98 32 L98 78 L60 100 L22 78 L22 32 Z"
              fill="none"
              stroke="#66ffe5"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: [0.645, 0.045, 0.355, 1] }}
            />
          </svg>

          {/* Letter A — fades in after stroke draws */}
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-5xl font-semibold text-[#66ffe5]"
            style={{
              fontFamily: "'Fira Code', monospace",
              textShadow: "0 0 16px rgba(102,255,229,0.7)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
          >
            A
          </motion.span>
        </div>

        {/* Loading bar */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-px w-36 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full w-1/3 rounded-full bg-gradient-to-r from-transparent via-[#66ffe5] to-transparent"
              animate={{ x: ["-150%", "350%"] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.15 }}
            />
          </div>
          <motion.p
            className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#66ffe5]/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Loading
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}