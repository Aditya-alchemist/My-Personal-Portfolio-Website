import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      id: "recommendation",
      num: "01",
      title: "Starknet Arcade Game Development",
      label: "Freelance · Recommendation",
      period: "May 2025 – June 2025",
      icon: "fas fa-gamepad",
      bullets: [
        "Built fully on-chain games on StarkNet using VRF and Cartridge controllers",
        "Developed game logic in Cairo with verifiable randomness for provably fair mechanics",
        "Implemented gasless UX via session keys and account abstraction",
      ],
      link: "https://drive.google.com/file/d/1xaojqEBg8MVEzuI6RCa85266VCdXcUOv/view?usp=sharing",
      linkLabel: "View Certificate",
    },
    {
      id: "hackathon",
      num: "02",
      title: "Ethereum Foundation Hackathon Winner",
      label: "Hackathon · Ethereum Foundation",
      period: "Jan 2025",
      icon: "fas fa-trophy",
      bullets: [
        "Won hackathon with an NFT-based ticketing system preventing scalping and fraud",
        "Built NFT marketplace and DApp fully on StarkNet within competition timeline",
        "Implemented decentralized metadata storage via IPFS",
      ],
      link: "https://drive.google.com/file/d/11vjZTN4YDjNnAEl4dkBT8Dy0lWIoUHOz/view?usp=sharing",
      linkLabel: "View Certificate",
    },
    {
      id: "research",
      num: "03",
      title: "Research Publications",
      label: "Academic · Peer-reviewed Journals",
      period: "2025 – Present",
      icon: "fas fa-flask",
      bullets: [
        "Two papers under publication: NFT-based certificate verification system",
        "Hardware implementation with blockchain-based voting system",
        "Both implement Ethereum as the primary chain with IPFS storage layer",
      ],
      link: "https://github.com/Aditya-alchemist/Research-project",
      linkLabel: "View Research",
    },
    {
      id: "writing",
      num: "04",
      title: "Technical Writing Recognition",
      label: "Content · Medium & Dev.to",
      period: "2024 – Present",
      icon: "fas fa-pen-nib",
      bullets: [
        "Writing for 2 publications on Medium with growing readership",
        "Topics: smart contracts, ZK technology, full-stack blockchain development",
        "Establishing thought leadership through deep-dive technical articles",
      ],
      link: "https://medium.com/@aditya-alchemist",
      linkLabel: "Read Articles",
    },
  ];

  return (
    <section id="achievements" className="mx-auto max-w-7xl px-4 py-24 sm:py-32 sm:px-6 lg:px-8 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-3xl text-[#66ffe5]">06.</span>
          <h3 className="text-4xl font-bold text-white">Achievements</h3>
          <div className="hidden h-px flex-1 bg-white/10 md:block" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#66ffe5]/0 via-[#66ffe5]/25 to-[#66ffe5]/0 md:left-1/2 md:-translate-x-px" />

          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;
            const color = isEven ? "#66ffe5" : "#39ff14";

            return (
              <motion.div
                key={item.id}
                className={`relative mb-10 flex pl-12 md:mb-16 md:pl-0 ${isEven ? "md:justify-start" : "md:justify-end"}`}
                initial={{ opacity: 0, x: isEven ? -35 : 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Dot — mobile */}
                <div
                  className="absolute left-4 top-7 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 bg-[#0a0a0a] md:hidden"
                  style={{ borderColor: color }}
                />
                {/* Dot — desktop */}
                <div
                  className="absolute left-1/2 top-7 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 bg-[#0a0a0a] md:block transition-shadow duration-300"
                  style={{ borderColor: color, boxShadow: `0 0 10px ${color}55` }}
                />

                {/* Card */}
                <div className={`group w-full md:w-[46%] ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <div
                    className="relative overflow-hidden rounded-xl border bg-[#0c0c0c] p-6 transition-all duration-300 hover:bg-[#131313] hover:-translate-y-1 hover:shadow-xl"
                    style={{ borderColor: `${color}28` }}
                  >
                    {/* Hover accent border */}
                    <div
                      className="absolute inset-y-0 left-0 w-[2px] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"
                      style={{ background: color }}
                    />

                    {/* Decorative number */}
                    <span
                      className="pointer-events-none absolute -right-2 -top-4 select-none font-bold leading-none opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
                      style={{ fontSize: "clamp(5rem, 10vw, 7.5rem)", color }}
                      aria-hidden="true"
                    >
                      {item.num}
                    </span>

                    <div className="relative z-10">
                      {/* Icon + period */}
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-2xl" style={{ color }}>
                          <i className={item.icon} />
                        </span>
                        <span className="font-mono text-xs text-gray-500">{item.period}</span>
                      </div>

                      {/* Label */}
                      <span
                        className="mb-1 block font-mono text-xs uppercase tracking-widest"
                        style={{ color: `${color}99` }}
                      >
                        {item.label}
                      </span>

                      {/* Title */}
                      <h4 className="mb-4 text-xl font-bold leading-snug text-white">{item.title}</h4>

                      {/* Bullets */}
                      <ul className="mb-5 space-y-2">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-gray-400">
                            <span
                              className="mt-[6px] inline-block h-[5px] w-[5px] flex-shrink-0 rounded-full"
                              style={{ background: color }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>

                      {/* Link */}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-sm transition-all duration-200 hover:gap-3 hover:text-white"
                        style={{ color }}
                      >
                        {item.linkLabel}
                        <i className="fas fa-arrow-right text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
