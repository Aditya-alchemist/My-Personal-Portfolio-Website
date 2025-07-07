import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Projects() {
  const featuredProjects = [
    {
      title: "NFT Ticketing System",
      description:
        "This system redefines event ticketing by leveraging non-tradable NFTs, ensuring security, transparency, and fairness. Built with Solidity smart contracts and React frontend, it prevents ticket scalping and fraud while providing a seamless user experience. The system integrates with IPFS for decentralized metadata storage and uses Foundry for robust testing and deployment.",
      image: "https://gateway.pinata.cloud/ipfs/bafybeigjixcvlk4mu7ucsk4kx2fpuxnyvfqgejuzidwbs2sjhkg6fxzwfe",
      tags: ["Solidity", "React", "Ether.js", "Pinata", "Foundry"],
      alt: "NFT Ticketing System",
      github: "https://github.com/Aditya-alchemist/GFGKIIT-CRYPTOMA-HyperThon",
      live: "https://gfgkiit-cryptoma-hyperthon.vercel.app/"
    },
    {
      title: "Starktweet",
      description:
        "StarkTweet is a fully on-chain, decentralized microblogging platform built on Starknet's Layer 2 solution. Users can post tweets, follow other users, and interact with content while benefiting from Starknet's low transaction costs and high throughput. The platform demonstrates the potential of Layer 2 scaling solutions for social media applications, with all data stored permanently on-chain.",
      image: "https://gateway.pinata.cloud/ipfs/bafkreiaqkl74h2q6xgq3n6gexkmxpyxa74p7sxik2kh7upo5xpig6uahom",
      tags: ["Cairo", "Starknet", "Starknet.js", "Pinata", "React"],
      alt: "Starktweet",
      github: "https://github.com/Aditya-alchemist/StarkTweet",
      live: "https://stark-tweet.vercel.app/"
    },
    {
      title: "Decentralized Stablecoin Protocol",
      description:
        "The DSC Protocol is an algorithmic, overcollateralized stablecoin system designed to maintain price stability through automated mechanisms. Built with Solidity and tested using Foundry, this protocol implements liquidation mechanisms, collateral management, and price feed integration. The system ensures stability through overcollateralization and automated liquidations when positions become undercollateralized.",
      image: "https://gateway.pinata.cloud/ipfs/bafkreidxancpklonc4caosg2hqco7vg74dlrlpit4ymbnxvfbafic4s33q",
      tags: ["Solidity", "DEFI", "Foundry"],
      alt: "Decentralized Stablecoin Protocol",
      github: "https://github.com/Aditya-alchemist/Decentralized-Stablecoin-Protocol",
      live: null
    }
  ];

  const otherProjects = [
    {
      title: "Cross-chain Rebase Token",
      description:
        "The Cross-Chain Rebase Token is an innovative DeFi solution that combines the stability of rebase mechanics with the flexibility of cross-chain functionality. Built on Foundry and powered by Chainlink CCIP, this token system is designed to get interest on deposits while enabling seamless transfers across multiple blockchain networks.",
      tags: ["Solidity", "DEFI", "Foundry"],
      github: "https://github.com/Aditya-alchemist/Crosschain-Rebase-token",
      live: null
    },
    {
      title: "Ethereum ↔ Starknet Token Bridging",
      description:
        "This project implements a canonical token bridge that enables seamless asset transfer between Ethereum mainnet and Starknet's ZK-rollup layer. Users can deposit tokens from Ethereum to access Starknet's faster, cheaper transactions, then withdraw back to Ethereum when needed.",
      tags: ["Starknet", "Solidity", "Cairo"],
      github: "https://github.com/Aditya-alchemist/Bridging-tokens-starknet-Ethereum-L1-L2",
      live: null
    },
    {
      title: "Property NFT Marketplace ",
      description:
        "A comprehensive decentralized marketplace for real estate NFTs built on Ethereum, enabling users to mint, list, buy, and sell property-backed NFTs with integrated USD pricing via Chainlink oracles and CCIP.",
      tags: ["React", "Chainlink", "Ether.js","Solidity","Pinata","IPFS"],
      github: "https://github.com/Aditya-alchemist/RealEstate-Chromium-hackathon",
      live: "https://real-estate-chromium-hackathon.vercel.app/"
    },
    {
      title: "Custom Uniswap V2",
      description:
        "A custom smart contract implementation that interfaces with Uniswap V2 protocol on Ethereum Sepolia testnet, providing simplified token swapping and liquidity provision functionality.",
      tags: ["Solidity", "Foundry", "Uniswap V2"],
      github: "https://github.com/Aditya-alchemist/Custom-UniswapV2",
      live: null
    },
    {
      title: "NFT Voting Contest",
      description:
        "Made a project using foundry,solidity,react and ipfs that mints an nft when image is uploaded to it, people can vote for these minted nfts and the highest number of votes to nft is the winner and the winning amount goes to the winner.",
      tags: ["Solidity", "React", "Pinata", "Ether.js", "IPFS"],
      github: "https://github.com/Aditya-alchemist/NFT-VOTING-CONTEST",
      live: "https://nft-voting-contest-gojh.vercel.app/"
    },
    {
      title: "OmniFinance",
      description:
        "OmniFinance is a decentralized finance (DeFi) protocol that enables users to stake, lend, and borrow funds securely. Built on Ethereum, it features a staking system, a lending-borrowing system, and a liquidation mechanism for risk management. The contract integrates Chainlink price feeds to determine real-time asset valuation and APY calculations.",
      tags: ["Solidity", "DEFI", "Node.js"],
      github: "https://github.com/Aditya-alchemist/Omni-Finance",
      live: null
    }
  ];

  const tagColors: Record<string, string> = {
    Solidity: "bg-[#00d4ff]/20 text-[#00d4ff]",
    React: "bg-[#39ff14]/20 text-[#39ff14]",
    "Ether.js": "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    Pinata: "bg-[#f59e0b]/20 text-[#f59e0b]",
    Foundry: "bg-[#6366f1]/20 text-[#6366f1]",
    Starknet: "bg-[#ec4899]/20 text-[#ec4899]",
    "Starknet.js": "bg-[#0ea5e9]/20 text-[#0ea5e9]",
    Cairo: "bg-[#10b981]/20 text-[#10b981]",
    Chainlink: "bg-[#8b5cf6]/20 text-[#8b5cf6]",
    DEFI: "bg-[#34d399]/20 text-[#34d399]",
    IPFS: "bg-[#3b82f6]/20 text-[#3b82f6]",
    Python: "bg-[#facc15]/20 text-[#facc15]",
    Uniswap: "bg-[#e879f9]/20 text-[#e879f9]",
    Rust: "bg-[#f97316]/20 text-[#f97316]",
    Rollup: "bg-[#a78bfa]/20 text-[#a78bfa]",
    GraphQL: "bg-[#ef4444]/20 text-[#ef4444]",
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
        <div className="section-number">03. Projects</div>
        <h2 className="text-4xl font-bold mb-12 text-white">Some Things I've Built</h2>

        {/* Featured Projects */}
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="mb-20 grid lg:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={`order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
              <div className="text-[#00d4ff] text-sm font-mono mb-2">Featured Project</div>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <div className="glassmorphism rounded-lg p-6 bg-[#1a1a1a] border border-white/10">
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-1 rounded font-mono ${tagColors[tag] || "bg-gray-600 text-gray-200"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href={project.live}
                  className="text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-external-link-alt text-xl"></i>
                </a>
              </div>
            </div>
            <div className={`order-1 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-80 object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-[#00d4ff]/20 rounded-lg group-hover:bg-transparent transition-all duration-300"></div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Noteworthy Projects</h3>
          <div className="text-center mb-8">
            <a href="  /archive" className="text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors duration-300 font-mono text-sm">
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
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-gray-400 hover:text-[#00d4ff] transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-400 font-mono">
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
