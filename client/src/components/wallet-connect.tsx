import { useState } from "react";
import { useAccount, useConnect, useDisconnect, useBalance, useChainId } from "wagmi";
import { metaMask } from "wagmi/connectors";
import { formatEther } from "viem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function WalletConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { toast } = useToast();

  const { data: balance } = useBalance({
    address: address,
  });

  const getNetworkName = (chainId: number) => {
    switch (chainId) {
      case 1: return "Ethereum";
      case 137: return "Polygon";
      case 42161: return "Arbitrum";
      case 8453: return "Base";
      case 56: return "BSC";
      case 43114: return "Avalanche";
      case 10: return "Optimism";
      case 250: return "Fantom";
      case 25: return "Cronos";
      case 100: return "Gnosis";
      default: return "Unknown";
    }
  };

  const handleConnect = () => {
    try {
      connect({ connector: metaMask() });
      setIsModalOpen(false);
      toast({
        title: "Wallet Connected",
        description: "Successfully connected to MetaMask",
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Please make sure MetaMask is installed and unlocked.",
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

  if (isConnected && address) {
    return (
      <div className="flex items-center space-x-3">
        {/* Network Indicator */}
        <div className="flex items-center space-x-2 px-3 py-1.5 bg-[#1a1a1a] rounded-lg border border-white/10">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-[#00d4ff] text-sm font-medium">{getNetworkName(chainId)}</span>
        </div>

        {/* Balance */}
        <div className="px-3 py-1.5 bg-[#1a1a1a] rounded-lg border border-white/10">
          <span className="text-white text-sm font-medium">
            {balance ? `${parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}` : '0.0000 ETH'}
          </span>
        </div>

        {/* Address/Disconnect Button */}
        <Button
          onClick={handleButtonClick}
          className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/MetaMask/brand-resources@master/SVG/metamask-fox.svg" 
            alt="MetaMask" 
            className="w-4 h-4"
          />
          <span className="hidden md:inline">
            {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Connected"}
          </span>
          <span className="md:hidden">Connected</span>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button
        onClick={handleButtonClick}
        className="bg-[#00d4ff] hover:bg-[#00d4ff]/90 text-[#0a0a0a] font-medium px-6 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
      >
        <img 
          src="https://cdn.jsdelivr.net/gh/MetaMask/brand-resources@master/SVG/metamask-fox.svg" 
          alt="MetaMask" 
          className="w-4 h-4"
        />
        <span>Connect MetaMask</span>
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-[#1a1a1a] border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white text-center">Connect to MetaMask</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Card
              className="p-6 bg-[#0a0a0a] border-white/10 hover:border-[#00d4ff]/50 transition-colors cursor-pointer"
              onClick={handleConnect}
            >
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src="https://cdn.jsdelivr.net/gh/MetaMask/brand-resources@master/SVG/metamask-fox.svg" 
                  alt="MetaMask" 
                  className="w-8 h-8"
                />
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg">MetaMask</h3>
                  <p className="text-gray-400 text-sm">Connect using browser wallet</p>
                </div>
              </div>
            </Card>
            <p className="text-gray-400 text-sm text-center">
              Make sure you have MetaMask installed and unlocked in your browser.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}