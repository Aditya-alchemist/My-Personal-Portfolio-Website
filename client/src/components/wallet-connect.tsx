import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useWallet } from "@/hooks/use-wallet";
import { useToast } from "@/hooks/use-toast";

export default function WalletConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isConnected, address, balance, chainId, connect, disconnect } = useWallet();
  const { toast } = useToast();

  const walletOptions = [
    { name: "MetaMask", icon: "fab fa-ethereum", id: "metamask" },
    { name: "WalletConnect", icon: "fas fa-wallet", id: "walletconnect" },
    { name: "Coinbase Wallet", icon: "fas fa-coins", id: "coinbase" },
  ];

  const handleWalletConnect = async (walletId: string) => {
    try {
      await connect(walletId);
      setIsModalOpen(false);
      toast({
        title: "Wallet Connected",
        description: `Successfully connected to ${walletOptions.find(w => w.id === walletId)?.name}`,
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Please make sure you have the wallet extension installed.",
        variant: "destructive",
      });
    }
  };

  const handleDisconnect = () => {
    disconnect();
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected successfully.",
    });
  };

  const handleButtonClick = () => {
    if (isConnected) {
      handleDisconnect();
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
      case 1313161555: return "Aurora Testnet";
      case 40: return "Telos";
      case 8217: return "Klaytn";
      case 288: return "Boba";
      case 1088: return "Metis";
      case 2000: return "Dogechain";
      case 7700: return "Canto";
      case 1101: return "Polygon zkEVM";
      case 324: return "zkSync Era";
      case 59144: return "Linea";
      case 534352: return "Scroll";
      case 8453: return "Base";
      case 1116: return "Core";
      case 1329: return "Sei";
      case 169: return "Manta";
      case 81457: return "Blast";
      case 34443: return "Mode";
      case 167000: return "Taiko";
      case 480: return "World Chain";
      case 7777777: return "Zora";
      case 690: return "Redstone";
      case 255: return "Kroma";
      case 196: return "X Layer";
      case 5000: return "Mantle";
      case 204: return "opBNB";
      case 1890: return "Lightlink";
      case 252: return "Fraxtal";
      case 2222: return "Kava";
      case 2020: return "Ronin";
      case 1818: return "Cube";
      case 88: return "Viction";
      case 1024: return "CLV";
      case 1030: return "Conflux";
      case 369: return "PulseChain";
      case 39797: return "Energi";
      case 1234: return "Step";
      case 2021: return "Edgeware";
      case 77: return "POA Sokol";
      case 99: return "POA Core";
      case 820: return "Callisto";
      case 1975: return "ONUS";
      case 1287: return "Moonbase Alpha";
      case 71402: return "Godwoken";
      case 333999: return "Polis";
      case 1001: return "Klaytn Testnet";
      case 2001: return "Milkomeda";
      case 336: return "Shiden";
      case 592: return "Astar";
      case 7001: return "ZetaChain";
      case 9001: return "Evmos";
      default: return "Unknown Network";
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {isConnected && (
        <div className="hidden md:flex items-center space-x-2 text-sm">
          <div className="flex items-center space-x-2 px-3 py-1 bg-[#1a1a1a] rounded-lg border border-white/10">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-[#00d4ff]">{getNetworkName(chainId)}</span>
          </div>
          <div className="px-3 py-1 bg-[#1a1a1a] rounded-lg border border-white/10">
            <span className="text-white">{balance} ETH</span>
          </div>
        </div>
      )}
      
      <Button
        onClick={handleButtonClick}
        className={`${
          isConnected 
            ? "bg-green-600 hover:bg-green-700" 
            : "bg-[#00d4ff] hover:bg-[#00d4ff]/90"
        } text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300`}
      >
        {isConnected ? (
          <div className="flex items-center space-x-2">
            <span className="hidden md:inline">
              {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connected"}
            </span>
            <span className="md:hidden">Connected</span>
          </div>
        ) : (
          "Connect Wallet"
        )}
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-[#1a1a1a] border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white text-center">Connect Wallet</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {walletOptions.map((wallet) => (
              <Card
                key={wallet.id}
                className="p-4 bg-[#0a0a0a] border-white/10 hover:border-[#00d4ff]/50 transition-colors cursor-pointer"
                onClick={() => handleWalletConnect(wallet.id)}
              >
                <div className="flex items-center space-x-3">
                  <i className={`${wallet.icon} text-xl text-[#00d4ff]`}></i>
                  <span className="text-white font-medium">{wallet.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}