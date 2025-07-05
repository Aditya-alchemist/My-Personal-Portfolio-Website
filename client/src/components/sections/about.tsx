import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function About() {
  const technologies = [
    { name: "Solidity", icon: "fab fa-ethereum", color: "#00d4ff" },
    { name: "Web3.js", icon: "fab fa-js", color: "#39ff14" },
    { name: "React", icon: "fab fa-react", color: "#00d4ff" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#39ff14" },
    { name: "Hardhat", icon: "fas fa-cube", color: "#8b5cf6" },
    { name: "IPFS", icon: "fas fa-database", color: "#00d4ff" },
  ];

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-number">01. About</div>
        <h2 className="text-4xl font-bold mb-12 text-white">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              Hello! I'm Alex, a passionate blockchain developer with over 5 years of experience in the Web3 space. 
              I specialize in building secure, scalable decentralized applications and smart contracts that power the future of finance.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My journey started with Bitcoin in 2017, and since then I've been deep in the rabbit hole of blockchain technology. 
              I've worked on everything from DeFi protocols to NFT marketplaces, and I'm always excited to tackle new challenges in this rapidly evolving space.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not coding, you can find me contributing to open source projects, writing technical articles, 
              or exploring the latest developments in Layer 2 solutions and cross-chain protocols.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                alt="Professional developer portrait" 
                className="w-64 h-64 rounded-lg mx-auto object-cover" 
              />
              <div className="absolute inset-0 bg-[#00d4ff]/20 rounded-lg"></div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Technologies I work with:</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.05 }}
                    className="glassmorphism rounded-lg p-3 text-center hover:bg-[#00d4ff]/20 transition-colors duration-300"
                  >
                    <i 
                      className={`${tech.icon} mb-2`}
                      style={{ color: tech.color }}
                    ></i>
                    <div className="text-sm text-gray-400">{tech.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
