import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function About() {
  const technologies = [
    "Solidity",
    "Web3.js", 
    "React",
    "Node.js",
    "Hardhat",
    "IPFS",
    "TypeScript",
    "Ethereum",
    "Polygon",
    "Chainlink"
  ];

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-number">01. About Me</div>
        <h2 className="text-4xl font-bold mb-12 text-white">About Me</h2>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              Hello! I'm Alex, a passionate blockchain developer who enjoys creating things that live on 
              the decentralized web. My interest in blockchain development started back in 2017 
              when I decided to try building my first smart contract — turns out 
              hacking together a custom DeFi protocol taught me a lot about 
              Solidity & Web3!
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Fast-forward to today, and I've had the privilege of working at{" "}
              <span className="text-[#00d4ff]">a fintech startup</span>, <span className="text-[#00d4ff]">a DeFi protocol</span>, <span className="text-[#00d4ff]">a huge NFT marketplace</span>, and{" "}
              <span className="text-[#00d4ff]">a blockchain consultancy</span>. My main focus these days is building 
              accessible, secure decentralized applications and smart contracts at{" "}
              <span className="text-[#00d4ff]">CryptoFinance</span> for a variety of clients.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I also recently <span className="text-[#00d4ff]">launched a DeFi course</span> that covers everything you need 
              to build a decentralized exchange with Solidity & React.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>
            <div className="grid grid-cols-2 gap-2 font-mono text-sm">
              {technologies.map((tech) => (
                <div key={tech} className="flex items-center text-gray-400">
                  <span className="text-[#00d4ff] mr-2">▹</span>
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Professional developer portrait" 
                className="w-full h-80 rounded-lg object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10" 
              />
              <div className="absolute inset-0 bg-[#00d4ff]/20 rounded-lg group-hover:bg-transparent transition-all duration-300"></div>
              <div className="absolute inset-0 border-2 border-[#00d4ff] rounded-lg translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
