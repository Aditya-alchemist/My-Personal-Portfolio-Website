import { motion } from "framer-motion";
import { Link } from "wouter";

const archiveProjects = [
 {
  year: "2025",
  title: "CEX Arbitrage Bot",
  company: "Personal",
  builtWith: ["Node.js", "TypeScript", "WebSocket", "Binance API", "OKX API", "Express"],
  github: "https://github.com/Aditya-alchemist/Centralized-Arbitrage-bot",
  live: null,
  archived: false
}
, {
  year: "2025",
  title: "Decentralized Messaging App",
  company: "Personal",
  builtWith: ["XMTP v3", "React", "TypeScript", "WalletConnect", "Pinata IPFS", "MLS Encryption"],
  github: "https://github.com/Aditya-alchemist/XMTP-Telegram",
  live: "https://xmtp-telegram.vercel.app/",
  archived: false
},{
  year: "2025",
  title: "AI Mood Minter",
  company: "Personal",
  builtWith: ["Solidity", "React", "OpenCV", "Python", "Pinata IPFS", "Ethers.js"],
  github: "https://github.com/Aditya-alchemist/Ai-nft-mood-minter",
  live: "https://ai-nft-mood-minter.vercel.app/",
  archived: false
}
,{
    year: "2025",
    title: "RetroSwap Dex",
    company: "Personal",
    builtWith: ["Solidity", "React", "Ether.js", "UniswapV3", "Foundry","Typescript"],
    github: "https://github.com/Aditya-alchemist/Retro-Swap",
    live: "https://retroswap.netlify.app/",
    archived: false
  },
  {
    year: "2025",
    title: " Custom Uniswap v2 ",
    company: "Personal",
    builtWith: ["Solidity", "Foundry", "DEFI", "DEX"],
    github: "https://github.com/Aditya-alchemist/Custom-UniswapV2",
    live: null,
    archived: false
  },
  {
    year: "2025",
    title: "PropertyNFT Marketplace ",
    company: "Personal",
    builtWith: ["React", "Ethereum", "IPFS", "Solidity","Foundry","Ether.js","Chainlink"],
    github: "https://github.com/Aditya-alchemist/RealEstate-Chromium-hackathon",
    live: "https://real-estate-chromium-hackathon.vercel.app/",
    archived: false
  },
  {
    year: "2025",
    title: "NFT Bridge: Ethereum ↔ StarkNet",
    company: "Personal",
    builtWith: ["Solidity", "Cairo", "Ethereum", "Starknet"],
    github: "https://github.com/Aditya-alchemist/Bridging-NFT-L2-L1",
    live: null,
    archived: false
  },
 
  {
    year: "2025",
    title: "Starknet Merkle Verification",
    company: "Personal",
    builtWith: ["Cairo", "Starknet", "Merkle Tress", "Poseidon hash"],
    github: "https://github.com/Aditya-alchemist/Merkle-Verification-Starknet",
    live: null,
    archived: false
  },
  {
    year: "2025",
    title: "StarkTweet",
    company: "Personal",
    builtWith: ["Cairo", "Starknet.js", "Starknet", "IPFS", "React","Pinata"],
    github: "https://github.com/Aditya-alchemist/StarkTweet",
    live: "https://stark-tweet.vercel.app/",
    archived: false
  },
  {
    year: "2025",
    title: "OmniFinance",
    company: "GeeksforGeeks KIIT",
    builtWith: ["DEFI", "Solidity", "Foundry"],
    github: "https://github.com/Aditya-alchemist/Omni-Finance",
    live: null,
    archived: false
  },
  {
    year: "2025",
    title: "Upgradeble Smart Contract",
    company: "GeeksforGeeks KIIT",
    builtWith: ["Solidity", "Foundry",  "OpenZeppelin"],
    github: "https://github.com/Aditya-alchemist/Upgradeable-smart-contracts",
    live: null,
    archived: false
  },
  {
    year: "2025",
    title: "Merkle Airdrops",
    company: "Upstatement",
    builtWith: ["Solidity", "Foundry", "OpenZeppelin"],
    github: "https://github.com/Aditya-alchemist/Merkle-Airdrops",
    live: null,
    archived: false
  },
  {
    year: "2025",
    title: "Cross-Chain Rebase Token",
    company: "Personal",
    builtWith: ["Solidity", "Foundry", "Chainlink", "DEFI"],
    github: "https://github.com/Aditya-alchemist/Crosschain-Rebase-token",
    live: null,
    archived: false
  },
  {
    year: "2025",
    title: "Decentralized StableCoin",
    company: "personal",
    builtWith: ["Solidity", "Chainlink", "DEFI", "Foundry"],
    github: "https://github.com/Aditya-alchemist/Decentralized-Stablecoin-Protocol",
    live: null,
    archived: false
  },
  {
    year: "2025",
    title: "NFT Carbon Credits",
    company: "Bizthon Hackathon",
    builtWith: ["Solidity", "React", "IPFS", "Ether.js"],
    github: "https://github.com/Aditya-alchemist/Paris-blockchain-hackathon",
    live: "https://paris-blockchain-week-frontend.vercel.app/",
    archived: false
  },
  {
    year: "2025",
    title: "Certificate Management System",
    company: "Research ",
    builtWith: ["Solidity", "React", "IPFS", "Ether.js"],
    github: "https://github.com/Aditya-alchemist/Research-project",
    live: "https://research-project-eta.vercel.app/",
    archived: false
  },
   {
    year: "2025",
    title: "NFT ticketing",
    company: "Hyperthon Hackathon ",
    builtWith: ["Solidity", "React", "IPFS", "Ether.js"],
    github: "https://github.com/Aditya-alchemist/GFGKIIT-CRYPTOMA-HyperThon",
    live: "https://gfgkiit-cryptoma-hyperthon.vercel.app/",
    archived: false
  },
  {
    year: "2024",
    title: "NFT Voting",
    company: "GeeksforGeeks KIIT ",
    builtWith: ["Solidity", "React", "IPFS", "Ether.js"],
    github: "https://github.com/Aditya-alchemist/NFT-VOTING-CONTEST",
    live: "https://nft-voting-contest-gojh.vercel.app/",
    archived: false
  }
];

export default function Archive() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <motion.button
            className="flex items-center space-x-2 text-[#00d4ff] hover:text-white transition-colors"
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <i className="fas fa-arrow-left"></i>
            <span>Aditya Mishra</span>
          </motion.button>
        </Link>
      </div>

      {/* Left Social Links - Brittany Chiang Style */}
      <div className="fixed left-10 bottom-0 z-40 hidden lg:block">
        <div className="flex flex-col items-center">
          <div className="flex flex-col space-y-5 mb-8">
            <a
              href="https://github.com/Aditya-alchemist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/aditya_41205/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://x.com/Adityaalchemist?t=snsq45voDbhQVn6oe_UcWw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-kumar-mishra-alchemy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 hover:-translate-y-1 transform"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
          <div className="w-px h-24 bg-gray-400/50"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-6">Archive</h1>
          <p className="text-xl text-[#00d4ff] mb-16">
            A big list of things I've worked on
          </p>

          {/* Projects Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-2 text-sm font-medium text-gray-400">Year</th>
                  <th className="text-left py-4 px-2 text-sm font-medium text-gray-400">Title</th>
                  <th className="text-left py-4 px-2 text-sm font-medium text-gray-400 hidden md:table-cell">Made at</th>
                  <th className="text-left py-4 px-2 text-sm font-medium text-gray-400 hidden lg:table-cell">Built with</th>
                  <th className="text-left py-4 px-2 text-sm font-medium text-gray-400">Link</th>
                </tr>
              </thead>
              <tbody>
                {archiveProjects.map((project, index) => (
                  <motion.tr
                    key={index}
                    className="border-b border-gray-800/50 hover:bg-gray-900/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <td className="py-4 px-2 text-[#00d4ff] font-mono text-sm">
                      {project.year}
                    </td>
                    <td className="py-4 px-2 text-white font-medium">
                      {project.title}
                    </td>
                    <td className="py-4 px-2 text-gray-400 text-sm hidden md:table-cell">
                      {project.company}
                    </td>
                    <td className="py-4 px-2 text-gray-400 text-sm hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {project.builtWith.map((tech, techIndex) => (
                          <span key={techIndex} className="inline-block">
                            {tech}
                            {techIndex < project.builtWith.length - 1 && " • "}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-center space-x-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#00d4ff] transition-colors"
                            title="View Source Code"
                          >
                            <i className="fab fa-github text-lg"></i>
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#00d4ff] transition-colors"
                            title="View Live Demo"
                          >
                            <i className="fas fa-external-link-alt text-sm"></i>
                          </a>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              This table includes both personal and professional projects spanning my blockchain development journey.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Email - Brittany Chiang Style */}
      <div className="fixed right-10 bottom-0 z-40 hidden lg:block">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <a
              href="mailto:adityakumar41205@gmail.com"
              className="text-gray-400 hover:text-[#00d4ff] transition-all duration-300 transform hover:-translate-y-1 font-mono text-sm tracking-widest"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'mixed'
              }}
            >
              adityakumar41205@gmail.com
            </a>
          </div>
          <div className="w-px h-24 bg-gray-400/50"></div>
        </div>
      </div>
    </div>
  );
}
