import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Blockchain Developer",
      company: "CryptoFinance Protocol",
      period: "2022 - Present",
      achievements: [
        "Led development of a $50M+ TVL DeFi lending protocol with advanced liquidation mechanisms",
        "Architected and deployed 15+ smart contracts across Ethereum, Polygon, and Arbitrum",
        "Implemented comprehensive security audit process, reducing vulnerabilities by 90%",
        "Mentored 3 junior developers in blockchain development best practices",
      ],
    },
    {
      title: "Blockchain Developer",
      company: "NFT Marketplace Inc",
      period: "2020 - 2022",
      achievements: [
        "Built and launched NFT marketplace processing 10,000+ transactions daily",
        "Developed ERC-721 and ERC-1155 smart contracts with advanced royalty systems",
        "Integrated with IPFS for decentralized metadata storage",
        "Optimized gas usage, reducing transaction costs by 40%",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "TechStartup Solutions",
      period: "2018 - 2020",
      achievements: [
        "Developed Web3 integration layer for existing Web2 applications",
        "Created cryptocurrency payment gateway processing $2M+ in transactions",
        "Built React-based dashboard for blockchain analytics and monitoring",
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
        <div className="section-number">02. Experience</div>
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
