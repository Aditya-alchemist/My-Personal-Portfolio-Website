import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import FloatingCrypto from "@/components/floating-crypto";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import Achievements from "@/components/sections/achievements";
import InitialLoader from "@/components/initial-loader";
import Sidebars from "@/components/sidebars";

export default function Home() {
  const scrollProgress = useScrollProgress();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLoader(false);
      setIsLoaded(true);
    }, 3300);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <AnimatePresence>{showLoader && <InitialLoader />}</AnimatePresence>

      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      
      {/* Floating Crypto Elements */}
      <FloatingCrypto />
      
      {/* Navigation */}
      <Navigation />

      {/* Sidebars – rendered outside motion.main so opacity:0 on main doesn't hide them */}
      <Sidebars />
      
      {/* Main Content */}
      <motion.main
        className="pt-20 md:pt-24 lg:px-14 xl:px-16 2xl:px-0"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: isLoaded ? 1 : 0, filter: isLoaded ? "blur(0px)" : "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </motion.main>
      
      {/* Footer */}
      <footer className="py-12 text-center lg:px-14 xl:px-16 2xl:px-0">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-400 mb-4">
            Built with passion for decentralization and a love for clean code.
          </p>
          <p className="text-gray-400 font-mono text-sm">
            © 2025 Aditya kumar Mishra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
