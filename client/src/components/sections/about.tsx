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
    "DEFI"
  ];

  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-white">About Me</h2>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-400 text-lg leading-relaxed">
              Hello! I'm Aditya, a passionate blockchain developer focused on building decentralized apps with real utility. Since 2023, I’ve been exploring smart contracts, DeFi, and zk tech. In 2025, I dove deep into StarkNet and Cairo, mastering zk-native dApps, NFT bridging, and full-stack development with Cairo contracts, custom frontends, and StarkNet.js integrations across complex Web3 projects.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
             Fast-forward to today, and I've had the privilege of working as a{" "}
<span className="text-[#00d4ff]">freelance Starknet developer</span>, a{" "}
<span className="text-[#00d4ff]">Solidity developer at GeeksforGeeks KIIT</span>, collaborated on{" "}
<span className="text-[#00d4ff]">DeFi protocols</span>, and contributed to{" "}
<span className="text-[#00d4ff]">NFT tooling</span> and{" "}
<span className="text-[#00d4ff]">zk dApps</span>. My main focus these days is building accessible, secure decentralized applications and smart contracts using{" "}
<span className="text-[#00d4ff]">StarkNet</span>,{" "}
<span className="text-[#00d4ff]">Cairo</span>, and{" "}
<span className="text-[#00d4ff]">Solidity</span> across various ecosystems.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
  I also recently <span className="text-[#00d4ff]">started writing technical blogs</span> for a publication on{" "}
  <span className="text-[#00d4ff]">Medium</span> and <span className="text-[#00d4ff]">Dev.to</span>, sharing insights on smart contracts, zk tech, and full-stack blockchain development.
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
                src="https://gateway.pinata.cloud/ipfs/bafkreiaqwdy5f3sdqutokssqlman4imzinygw37ysafwd44neu27usdps4"
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
