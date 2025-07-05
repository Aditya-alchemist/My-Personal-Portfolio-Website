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

  const archiveItem = { href: "/archive", label: "Archive", number: "05" };

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
              className="relative"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <motion.div 
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0099cc] opacity-20"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="relative z-10 font-mono text-[#00d4ff] font-bold text-xl"
                  animate={{
                    textShadow: [
                      "0 0 4px #00d4ff",
                      "0 0 8px #00d4ff",
                      "0 0 4px #00d4ff"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }}
                >
                  AC
                </motion.div>
                <motion.div 
                  className="absolute inset-0 rounded-lg border border-[#00d4ff]/30"
                  animate={{
                    borderColor: [
                      "rgba(0, 212, 255, 0.3)",
                      "rgba(0, 212, 255, 0.6)",
                      "rgba(0, 212, 255, 0.3)"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }}
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
