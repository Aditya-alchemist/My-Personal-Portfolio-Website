import { motion } from "framer-motion";
import { Link } from "wouter";

const archiveProjects = [
  {
    year: "2024",
    title: "DeFi Yield Optimizer",
    company: "Upstatement",
    builtWith: ["Solidity", "React", "TypeScript", "Web3.js"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2024",
    title: "NFT Marketplace",
    company: "Upstatement",
    builtWith: ["Next.js", "Ethereum", "IPFS", "TailwindCSS"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2023",
    title: "Cross-Chain Bridge",
    company: "Upstatement",
    builtWith: ["Solidity", "Python", "FastAPI", "PostgreSQL"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2023",
    title: "DAO Governance Platform",
    company: "Freelance",
    builtWith: ["React", "Hardhat", "Ethers.js", "Compound"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2023",
    title: "Staking Protocol",
    company: "Upstatement",
    builtWith: ["Solidity", "Vue.js", "Node.js", "MongoDB"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2022",
    title: "Flash Loan Arbitrage Bot",
    company: "Personal",
    builtWith: ["Solidity", "Python", "Uniswap", "Aave"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2022",
    title: "Liquidity Mining Dashboard",
    company: "Upstatement",
    builtWith: ["React", "GraphQL", "The Graph", "Styled Components"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2022",
    title: "Multi-Sig Wallet",
    company: "Freelance",
    builtWith: ["Solidity", "React", "Truffle", "OpenZeppelin"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2021",
    title: "Token Vesting Contract",
    company: "Upstatement",
    builtWith: ["Solidity", "Hardhat", "Ethers.js", "Chainlink"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2021",
    title: "Prediction Market Platform",
    company: "Personal",
    builtWith: ["Solidity", "React", "Web3.js", "Ceramic"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2021",
    title: "Automated Market Maker",
    company: "Upstatement",
    builtWith: ["Solidity", "TypeScript", "Hardhat", "Uniswap V3"],
    link: "#",
    external: true,
    archived: false
  },
  {
    year: "2020",
    title: "Decentralized Exchange",
    company: "Freelance",
    builtWith: ["Solidity", "React", "Redux", "MetaMask"],
    link: "#",
    external: true,
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
            <span>Alex Chen</span>
          </motion.button>
        </Link>
      </div>

      {/* Social Links */}
      <div className="fixed left-4 bottom-4 flex flex-col space-y-4">
        <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
          <i className="fab fa-github text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
          <i className="fab fa-discord text-xl"></i>
        </a>
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
                      <div className="flex items-center space-x-2">
                        <a
                          href={project.link}
                          className="text-gray-400 hover:text-[#00d4ff] transition-colors"
                        >
                          <i className="fab fa-github text-lg"></i>
                        </a>
                        {project.external && (
                          <a
                            href={project.link}
                            className="text-gray-400 hover:text-[#00d4ff] transition-colors"
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

      {/* Vertical Text */}
      <div className="fixed right-4 bottom-4 writing-mode-vertical text-gray-400 text-sm font-mono">
        alexchen.crypto.dev
      </div>
    </div>
  );
}