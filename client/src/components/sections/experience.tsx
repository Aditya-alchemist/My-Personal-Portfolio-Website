import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
  title: "Product Intern",
  company: "XO Market",
  period: "2025 August - 2025 October",
  achievements: [
    "Built Discord RAG Expert Chatbot integrating AI with live blockchain queries for real-time market data from XO Market testnet",
    "Developed intelligent Q&A system using Pinecone vector database and OpenAI API with proper citation support for community assistance",
    "Created LS-LMSR simulator demonstrating adaptive automated market maker algorithm with dynamic liquidity adjustment based on trade volume",
    "Built Deek mini-game using React to gamify prediction market education and drive community engagement through interactive gameplay",
  ],
},{
  title: "Blockchain Lead",
  company: "GeeksforGeeks KIIT",
  period: "2025 - present",
  achievements: [
    "Built centralized crypto arbitrage bot tracking multi-exchange spreads (Binance, OKX) with automated execution logic",
    "Developed decentralized messaging app using XMTP v3 with E2E encryption, group chats, and IPFS-based file sharing",
    "Shipped AI + Web3 apps: emotion-to-NFT minting (OpenCV + Solidity), AI-assisted dApp agents, and RAG-powered on-chain assistants",
    "Created full-stack Web3 projects including NFT marketplace and StarkNet dApps with ERC-721 and IPFS integration",
     "Led blockchain workshops and technical sessions, mentoring students on Web3 development, smart contract security, and DeFi protocols",
  ],
}
,
    {
      title: "Freelancer",
      company: "Starknet Arcade",
      period: "2025 may  - 2025 june",
      achievements: [
        "Built fully on-chain games on StarkNet using VRF and Cartridge controllers.",
        "Developed game logic in Cairo leveraging StarkNet’s provable computation and integrated verifiable randomness (VRF) for unpredictable outcomes",
        " Used Cartridge controllers to implement session keys and enable gasless transactions through account abstraction",
        "Focused on secure, composable, and user-friendly on-chain game mechanics",
      ],
    },
    {
      title: "Blockchain Developer",
      company: "GeeksforGeeks KIIT",
      period: "2024 - 2025",
      achievements: [
        "Built and launched projects like  NFT marketplace and Daap on StarkNet ",
        "Developed ERC-721 and upgradeable smart contracts ",
        "Integrated with IPFS for decentralized metadata storage",
        "Optimized gas usage, reducing transaction costs by 40%",
      ],
    },
    
  ];

  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-white">Where I've Worked</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-xl p-8 hover:bg-[#00d4ff]/5 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                <span className="text-[#00d4ff] font-mono">{exp.period}</span>
              </div>
              <div className="text-[#00d4ff] mb-4">@ {exp.company}</div>
              <ul className="space-y-2 text-gray-400">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <i className="fas fa-chevron-right text-[#39ff14] mr-3 mt-1 text-sm"></i>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
