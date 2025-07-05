import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Projects() {
  const projects = [
    {
      title: "DeFi Yield Aggregator",
      description: "A protocol that automatically finds the best yield opportunities across multiple DeFi platforms, with automated rebalancing and compound interest strategies.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["Solidity", "React", "Web3.js"],
      alt: "Abstract blockchain network visualization"
    },
    {
      title: "Cross-Chain Bridge",
      description: "Secure bridge protocol enabling seamless asset transfers between Ethereum, Polygon, and Arbitrum with minimal fees and fast confirmation times.",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["Solidity", "Node.js", "Chainlink"],
      alt: "Floating cryptocurrency coins in digital space"
    },
    {
      title: "NFT Minting Platform",
      description: "Complete NFT ecosystem with lazy minting, royalty distribution, and marketplace integration. Supports both ERC-721 and ERC-1155 standards.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["Solidity", "Next.js", "IPFS"],
      alt: "Modern developer workspace with coding environment"
    },
    {
      title: "DAO Governance Platform",
      description: "Decentralized governance system with proposal creation, voting mechanisms, and treasury management. Features quadratic voting and delegation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["Solidity", "TypeScript", "Ethers.js"],
      alt: "Abstract blockchain network with interconnected nodes"
    },
    {
      title: "Flash Loan Arbitrage Bot",
      description: "Automated trading bot that identifies and executes arbitrage opportunities across DEXs using flash loans. Built with advanced MEV protection.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["Solidity", "Python", "Uniswap"],
      alt: "Digital cryptocurrency coins floating in virtual space"
    },
    {
      title: "Layer 2 Scaling Solution",
      description: "Custom Layer 2 solution using optimistic rollups to reduce transaction costs by 95% while maintaining security and decentralization.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      tags: ["Solidity", "Rust", "Rollup"],
      alt: "Abstract representation of blockchain technology"
    }
  ];

  const tagColors = {
    "Solidity": "bg-[#00d4ff]/20 text-[#00d4ff]",
    "React": "bg-[#00d4ff]/20 text-[#00d4ff]",
    "Web3.js": "bg-[#39ff14]/20 text-[#39ff14]",
    "Node.js": "bg-[#39ff14]/20 text-[#39ff14]",
    "Chainlink": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "Next.js": "bg-[#39ff14]/20 text-[#39ff14]",
    "IPFS": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "TypeScript": "bg-[#39ff14]/20 text-[#39ff14]",
    "Ethers.js": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "Python": "bg-[#39ff14]/20 text-[#39ff14]",
    "Uniswap": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    "Rust": "bg-[#39ff14]/20 text-[#39ff14]",
    "Rollup": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
  };

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="section-number">03. Projects</div>
        <h2 className="text-4xl font-bold mb-12 text-white">Some Things I've Built</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism rounded-xl p-6 hover:bg-[#00d4ff]/5 transition-all duration-300 group"
            >
              <div className="mb-4">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="w-full h-48 object-cover rounded-lg" 
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className={`text-xs px-2 py-1 rounded ${tagColors[tag] || 'bg-gray-600 text-gray-200'}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a 
                  href="#" 
                  className="text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors duration-300"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors duration-300 font-mono"
          >
            View All Projects →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
