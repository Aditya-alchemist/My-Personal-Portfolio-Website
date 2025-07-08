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
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Greeting Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-[#00d4ff] font-mono mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight break-words"
        >
          <span className="text-white">Aditya</span>{" "}
          <span className="text-[#00d4ff]">Mishra</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8 min-h-[3rem] flex items-center justify-center"
        >
          <span className="typing-text break-words text-center px-2">{typingText}</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed px-2"
        >
          Blockchain developer specializing in DeFi protocols, smart contracts,
          and Web3 infrastructure. Focused on building reliable, secure, and
          user-centric blockchain applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <Button
            onClick={handleViewWork}
            className="bg-[#00d4ff] text-[#0a0a0a] px-6 sm:px-8 py-3 hover:bg-[#00d4ff]/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            View My Work
          </Button>
          <a
            href="https://drive.google.com/file/d/1t3BDhIV_ns31rIDZzKfD08HsiAMI-JAc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              className="border-[#00d4ff] text-[#00d4ff] px-6 sm:px-8 py-3 hover:bg-[#00d4ff] hover:text-[#0a0a0a] transition-all duration-300 w-full"
            >
              Resume
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Left Social Links - Brittany Chiang Style */}
      <div className="fixed left-4 lg:left-10 bottom-0 z-40 hidden lg:block">
        <div className="flex flex-col items-center">
          <div className="flex flex-col space-y-5 mb-8">
            <a
              href="https://github.com/Aditya-alchemist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://x.com/Adityaalchemist?t=snsq45voDbhQVn6oe_UcWw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-kumar-mishra-alchemy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/aditya_41205/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
          <div className="w-px h-24 bg-gray-400/50"></div>
        </div>
      </div>

      {/* Right Email - Brittany Chiang Style */}
      <div className="fixed right-4 lg:right-10 bottom-0 z-40 hidden lg:block">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <a
              href="mailto:adityakumar41205@gmail.com"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 transform hover:-translate-y-1 font-mono text-sm tracking-widest"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed'
              }}
            >
              adityakumar41205@gmail.com
            </a>
          </div>
          <div className="w-px h-24 bg-gray-400/50"></div>
        </div>
      </div>
    </section>
  );
}
