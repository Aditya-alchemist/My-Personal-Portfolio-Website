import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import FloatingCrypto from "@/components/floating-crypto";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export default function Home() {
  const scrollProgress = useScrollProgress();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      
      {/* Floating Crypto Elements */}
      <FloatingCrypto />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </motion.main>
      
      {/* Footer */}
      <footer className="py-12 text-center">
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
