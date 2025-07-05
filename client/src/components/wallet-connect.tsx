import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/use-wallet";

export default function WalletConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isConnected, address, connect, disconnect } = useWallet();

  const walletOptions = [
    { name: "MetaMask", icon: "fab fa-ethereum", id: "metamask" },
    { name: "WalletConnect", icon: "fas fa-wallet", id: "walletconnect" },
    { name: "Coinbase Wallet", icon: "fas fa-coins", id: "coinbase" },
  ];

  const handleWalletConnect = async (walletId: string) => {
    try {
      await connect(walletId);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const handleButtonClick = () => {
    if (isConnected) {
      disconnect();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <Button
        onClick={handleButtonClick}
        variant="outline"
        className={`border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0a0a] transition-all duration-300 font-mono text-sm ${
          isConnected ? "wallet-connected" : ""
        }`}
      >
        {isConnected ? (
          <>
            <i className="fas fa-wallet mr-2"></i>
            {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connected"}
          </>
        ) : (
          "Connect Wallet"
        )}
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="glassmorphism border-white/10 bg-[#1a1a1a] text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Connect Wallet
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {walletOptions.map((wallet) => (
              <motion.button
                key={wallet.id}
                onClick={() => handleWalletConnect(wallet.id)}
                className="w-full bg-[#1a1a1a] hover:bg-[#00d4ff]/20 border border-white/20 rounded-lg p-4 flex items-center space-x-3 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className={`${wallet.icon} text-[#00d4ff] text-xl`}></i>
                <span className="text-white">{wallet.name}</span>
              </motion.button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
