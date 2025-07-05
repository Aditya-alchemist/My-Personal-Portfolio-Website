import { motion } from "framer-motion";

export default function FloatingCrypto() {
  const cryptoIcons = [
    { icon: "fab fa-bitcoin", color: "#f7931a", size: "text-4xl", position: "top-20 left-20", name: "Bitcoin" },
    { icon: "fab fa-ethereum", color: "#627eea", size: "text-3xl", position: "top-40 right-20", name: "Ethereum" },
    { icon: "fas fa-coins", color: "#fbcc5c", size: "text-2xl", position: "bottom-40 left-40", name: "DAI" },
    { icon: "fas fa-map-marker-alt", color: "#2a5ada", size: "text-3xl", position: "bottom-20 right-40", name: "Marker" },
    { icon: "fas fa-cube", color: "#8247e5", size: "text-3xl", position: "top-80 right-1/3", name: "Polygon" },
    { icon: "fas fa-layer-group", color: "#0052ff", size: "text-2xl", position: "top-60 left-1/2", name: "Base" },
    { icon: "fas fa-dog", color: "#c2a633", size: "text-2xl", position: "bottom-60 left-1/3", name: "Dogecoin" },
    { icon: "fas fa-dollar-sign", color: "#26a17b", size: "text-2xl", position: "bottom-80 right-1/2", name: "USD" },
    { icon: "fas fa-star", color: "#7d00ff", size: "text-2xl", position: "top-1/2 left-10", name: "Stellar" },
    { icon: "fas fa-mountain", color: "#ff6b35", size: "text-2xl", position: "top-1/2 right-10", name: "Starknet" },
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
