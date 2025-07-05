import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useWallet } from "@/hooks/use-wallet";

export default function WalletConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const { isConnected, address, balance, chainId, connect, disconnect } = useWallet();

  const walletOptions = [
    { name: "MetaMask", icon: "fab fa-ethereum", id: "metamask" },
    { name: "WalletConnect", icon: "fas fa-wallet", id: "walletconnect" },
    { name: "Coinbase Wallet", icon: "fas fa-coins", id: "coinbase" },
  ];

  const mockTransactions = [
    { hash: "0x1234...5678", type: "Send", amount: "-0.5 ETH", time: "2 hours ago" },
    { hash: "0x8765...4321", type: "Receive", amount: "+1.0 ETH", time: "5 hours ago" },
    { hash: "0x9999...1111", type: "Swap", amount: "-100 USDC", time: "1 day ago" },
  ];

  const mockTokens = [
    { symbol: "ETH", balance: balance || "0", value: "$1,234.56" },
    { symbol: "USDC", balance: "500.00", value: "$500.00" },
    { symbol: "LINK", balance: "25.50", value: "$382.50" },
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
      setIsDashboardOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const getNetworkName = (chainId: number | null) => {
    switch (chainId) {
      case 1: return "Ethereum";
      case 137: return "Polygon";
      case 42161: return "Arbitrum";
      default: return "Unknown";
    }
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        {isConnected && (
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
            <span className="font-mono">{balance} ETH</span>
            <span className="text-[#00d4ff]">•</span>
            <span>{getNetworkName(chainId)}</span>
          </div>
        )}
        
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

        {isConnected && (
          <Button
            onClick={() => setIsDashboardOpen(true)}
            variant="outline"
            className="border-[#39ff14] text-[#39ff14] hover:bg-[#39ff14] hover:text-[#0a0a0a] transition-all duration-300"
          >
            <i className="fas fa-chart-line"></i>
          </Button>
        )}
      </div>

      {/* Connect Wallet Modal */}
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

      {/* Dashboard Modal */}
      <Dialog open={isDashboardOpen} onOpenChange={setIsDashboardOpen}>
        <DialogContent className="glassmorphism border-white/10 bg-[#1a1a1a] text-white max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Wallet Dashboard
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Wallet Info */}
            <Card className="glassmorphism border-white/10 bg-[#0a0a0a] p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Wallet Address</h3>
                <Button
                  onClick={disconnect}
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  Disconnect
                </Button>
              </div>
              <div className="font-mono text-[#00d4ff] text-sm break-all">{address}</div>
              <div className="text-gray-400 text-sm mt-2">Network: {getNetworkName(chainId)}</div>
            </Card>

            {/* Token Balances */}
            <Card className="glassmorphism border-white/10 bg-[#0a0a0a] p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Token Balances</h3>
              <div className="space-y-3">
                {mockTokens.map((token, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-[#1a1a1a] rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#00d4ff] rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-sm">
                        {token.symbol[0]}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{token.symbol}</div>
                        <div className="text-gray-400 text-sm">{token.balance}</div>
                      </div>
                    </div>
                    <div className="text-[#39ff14] font-semibold">{token.value}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Transactions */}
            <Card className="glassmorphism border-white/10 bg-[#0a0a0a] p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
              <div className="space-y-3">
                {mockTransactions.map((tx, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-[#1a1a1a] rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                        tx.type === 'Send' ? 'bg-red-500/20 text-red-400' :
                        tx.type === 'Receive' ? 'bg-green-500/20 text-green-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        <i className={`fas ${
                          tx.type === 'Send' ? 'fa-arrow-up' :
                          tx.type === 'Receive' ? 'fa-arrow-down' :
                          'fa-exchange-alt'
                        }`}></i>
                      </div>
                      <div>
                        <div className="text-white font-semibold">{tx.type}</div>
                        <div className="text-gray-400 text-sm font-mono">{tx.hash}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${
                        tx.amount.startsWith('+') ? 'text-[#39ff14]' : 'text-red-400'
                      }`}>
                        {tx.amount}
                      </div>
                      <div className="text-gray-400 text-sm">{tx.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
