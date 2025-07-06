import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import WalletConnect from "./wallet-connect";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { href: "#about", label: "About", number: "01" },
    { href: "#experience", label: "Experience", number: "02" },
    { href: "#projects", label: "Projects", number: "03" },
    { href: "#contact", label: "Contact", number: "04" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <motion.a 
              href="#" 
              className="relative group"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-16 h-16 flex items-center justify-center">
                {/* Dark outer container with blockchain-inspired design */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-lg"
                  style={{
                    clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0 1px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.8)",
                      "0 0 0 2px rgba(0, 212, 255, 0.4), inset 0 0 30px rgba(0, 0, 0, 0.9)",
                      "0 0 0 1px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.8)"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                />

                {/* Matrix-style grid overlay */}
                <motion.div 
                  className="absolute inset-2 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "8px 8px"
                  }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                />

                {/* Animated circuit lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64">
                  <motion.path
                    d="M8 32 L24 32 L24 16 L40 16 L40 48 L56 48"
                    stroke="rgba(0, 212, 255, 0.3)"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="4 4"
                    animate={{
                      strokeDashoffset: [0, -8]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear"
                    }}
                  />
                  <motion.path
                    d="M56 32 L40 32 L40 48 L24 48 L24 16 L8 16"
                    stroke="rgba(0, 212, 255, 0.2)"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="2 6"
                    animate={{
                      strokeDashoffset: [0, 8]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "linear"
                    }}
                  />
                </svg>

                {/* Central AM text with dark theme */}
                <motion.div 
                  className="relative z-20 font-bold text-xl tracking-[0.2em]"
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    color: "#00d4ff",
                    textShadow: "0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3)"
                  }}
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3)",
                      "0 0 15px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.5)",
                      "0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3)"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut"
                  }}
                >
                  AM
                </motion.div>

                {/* Dark corner nodes */}
                {[
                  { top: "4px", left: "4px" },
                  { top: "4px", right: "4px" },
                  { bottom: "4px", left: "4px" },
                  { bottom: "4px", right: "4px" }
                ].map((position, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-2 h-2 bg-[#00d4ff] rounded-full"
                    style={position}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                {/* Scanning line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d4ff]/20 to-transparent"
                  style={{
                    clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)"
                  }}
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    repeatDelay: 2
                  }}
                />

                {/* Outer glow ring */}
                <motion.div 
                  className="absolute inset-[-2px] rounded-lg border border-[#00d4ff]/30"
                  style={{
                    clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)"
                  }}
                  animate={{
                    borderColor: [
                      "rgba(0, 212, 255, 0.2)",
                      "rgba(0, 212, 255, 0.6)",
                      "rgba(0, 212, 255, 0.2)"
                    ],
                    filter: [
                      "drop-shadow(0 0 5px rgba(0, 212, 255, 0.3))",
                      "drop-shadow(0 0 15px rgba(0, 212, 255, 0.6))",
                      "drop-shadow(0 0 5px rgba(0, 212, 255, 0.3))"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />

                {/* Hover state overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100"
                  style={{
                    clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.a>
          </div>
          
          <div className="flex items-center space-x-6">
            {!isMobile && (
              <div className="hidden md:flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 text-sm"
                  >
                    <span className="text-[#00d4ff] font-mono">{item.number}.</span> {item.label}
                  </button>
                ))}
                <Link href="/archive" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 text-sm">
                  <span className="text-[#00d4ff] font-mono">05.</span> Archive
                </Link>
              </div>
            )}
            
            <div className="flex items-center">
              {isMobile && (
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-400 hover:text-[#00d4ff] md:hidden mr-4"
                >
                  <i className="fas fa-bars"></i>
                </button>
              )}
              <WalletConnect />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
              >
                <span className="text-[#00d4ff] font-mono">{item.number}.</span> {item.label}
              </button>
            ))}
            <Link href="/archive" className="block w-full text-left px-3 py-2 text-gray-400 hover:text-[#00d4ff] transition-colors duration-300">
              <span className="text-[#00d4ff] font-mono">05.</span> Archive
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
