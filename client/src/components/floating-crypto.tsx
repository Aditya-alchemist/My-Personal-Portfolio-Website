import { motion } from "framer-motion";

export default function FloatingCrypto() {
  const cryptoIcons = [
    { icon: "fab fa-bitcoin", color: "#f7931a", size: "text-4xl", position: "top-20 left-20" },
    { icon: "fab fa-ethereum", color: "#627eea", size: "text-3xl", position: "top-40 right-20" },
    { icon: "fas fa-coins", color: "#f3ba2f", size: "text-2xl", position: "bottom-40 left-40" },
    { icon: "fas fa-link", color: "#2a5ada", size: "text-3xl", position: "bottom-20 right-40" },
    { icon: "fas fa-dollar-sign", color: "#26a17b", size: "text-2xl", position: "top-60 left-1/2" },
    { icon: "fas fa-cube", color: "#8247e5", size: "text-3xl", position: "top-80 right-1/3" },
    { icon: "fas fa-gem", color: "#9945ff", size: "text-2xl", position: "bottom-60 left-1/3" },
    { icon: "fas fa-fire", color: "#e84142", size: "text-2xl", position: "bottom-80 right-1/2" },
    { icon: "fas fa-star", color: "#ff007a", size: "text-2xl", position: "top-1/2 left-10" },
    { icon: "fas fa-bolt", color: "#00d395", size: "text-2xl", position: "top-1/2 right-10" },
    { icon: "fas fa-circle", color: "#b6509e", size: "text-xl", position: "top-32 left-32" },
    { icon: "fas fa-square", color: "#fa52a0", size: "text-xl", position: "bottom-32 right-32" },
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
