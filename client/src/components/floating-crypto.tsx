import { motion } from "framer-motion";

export default function FloatingCrypto() {
  const cryptoIcons = [
    { icon: "fab fa-bitcoin", color: "#00d4ff", size: "text-4xl", position: "top-20 left-20" },
    { icon: "fab fa-ethereum", color: "#39ff14", size: "text-3xl", position: "top-40 right-20" },
    { icon: "fas fa-coins", color: "#8b5cf6", size: "text-2xl", position: "bottom-40 left-40" },
    { icon: "fas fa-link", color: "#00d4ff", size: "text-3xl", position: "bottom-20 right-40" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {cryptoIcons.map((crypto, index) => (
        <motion.div
          key={index}
          className={`crypto-float ${crypto.position} w-16 h-16`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 1.5,
            ease: "easeInOut",
          }}
        >
          <i 
            className={`${crypto.icon} ${crypto.size}`}
            style={{ color: crypto.color }}
          ></i>
        </motion.div>
      ))}
    </div>
  );
}
