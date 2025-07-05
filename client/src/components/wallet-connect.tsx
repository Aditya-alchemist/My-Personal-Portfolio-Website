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



  const mockTokens = [
    { symbol: "ETH", balance: balance || "0.011", name: "Ethereum", value: "$25.43" },
    { symbol: "USDC", balance: "0", name: "USD Coin", value: "$0.00" },
    { symbol: "WETH", balance: "0", name: "Wrapped Ethereum", value: "$0.00" },
    { symbol: "USDT", balance: "0", name: "Tether USD", value: "$0.00" },
  ];

  const mockNFTs = [
    { name: "Bored Ape #1234", collection: "Bored Ape Yacht Club", image: "🐵", value: "15.2 ETH" },
    { name: "CryptoPunk #5678", collection: "CryptoPunks", image: "👾", value: "45.0 ETH" },
    { name: "Azuki #9012", collection: "Azuki", image: "🌸", value: "2.1 ETH" },
  ];

  const handleWalletConnect = async (walletId: string) => {
    try {
      await connect(walletId);
      setIsModalOpen(false);
      // Show success notification
      setTimeout(() => {
        alert("🎉 Wallet connected successfully!");
      }, 500);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      alert("❌ Failed to connect wallet. Please make sure you have the wallet extension installed.");
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
      case 56: return "BSC";
      case 43114: return "Avalanche";
      case 10: return "Optimism";
      case 250: return "Fantom";
      case 25: return "Cronos";
      case 100: return "Gnosis";
      case 1285: return "Moonriver";
      case 1284: return "Moonbeam";
      case 128: return "Heco";
      case 66: return "OKExChain";
      case 321: return "KCC";
      case 1666600000: return "Harmony";
      case 42220: return "Celo";
      case 122: return "Fuse";
      case 1313161554: return "Aurora";
      case 2000: return "Dogechain";
      case 1101: return "Polygon zkEVM";
      case 324: return "zkSync Era";
      case 59144: return "Linea";
      case 8453: return "Base";
      case 534352: return "Scroll";
      case 1116: return "Core";
      case 5000: return "Mantle";
      case 167000: return "Taiko";
      case 81457: return "Blast";
      case 204: return "opBNB";
      case 7777777: return "Zora";
      case 34443: return "Mode";
      case 888888888: return "Ancient8";
      case 252: return "Fraxtal";
      case 196: return "X1";
      case 480: return "World Chain";
      case 690: return "Redstone";
      case 888: return "Wanchain";
      case 1088: return "Metis";
      case 2222: return "Kava";
      case 1030: return "Conflux";
      case 2001: return "Milkomeda";
      case 288: return "Boba";
      case 106: return "Velas";
      case 40: return "Telos";
      case 1287: return "Moonbase Alpha";
      case 80001: return "Mumbai";
      case 97: return "BSC Testnet";
      case 421614: return "Arbitrum Sepolia";
      case 11155111: return "Sepolia";
      case 11155420: return "OP Sepolia";
      case 84532: return "Base Sepolia";
      case 534351: return "Scroll Sepolia";
      case 168587773: return "Blast Sepolia";
      case 300: return "zkSync Sepolia";
      case 2442: return "Polygon zkEVM Testnet";
      case 59141: return "Linea Sepolia";
      case 5003: return "Mantle Sepolia";
      case 167009: return "Taiko Katla";
      case 919: return "Mode Sepolia";
      case 28122024: return "Ancient8 Sepolia";
      case 2522: return "Fraxtal Testnet";
      case 195: return "X1 Testnet";
      case 4801: return "World Chain Sepolia";
      case 17001: return "Garnet Holesky";
      case 17000: return "Holesky";
      case 7668378: return "Lisk Sepolia";
      case 1135: return "Lisk";
      case 999999999: return "Zora Sepolia";
      case 5: return "Goerli";
      case 3: return "Ropsten";
      case 4: return "Rinkeby";
      case 42: return "Kovan";
      default: return chainId ? `Network ${chainId}` : "Unknown Network";
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
                  onClick={() => {
                    disconnect();
                    setIsDashboardOpen(false);
                  }}
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  Disconnect
                </Button>
              </div>
              <div className="font-mono text-[#00d4ff] text-sm break-all">{address}</div>
              <div className="text-gray-400 text-sm mt-2">Network: {getNetworkName(chainId)}</div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
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
                          <div className="text-gray-400 text-sm">{token.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">{token.balance}</div>
                        <div className="text-[#39ff14] text-sm">{token.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* NFT Collection */}
              <Card className="glassmorphism border-white/10 bg-[#0a0a0a] p-6">
                <h3 className="text-lg font-semibold text-white mb-4">NFT Collection</h3>
                <div className="space-y-3">
                  {mockNFTs.map((nft, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-[#1a1a1a] rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl">
                          {nft.image}
                        </div>
                        <div>
                          <div className="text-white font-semibold">{nft.name}</div>
                          <div className="text-gray-400 text-sm">{nft.collection}</div>
                        </div>
                      </div>
                      <div className="text-[#8b5cf6] font-semibold">{nft.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>


          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
