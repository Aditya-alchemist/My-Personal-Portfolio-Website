import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function About() {
  const technologies = [
    "Solidity",
    "Ethers.js", 
    "React Js",
    "Cairo",
    "Foundry",
    "IPFS",
    "Starknet",
    "Ethereum",
    "JavaScript",
    "Chainlink",
    "Zkrollups",
    "DEFI",
    "AI"
  ];

  return (
    <section id="about" className="min-h-screen py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-3xl text-[#66ffe5]">01.</span>
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <div className="hidden h-px flex-1 bg-white/10 md:block" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            {/* Animated content sections */}
            <motion.p 
              className="text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
             Hello! I'm Aditya, a blockchain developer building decentralized applications at the intersection of AI, DeFi, and zero-knowledge technology. Since 2023, I've specialized in full-stack Web3 development—from Cairo smart contracts on StarkNet to production-ready dApps with custom frontends, encrypted messaging protocols, and AI-powered on-chain systems. I focus on shipping real utility: arbitrage bots, decentralized communication infrastructure, interactive prediction markets, and zk-native applications that push the boundaries of what's possible on-chain.
            </motion.p>

            <motion.p 
              className="text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Fast-forward to today, and I've had the privilege of working as a{" "}
              <span className="text-[#00d4ff]">freelance Starknet developer</span>, a{" "}
              <span className="text-[#00d4ff]">Solidity developer at GeeksforGeeks KIIT</span>, collaborated on{" "}
              <span className="text-[#00d4ff]">DeFi protocols</span>, and contributed to{" "}
              <span className="text-[#00d4ff]">NFT tooling</span> and{" "}
              <span className="text-[#00d4ff]">zk dApps</span>. My main focus these days is building accessible, secure decentralized applications and smart contracts using{" "}
              <span className="text-[#00d4ff]">StarkNet</span>,{" "}
              <span className="text-[#00d4ff]">Cairo</span>, and{" "}
              <span className="text-[#00d4ff]">Solidity</span> across various ecosystems.
            </motion.p>

            <motion.p 
              className="text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I also recently <span className="text-[#00d4ff]">started writing technical blogs</span> for a publication on{" "}
              <span className="text-[#00d4ff]">Medium</span> and <span className="text-[#00d4ff]">Dev.to</span>, sharing insights on smart contracts, zk tech, and full-stack blockchain development.
            </motion.p>

            <motion.p 
              className="text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Here are a few technologies I've been working with recently:
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 gap-2 font-mono text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              {technologies.map((tech, index) => (
                <motion.div 
                  key={tech} 
                  className="flex items-center text-gray-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-[#00d4ff] mr-2">▹</span>
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Photo wrapper with offset border accent (Brittany Chiang style) */}
            <div className="relative" style={{ paddingRight: "20px", paddingBottom: "20px" }}>
              <img 
                src="https://gateway.pinata.cloud/ipfs/bafkreiaqwdy5f3sdqutokssqlman4imzinygw37ysafwd44neu27usdps4"
                alt="Professional developer portrait" 
                className="w-full rounded-lg object-cover relative z-10 transition-all duration-500 grayscale hover:grayscale-0 hover:translate-x-[-4px] hover:translate-y-[-4px]" 
                style={{ aspectRatio: "4/5", objectPosition: "center top" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-[calc(100%-20px)] h-[calc(100%-20px)] rounded-lg border-2 border-[#66ffe5] z-0"
                animate={{ opacity: [0.55, 0.85, 0.55] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
