import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Projects() {
  const featuredProject = {
    title: "CryptoVault DeFi Protocol",
    description: "A minimal, secure yield farming protocol for multiple blockchains. Built with advanced liquidation mechanisms and cross-chain compatibility. Available on Ethereum, Polygon, and Arbitrum networks.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Solidity", "React", "Web3.js", "Node.js", "Hardhat"],
    alt: "DeFi Protocol Dashboard"
  };

  const otherProjects = [
    {
      title: "Cross-Chain NFT Bridge",
      description: "Building a secure bridge protocol for transferring NFTs between different blockchain networks with minimal fees.",
      tags: ["Solidity", "TypeScript", "Chainlink"]
    },
    {
      title: "DAO Governance Suite",
      description: "A comprehensive governance platform for DAOs with proposal creation, voting, and treasury management features.",
      tags: ["Solidity", "Next.js", "IPFS"]
    },
    {
      title: "Flash Loan Arbitrage Bot",
      description: "Automated trading system that identifies arbitrage opportunities across DEXs using flash loans and MEV protection.",
      tags: ["Solidity", "Python", "Uniswap"]
    },
    {
      title: "Layer 2 Scaling Solution",
      description: "Custom optimistic rollup implementation that reduces transaction costs by 95% while maintaining security.",
      tags: ["Rust", "Solidity", "Rollup"]
    },
    {
      title: "NFT Marketplace Analytics",
      description: "Real-time analytics dashboard for NFT trading data with price predictions and market trend analysis.",
      tags: ["React", "GraphQL", "Web3.js"]
    },
    {
      title: "Decentralized Identity System",
      description: "Self-sovereign identity solution using zero-knowledge proofs for privacy-preserving authentication.",
      tags: ["Solidity", "ZK-SNARKs", "Node.js"]
    }
  ];

  const tagColors: Record<string, string> = {
    "Solidity": "bg-[#00d4ff]/20 text-[#00d4ff]",
    "React": "bg-[#39ff14]/20 text-[#39ff14]",
    "Web3.js": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "Node.js": "bg-[#39ff14]/20 text-[#39ff14]",
    "Hardhat": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "TypeScript": "bg-[#39ff14]/20 text-[#39ff14]",
    "Chainlink": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "Next.js": "bg-[#39ff14]/20 text-[#39ff14]",
    "IPFS": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "Python": "bg-[#39ff14]/20 text-[#39ff14]",
    "Uniswap": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "Rust": "bg-[#39ff14]/20 text-[#39ff14]",
    "Rollup": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "GraphQL": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "ZK-SNARKs": "bg-[#00d4ff]/20 text-[#00d4ff]"
  };

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-number">03. Some Things I've Built</div>
        <h2 className="text-4xl font-bold mb-12 text-white">Some Things I've Built</h2>
        
        {/* Featured Project */}
        <motion.div 
          className="mb-20 grid lg:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="order-2 lg:order-1">
            <div className="text-[#00d4ff] text-sm font-mono mb-2">Featured Project</div>
            <h3 className="text-2xl font-bold text-white mb-4">{featuredProject.title}</h3>
            <div className="glassmorphism rounded-lg p-6 bg-[#1a1a1a] border border-white/10">
              <p className="text-gray-400 leading-relaxed">
                {featuredProject.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
              {featuredProject.tags.map((tag) => (
                <span 
                  key={tag}
                  className={`text-xs px-2 py-1 rounded font-mono ${tagColors[tag] || 'bg-gray-600 text-gray-200'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors duration-300"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="#" 
                className="text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors duration-300"
              >
                <i className="fas fa-external-link-alt text-xl"></i>
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.alt}
                className="w-full h-80 object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-300" 
              />
              <div className="absolute inset-0 bg-[#00d4ff]/20 rounded-lg group-hover:bg-transparent transition-all duration-300"></div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Noteworthy Projects</h3>
          <div className="text-center mb-8">
            <a 
              href="#" 
              className="text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors duration-300 font-mono text-sm"
            >
              view the archive
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glassmorphism rounded-lg p-6 hover:bg-[#00d4ff]/5 transition-all duration-300 group border border-white/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[#00d4ff] text-3xl">
                    <i className="fas fa-folder"></i>
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs text-gray-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
