import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [typingText, setTypingText] = useState("");
  const fullText = "I build decentralized applications for the future";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern developer workspace with multiple monitors" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Alex</span>
          <span className="text-[#00d4ff]">Chen</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl text-gray-400 mb-8 h-12"
        >
          <span className="typing-text">{typingText}</span>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Blockchain developer specializing in DeFi protocols, smart contracts, and Web3 infrastructure. 
          Building the next generation of decentralized applications with cutting-edge technology.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={handleViewWork}
            className="bg-[#00d4ff] text-[#0a0a0a] px-8 py-3 hover:bg-[#00d4ff]/90 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            className="border-[#00d4ff] text-[#00d4ff] px-8 py-3 hover:bg-[#00d4ff] hover:text-[#0a0a0a] transition-all duration-300"
          >
            Resume
          </Button>
        </motion.div>
      </div>
      
      {/* Side Social Links */}
      <div className="fixed left-10 bottom-0 z-40 hidden lg:flex flex-col items-center space-y-6">
        <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 hover:-translate-y-1 transform">
          <i className="fab fa-github text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 hover:-translate-y-1 transform">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 hover:-translate-y-1 transform">
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 hover:-translate-y-1 transform">
          <i className="fab fa-discord text-xl"></i>
        </a>
        <div className="w-px h-24 bg-gray-400/30"></div>
      </div>
      
      {/* Side Email */}
      <div className="fixed right-10 bottom-0 z-40 hidden lg:flex flex-col items-center space-y-6">
        <a 
          href="mailto:alex@blockchain.dev" 
          className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300 hover:-translate-y-1 transform rotate-90 font-mono text-sm"
        >
          alex@blockchain.dev
        </a>
        <div className="w-px h-24 bg-gray-400/30"></div>
      </div>
    </section>
  );
}
