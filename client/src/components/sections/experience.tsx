import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((index + 1) % experiences.length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((index - 1 + experiences.length) % experiences.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(experiences.length - 1);
    }
  };

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

  const activeExperience = experiences[activeIndex];

  return (
    <section id="experience" className="min-h-screen py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-3xl text-[#66ffe5]">02.</span>
          <h2 className="text-4xl font-bold text-white">Where I've Worked</h2>
          <div className="hidden md:block h-px flex-1 bg-white/10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-[240px_minmax(0,1fr)]"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-white/15 md:block" />

            <div className="mb-6 flex gap-2 overflow-x-auto pb-2 md:hidden">
              {experiences.map((exp, index) => (
                <button
                  key={`mobile-${exp.company}-${index}`}
                  onClick={() => setActiveIndex(index)}
                  className={`whitespace-nowrap rounded-md border px-3 py-2 font-mono text-sm transition-colors ${
                    activeIndex === index
                      ? "border-[#66ffe5] bg-[#1a1a1a] text-[#66ffe5]"
                      : "border-white/10 text-[#9da9c1] hover:text-[#66ffe5]"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            <div className="hidden md:block" role="tablist" aria-label="Work experience">
              {experiences.map((exp, index) => (
                <button
                  key={`${exp.company}-${index}`}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  tabIndex={activeIndex === index ? 0 : -1}
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-controls="experience-panel"
                  className={`relative w-full text-left px-5 py-3 font-mono text-lg transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#66ffe5] ${
                    activeIndex === index
                      ? "text-[#66ffe5] bg-[#1a1a1a]"
                      : "text-[#7e90b0] hover:text-[#66ffe5] hover:bg-white/5"
                  }`}
                >
                  {activeIndex === index && (
                    <motion.span
                      layoutId="experience-active-rail"
                      className="absolute left-0 top-0 h-full w-px bg-[#66ffe5]"
                      transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    />
                  )}
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          <div className="min-w-0" id="experience-panel" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeExperience.company}-${activeIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl font-semibold text-white">
                    {activeExperience.title} <span className="text-[#66ffe5]">@ {activeExperience.company}</span>
                  </h3>
                  <span className="font-mono text-[#66ffe5]">{activeExperience.period}</span>
                </div>

                <ul className="space-y-3 text-base leading-relaxed text-gray-400 md:text-lg">
                  {activeExperience.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <i className="fas fa-caret-right mr-4 mt-2 text-sm text-[#66ffe5]"></i>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
