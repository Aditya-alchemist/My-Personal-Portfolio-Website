import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Projects() {
  const featuredProjects = [
   {
  title: "CEX Arbitrage Bot",
  description:
    "Automated cryptocurrency arbitrage trading bot that monitors real-time price spreads across multiple centralized exchanges (Binance, OKX, KuCoin). The bot identifies profitable arbitrage opportunities by comparing asset prices, calculates transaction costs including fees and slippage, and executes rapid buy-sell cycles to capture profit margins. Built with WebSocket connections for live market data streaming and REST APIs for trade execution, demonstrating advanced understanding of market microstructure and algorithmic trading strategies.",
  image: "https://gateway.pinata.cloud/ipfs/bafkreibwhl2u5ih4c5qn7otroreh5syguugvbbei6z22i4wskliymgi2ra",
  tags: ["Node.js", "WebSocket", "Binance API", "Trading Bot", "REST API"],
  alt: "CEX Arbitrage Bot",
  github: "https://github.com/Aditya-alchemist/Centralized-Arbitrage-bot",
  live: null
}
,
     {
      title: "RetroSwap Dex",
      description:
        "A modern, full-stack decentralized exchange built on Ethereum using Uniswap V3 protocols. RetroSwap enables seamless token swapping and liquidity provision with an intuitive user interface and robust smart contract architecture.",
      image: "https://gateway.pinata.cloud/ipfs/bafybeiezj74m6pnr4kg6agjqgqxyd5pcymj2w4v56zdpaegfzzqyxcp73e",
      tags: ["Solidity", "React", "Ether.js", "UniswapV3", "Foundry","Typescript"],
      alt: "RetroSwap Dex",
      github: "https://github.com/Aditya-alchemist/Retro-Swap",
      live: "https://retroswap.netlify.app/"
    },
   {
  title: "Decentralized Messaging App",
  description:
    "Production-ready decentralized messaging application built on XMTP v3 protocol with Telegram-inspired UI/UX. Features end-to-end encrypted direct messages and group chats using MLS (Messaging Layer Security) protocol, wallet-based authentication with WalletConnect and Coinbase Wallet integration, and decentralized file sharing through Pinata IPFS. Implements push notifications, message persistence, and real-time synchronization across multiple devices. Showcases the future of Web3 communication infrastructure with quantum-resistant encryption and censorship-resistant messaging.",
  image: "https://gateway.pinata.cloud/ipfs/bafkreics4t5lfeyel4djrqmlwcuek2nwjbnott5jxgxu2ygp6meelmuzwa",
  tags: ["XMTP v3", "React", "WalletConnect", "Pinata IPFS", "MLS Encryption"],
  alt: "Decentralized Messaging App",
  github: "https://github.com/Aditya-alchemist/XMTP-Telegram",
  live: "https://xmtp-telegram.vercel.app/" // Update with your actual deployment
}
,
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
      title: "Carbon Credit MarketPlace",
      description:
        "A full-stack climate finance platform that helps farmers onboard carbon projects, generate AI-assisted verification signals, mint credits on-chain, and sell or retire inventory through a transparent marketplace workflow.",
      tags: ["React", "TypeScript", "Solidity", "AI", "MongoDB"],
      github: "https://github.com/Aditya-alchemist/Carbon-Credit-MarketPlace",
      live: null
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
      title: "EduChain",
      description:
        "An academic trust platform with teacher and student dashboards, AI-powered assignment integrity checks, attendance and marks workflows, IPFS evidence storage, and blockchain-backed verification for tamper-evident records.",
      tags: ["React", "TypeScript", "AI", "IPFS", "Solidity"],
      github: "https://github.com/Aditya-alchemist/EduChain",
      live: null
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
    Solidity: "bg-[#00d4ff]/15 text-[#00d4ff]",
    React: "bg-[#39ff14]/15 text-[#39ff14]",
    "Ether.js": "bg-[#8b5cf6]/15 text-[#8b5cf6]",
    Pinata: "bg-[#f59e0b]/15 text-[#f59e0b]",
    Foundry: "bg-[#6366f1]/15 text-[#6366f1]",
    Starknet: "bg-[#ec4899]/15 text-[#ec4899]",
    "Starknet.js": "bg-[#0ea5e9]/15 text-[#0ea5e9]",
    Cairo: "bg-[#10b981]/15 text-[#10b981]",
    Chainlink: "bg-[#a78bfa]/15 text-[#a78bfa]",
    DEFI: "bg-[#34d399]/15 text-[#34d399]",
    IPFS: "bg-[#3b82f6]/15 text-[#3b82f6]",
    Python: "bg-[#facc15]/15 text-[#facc15]",
    TypeScript: "bg-[#60a5fa]/15 text-[#60a5fa]",
    MongoDB: "bg-[#22c55e]/15 text-[#22c55e]",
    AI: "bg-[#fb7185]/15 text-[#fb7185]",
    Sepolia: "bg-[#f97316]/15 text-[#f97316]",
    Uniswap: "bg-[#e879f9]/15 text-[#e879f9]",
    UniswapV3: "bg-[#e879f9]/15 text-[#e879f9]",
    Rust: "bg-[#f97316]/15 text-[#f97316]",
    Rollup: "bg-[#a78bfa]/15 text-[#a78bfa]",
    GraphQL: "bg-[#ef4444]/15 text-[#ef4444]",
    "ZK-SNARKs": "bg-[#00d4ff]/15 text-[#00d4ff]",
    "Node.js": "bg-[#4ade80]/15 text-[#4ade80]",
    WebSocket: "bg-[#fbbf24]/15 text-[#fbbf24]",
    "Binance API": "bg-[#f59e0b]/15 text-[#f59e0b]",
    "Trading Bot": "bg-[#f43f5e]/15 text-[#f43f5e]",
    "REST API": "bg-[#818cf8]/15 text-[#818cf8]",
    "XMTP v3": "bg-[#00d4ff]/15 text-[#00d4ff]",
    WalletConnect: "bg-[#3b82f6]/15 text-[#3b82f6]",
    "Pinata IPFS": "bg-[#3b82f6]/15 text-[#3b82f6]",
    "MLS Encryption": "bg-[#10b981]/15 text-[#10b981]",
    "Uniswap V2": "bg-[#e879f9]/15 text-[#e879f9]",
    "Uniswap V3": "bg-[#e879f9]/15 text-[#e879f9]",
    "GitHub API": "bg-[#94a3b8]/15 text-[#94a3b8]",
    Vue: "bg-[#4ade80]/15 text-[#4ade80]",
    Firebase: "bg-[#fb923c]/15 text-[#fb923c]",
    "Next.js": "bg-[#e2e8f0]/15 text-[#e2e8f0]",
    "Chart.js": "bg-[#f59e0b]/15 text-[#f59e0b]",
  };

  return (
    <section id="projects" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-3xl text-[#66ffe5]">03.</span>
          <h2 className="text-4xl font-bold text-white">Some Things I've Built</h2>
          <div className="hidden h-px flex-1 bg-white/10 md:block" />
        </div>

        {/* Featured Projects */}
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            className="relative mb-24 lg:mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* ── Mobile: simple stacked layout ── */}
            <div className="group lg:hidden">
              <a href={project.live || project.github} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-[220px] w-full rounded-xl object-cover grayscale brightness-[0.55] saturate-0 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:saturate-100"
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-[#0a0a0a]/70 transition-opacity duration-300 group-hover:opacity-0" style={{ mixBlendMode: "screen" }} />
                </div>
              </a>
              <div className="mt-4 rounded-xl border border-[#66ffe5]/25 bg-[#0d0d0d] p-5">
                <p className="mb-1 font-mono text-xs text-[#66ffe5]">Featured Project</p>
                <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-3 text-xs font-mono text-gray-500">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="mt-3 flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#66ffe5] hover:text-white transition-colors">
                    <i className="fab fa-github text-xl" />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#66ffe5] hover:text-white transition-colors">
                    <i className="fas fa-external-link-alt text-xl" />
                  </a>
                )}
              </div>
            </div>

            {/* ── Desktop: v4-style 12-column CSS grid ── */}
            <div
              className="hidden lg:grid items-center"
              style={{ gridTemplateColumns: "repeat(12, 1fr)", gap: "0 10px" }}
            >
              {index % 2 === 0 ? (
                <>
                  {/* Even (0,2…): image LEFT cols 1-7, content RIGHT cols 6-13 — overlap on cols 6-7 */}
                  <motion.a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl"
                    style={{ gridColumn: "1 / 8", gridRow: 1, zIndex: 1 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-[360px] w-full rounded-xl object-cover grayscale brightness-[0.55] saturate-0 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-[1.02]"
                      style={{ mixBlendMode: "multiply" }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-[#0a0a0a]/70 transition-opacity duration-300 group-hover:opacity-0" style={{ mixBlendMode: "screen" }} />
                  </motion.a>

                  <motion.div
                    className="flex flex-col items-end gap-3 text-right"
                    style={{ gridColumn: "6 / 13", gridRow: 1, zIndex: 10 }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.18 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-mono text-sm text-[#66ffe5]">Featured Project</p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="rounded-xl border border-[#66ffe5]/20 bg-[#0d0d0d]/95 p-5 shadow-xl backdrop-blur-sm">
                      <p className="leading-relaxed text-gray-300">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap justify-end gap-2 text-xs font-mono">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`rounded px-2 py-0.5 ${tagColors[tag] ?? "bg-white/5 text-gray-400"}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex justify-end gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#66ffe5] hover:text-white transition-colors">
                          <i className="fab fa-github text-xl" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#66ffe5] hover:text-white transition-colors">
                          <i className="fas fa-external-link-alt text-xl" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Odd (1,3…): content LEFT cols 1-7, image RIGHT cols 6-13 — overlap on cols 6-7 */}
                  <motion.div
                    className="flex flex-col items-start gap-3 text-left"
                    style={{ gridColumn: "1 / 8", gridRow: 1, zIndex: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.18 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-mono text-sm text-[#66ffe5]">Featured Project</p>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <div className="rounded-xl border border-[#66ffe5]/20 bg-[#0d0d0d]/95 p-5 shadow-xl backdrop-blur-sm">
                      <p className="leading-relaxed text-gray-300">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`rounded px-2 py-0.5 ${tagColors[tag] ?? "bg-white/5 text-gray-400"}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#66ffe5] hover:text-white transition-colors">
                          <i className="fab fa-github text-xl" />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[#66ffe5] hover:text-white transition-colors">
                          <i className="fas fa-external-link-alt text-xl" />
                        </a>
                      )}
                    </div>
                  </motion.div>

                  <motion.a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl"
                    style={{ gridColumn: "6 / 13", gridRow: 1, zIndex: 1 }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-[360px] w-full rounded-xl object-cover grayscale brightness-[0.55] saturate-0 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-[1.02]"
                      style={{ mixBlendMode: "multiply" }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-[#0a0a0a]/70 transition-opacity duration-300 group-hover:opacity-0" style={{ mixBlendMode: "screen" }} />
                  </motion.a>
                </>
              )}
            </div>
          </motion.div>
        ))}

        {/* Other Projects */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Noteworthy Projects</h3>
          <div className="text-center mb-8">
           <Link
              href="/archive"
              className="text-[#00d4ff] hover:text-[#00d4ff]/80 transition-colors duration-300 font-mono text-sm"
            >
              view the archive
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col h-full rounded-xl border border-white/10 bg-[#0d0d0d] p-6 transition-all duration-300 hover:bg-[#141414] hover:-translate-y-1 hover:border-[#66ffe5]/25 hover:shadow-xl cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-[#00d4ff] text-3xl">
                    <i className="fas fa-folder-open"></i>
                  </div>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-[#66ffe5] transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-gray-400 hover:text-[#66ffe5] transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className={`rounded px-2 py-0.5 text-xs font-mono ${tagColors[tag] ?? "bg-white/5 text-gray-400"}`}>
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
