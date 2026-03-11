import { motion } from "framer-motion";

export default function Sidebars() {
  return (
    <>
      {/* Left Social Links – fixed, always visible */}
      <motion.div
        className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 3.5 }}
      >
        <div className="flex flex-col space-y-6 mb-6">
          <a
            href="https://github.com/Aditya-alchemist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#66ffe5] transition-all duration-300 hover:-translate-y-1 transform"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
          <a
            href="https://x.com/Adityaalchemist?t=snsq45voDbhQVn6oe_UcWw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#66ffe5] transition-all duration-300 hover:-translate-y-1 transform"
          >
            <i className="fab fa-twitter text-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-kumar-mishra-alchemy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#66ffe5] transition-all duration-300 hover:-translate-y-1 transform"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/aditya_41205/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#66ffe5] transition-all duration-300 hover:-translate-y-1 transform"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
        </div>
        <div className="w-px h-24 bg-gray-400/40"></div>
      </motion.div>

      {/* Right Email – fixed, always visible */}
      <motion.div
        className="fixed right-6 bottom-0 z-40 hidden lg:flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 3.6 }}
      >
        <div className="mb-6">
          <a
            href="mailto:adityakumar41205@gmail.com"
            className="text-gray-400 hover:text-[#66ffe5] transition-all duration-300 font-mono text-xs tracking-widest"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            adityakumar41205@gmail.com
          </a>
        </div>
        <div className="w-px h-24 bg-gray-400/40"></div>
      </motion.div>
    </>
  );
}
