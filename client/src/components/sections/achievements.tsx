import { useState } from "react";
import { motion } from "framer-motion";

export default function Achievements() {
  const [activeTab, setActiveTab] = useState(0);

  const achievements = [
    {
      id: "recommendation",
      title: "Starknet Arcade Game Development",
      company: "Recommendation",
      period: "May 2025 - June 2025",
      image: "https://gateway.pinata.cloud/ipfs/bafkreihh6ox4r6gjubt6lbhxa2j7jgapokqypdgzrbqvp74jv6oiujsps4",
      description: [
        "Built fully on-chain games on StarkNet using VRF and Cartridge controllers",
        "Developed game logic in Cairo leveraging StarkNet's provable computation and integrated verifiable randomness (VRF) for unpredictable outcomes",
        "Used Cartridge controllers to implement session keys and enable gasless transactions through account abstraction",
        "Focused on secure, composable, and user-friendly on-chain game mechanics"
      ],
      link: "https://drive.google.com/file/d/1xaojqEBg8MVEzuI6RCa85266VCdXcUOv/view?usp=sharing"
    },
    {
      id: "nft-ticketing",
      title: "Hackathon by Ethereum Foundation winner",
      company: "Hackathon winner",
      period: "jan 2025",
      image: "https://gateway.pinata.cloud/ipfs/bafkreiatj6mu5tnfj5nncbtpvpbcnsnoa63fb2ohjazmpjntpabcodff4e",
      description: [
        "Developed an innovative NFT-based ticketing system that prevents scalping and fraud",
        "Built and launched projects like NFT marketplace and DApp on StarkNet",
        "Integrated with IPFS for decentralized metadata storage",
        "Implemented robust security measures to prevent fraud and unauthorized transfers"
      ],
      link: "https://drive.google.com/file/d/11vjZTN4YDjNnAEl4dkBT8Dy0lWIoUHOz/view?usp=sharing"
    },
    {
      id: "research-work",
      title: "Research work",
      company: "Research papers",
      period: "2025 - Present",
      image: "https://gateway.pinata.cloud/ipfs/bafybeicvv37jmd6krajilvyxrlnykr7mb4o4jlutbarkll7hsjfsycab74",
      description: [
        "Two research papers are under publication in peer-reviewed journals",
        "one is on 'NFT based certificates ' and other is on 'Hardware implementation with blockchain voting system'",
        "Integrated with IPFS for decentralized metadata storage",
        "Used ETH as primary blockchain for implementation"
      ],
      link: "https://github.com/Aditya-alchemist/Research-project"
    },
    {
      id: "technical-writing",
      title: "Technical Writing Recognition",
      company: "Medium & Dev.to",
      period: "2024 - Present",
      image: "https://gateway.pinata.cloud/ipfs/bafkreigmsqd74xqqtted5hiuw6fcdmuykrjdlohztmvbupg6mksi22l42u",
      description: [
        "Started technical blogging on Medium and Dev.to with growing readership",
        "Sharing insights on smart contracts, zk technology, and full-stack blockchain development",
        "Established thought leadership in blockchain development through comprehensive technical articles",
        "Started writing for 2 publications on Medium"
      ],
      link: "https://medium.com/@aditya-alchemist"
    }
  ];

  return (
    <section id="achievements" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-number">05. Achievements</h2>
        <h3 className="text-4xl font-bold mb-12 text-white">What I've Accomplished</h3>
        
        <div className="flex flex-col lg:flex-row">
          {/* Tab List - Mobile & Desktop Compatible */}
          <div className="lg:min-w-[280px] lg:mr-12">
            {/* Mobile: Horizontal Scrolling Tabs */}
            <div className="lg:hidden mb-8">
              <div className="flex overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex space-x-1 min-w-max">
                  {achievements.map((achievement, index) => (
                    <button
                      key={achievement.id}
                      onClick={() => setActiveTab(index)}
                      className={`px-4 py-3 text-sm font-mono border-b-2 whitespace-nowrap transition-all duration-200 ${
                        activeTab === index
                          ? "text-[#64ffda] border-[#64ffda] bg-[#64ffda]/10"
                          : "text-[#8892b0] border-[#233554] hover:text-[#64ffda] hover:bg-[#64ffda]/5"
                      }`}
                    >
                      {achievement.company}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: Vertical Tabs */}
            <div className="hidden lg:flex lg:flex-col">
              {achievements.map((achievement, index) => (
                <button
                  key={achievement.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left px-6 py-4 text-sm font-mono border-l-2 transition-all duration-200 ${
                    activeTab === index
                      ? "text-[#64ffda] border-[#64ffda] bg-[#64ffda]/10"
                      : "text-[#8892b0] border-[#233554] hover:text-[#64ffda] hover:bg-[#64ffda]/5"
                  }`}
                >
                  {achievement.company}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content with Enhanced Image Animations */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-5 gap-8"
            >
              {/* Content Section - Takes up 3/5 of the space */}
              <div className="lg:col-span-3 space-y-6">
                {/* Achievement Header */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h4 className="text-xl lg:text-2xl font-semibold text-white leading-tight">
                    <span className="block sm:inline">{achievements[activeTab].title}</span>
                    <span className="text-[#64ffda] block sm:inline sm:ml-2">
                      @ {achievements[activeTab].company}
                    </span>
                  </h4>
                  <p className="text-sm font-mono text-[#8892b0] mt-2">
                    {achievements[activeTab].period}
                  </p>
                </motion.div>

                {/* Achievement Description */}
                <motion.ul 
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {achievements[activeTab].description.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start text-[#8892b0]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <span className="text-[#64ffda] mr-3 mt-1 text-sm flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Achievement Link */}
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <a
                    href={achievements[activeTab].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#64ffda] hover:text-[#64ffda]/80 transition-colors duration-200 text-sm font-mono hover:translate-x-1 transform"
                  >
                    <span>View Achievement</span>
                    <i className="fas fa-external-link-alt ml-2"></i>
                  </a>
                </motion.div>
              </div>

              {/* Enhanced Image Section with Better Fitting and Animations */}
              <div className="lg:col-span-2">
                <motion.div 
                  className="relative group sticky top-8"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <motion.img
                      src={achievements[activeTab].image}
                      alt={achievements[activeTab].title}
                      className="w-full h-64 lg:h-80 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        rotateX: 5
                      }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Animated Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/30 to-[#64ffda]/10 rounded-lg group-hover:bg-transparent transition-all duration-700"
                      whileHover={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    
                    {/* Animated Corner Accents */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#64ffda] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                  </div>
                  
                  {/* Enhanced Decorative Border with Animation */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-[#64ffda] rounded-lg -z-10 opacity-30 group-hover:opacity-80 transition-all duration-300"
                    style={{ 
                      transform: 'translate(16px, 16px)' 
                    }}
                    whileHover={{ 
                      transform: 'translate(8px, 8px)',
                      borderColor: '#64ffda'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated Glow Effect */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-[#64ffda]/20 -z-20"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CSS Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          /* Enhanced 3D perspective for images */
          .group:hover img {
            transform-style: preserve-3d;
          }
          
          /* Smooth transitions for all animated elements */
          * {
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }
        `
      }} />
    </section>
  );
}
