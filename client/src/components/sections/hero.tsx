import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [typingText, setTypingText] = useState("");
  const fullText = "I build decentralized applications for the future";
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.3,
        ease: [0.645, 0.045, 0.355, 1],
      },
    }),
  };

  useEffect(() => {
    // Delay typing until after loader finishes (3.3s)
    const startDelay = setTimeout(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setTypingText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 80);
      return () => clearInterval(timer);
    }, 3300);

    return () => clearTimeout(startDelay);
  }, []);

  const handleViewWork = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-visible">
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Greeting Text */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl text-[#00d4ff] font-mono mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight break-words"
        >
          <span className="text-white">Aditya</span>{" "}
          <span className="text-[#00d4ff]">Mishra</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.3}
          variants={fadeUp}
          className="mb-8 min-h-[3rem] flex items-center justify-center"
        >
          <span
            className="
              typing-text
              break-words
              whitespace-normal
              text-center
              px-2
              text-lg
              sm:text-2xl
              md:text-3xl
              text-gray-400
              max-w-xs
              sm:max-w-md
              md:max-w-2xl
              w-full
              "
            style={{
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {typingText}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.4}
          variants={fadeUp}
          className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed px-2"
        >
          Blockchain developer specializing in DeFi protocols, smart contracts,
          and Web3 infrastructure. Focused on building reliable, secure, and
          user-centric blockchain applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.5}
          variants={fadeUp}
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
    </section>
  );
}
