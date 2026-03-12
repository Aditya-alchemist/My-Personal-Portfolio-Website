import { motion } from "framer-motion";

const audits = [
  {
    title: "Mycut Protocol Audit",
    protocol: "Mycut Protocol",
    description:
      "In-depth security review of the Mycut Protocol smart contracts. Identified and reported vulnerabilities across access control, fund handling, and business logic layers with detailed remediation guidance.",
    tags: ["Solidity", "Security Audit", "DeFi", "Access Control"],
    github: "https://github.com/Aditya-alchemist/Mycut-protocol-audit",
    severity: { critical: 0, high: 1, medium: 2, low: 3 },
  },
  {
    title: "Beatland Festival Audit",
    protocol: "Beatland Festival",
    description:
      "Security audit of the Beatland Festival smart contracts covering ticketing, revenue distribution, and ownership mechanics. Surfaced reentrancy risks and integer overflow vectors with proof-of-concept exploits.",
    tags: ["Solidity", "Security Audit", "NFT", "Reentrancy"],
    github: "https://github.com/Aditya-alchemist/Beatland-festival-audit",
    severity: { critical: 1, high: 1, medium: 2, low: 2 },
  },
  {
    title: "Santa's List Audit",
    protocol: "Santa's List",
    description:
      "Comprehensive audit of the Santa's List protocol examining allowlist validation, Merkle proof verification, and token claim mechanics. Uncovered bypass paths and data validation weaknesses.",
    tags: ["Solidity", "Security Audit", "Merkle Proof", "Token Claims"],
    github: "https://github.com/Aditya-alchemist/Santas-list-audit",
    severity: { critical: 0, high: 2, medium: 1, low: 3 },
  },
  {
    title: "Puppy Raffle Audit — CodeHawks First Flight",
    protocol: "Puppy Raffle",
    description:
      "First Flight audit on CodeHawks platform targeting the Puppy Raffle contract. Discovered critical reentrancy vulnerability in the refund function, weak randomness in winner selection, and denial-of-service vectors.",
    tags: ["Solidity", "CodeHawks", "Security Audit", "Reentrancy", "Randomness"],
    github: "https://github.com/Aditya-alchemist/Puppy-Raffle-Audit-CodeHawks-First-FLight",
    severity: { critical: 2, high: 2, medium: 2, low: 1 },
  },
];

const severityColor: Record<string, string> = {
  critical: "text-red-400",
  high: "text-orange-400",
  medium: "text-yellow-400",
  low: "text-green-400",
};

const tagColors: Record<string, string> = {
  Solidity: "bg-[#00d4ff]/15 text-[#00d4ff]",
  "Security Audit": "bg-[#66ffe5]/15 text-[#66ffe5]",
  DeFi: "bg-[#34d399]/15 text-[#34d399]",
  "Access Control": "bg-[#a78bfa]/15 text-[#a78bfa]",
  NFT: "bg-[#e879f9]/15 text-[#e879f9]",
  Reentrancy: "bg-red-500/15 text-red-400",
  "Merkle Proof": "bg-[#6366f1]/15 text-[#6366f1]",
  "Token Claims": "bg-[#f59e0b]/15 text-[#f59e0b]",
  CodeHawks: "bg-[#fb7185]/15 text-[#fb7185]",
  Randomness: "bg-[#facc15]/15 text-[#facc15]",
};

const defaultTagColor = "bg-white/10 text-gray-300";

export default function Audits() {
  return (
    <section
      id="audits"
      className="mx-auto max-w-7xl px-4 py-24 sm:py-32 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Section heading */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-3xl text-[#66ffe5]">04.</span>
          <h3 className="text-4xl font-bold text-white">Security Audits</h3>
          <div className="hidden h-px flex-1 bg-white/10 md:block" />
        </div>

        {/* Intro + portfolio link */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-gray-400">
            Smart-contract security reviews identifying critical vulnerabilities before deployment.
            Each report includes proof-of-concept exploits and remediation guidance.
          </p>
          <a
            href="https://github.com/Aditya-alchemist/Audit-reports-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded border border-[#66ffe5]/40 px-4 py-2 font-mono text-sm text-[#66ffe5] transition-all duration-200 hover:bg-[#66ffe5]/10"
          >
            <i className="fab fa-github"></i>
            All Audit Reports
          </a>
        </div>

        {/* Audit cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {audits.map((audit, i) => (
            <motion.div
              key={audit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col rounded-lg border border-white/10 bg-[#111111] p-6 transition-all duration-300 hover:border-[#66ffe5]/40 hover:bg-[#141414] hover:-translate-y-1"
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-1 font-mono text-xs text-[#66ffe5]">{audit.protocol}</p>
                  <h4 className="text-lg font-semibold text-white group-hover:text-[#66ffe5] transition-colors duration-200">
                    {audit.title}
                  </h4>
                </div>
                <a
                  href={audit.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-gray-400 transition-colors duration-200 hover:text-[#66ffe5]"
                  aria-label={`GitHub – ${audit.title}`}
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>

              {/* Description */}
              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400">
                {audit.description}
              </p>

              {/* Severity badges */}
              <div className="mb-4 flex flex-wrap gap-3">
                {Object.entries(audit.severity).map(([level, count]) => (
                  <span key={level} className="flex items-center gap-1 font-mono text-xs">
                    <span className={severityColor[level]}>
                      {level.charAt(0).toUpperCase() + level.slice(1)}:
                    </span>
                    <span className="text-white">{count}</span>
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {audit.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded px-2 py-0.5 font-mono text-xs ${tagColors[tag] ?? defaultTagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
