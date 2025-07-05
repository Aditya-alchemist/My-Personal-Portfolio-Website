import { useState, useEffect } from "react";
import { useAccount, useConnect, useDisconnect, useBalance, useChainId } from "wagmi";
import { formatEther } from "viem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function WalletConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { address, isConnected, connector } = useAccount();
  const { connectors, connect } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { toast } = useToast();

  const { data: balance } = useBalance({
    address: address,
  });

  // Handle connection success
  useEffect(() => {
    if (isConnected && connector && !isConnecting) {
      toast({
        title: "Wallet Connected",
        description: `Successfully connected to ${connector.name}`,
      });
    }
  }, [isConnected, connector, toast, isConnecting]);

  // Handle disconnection
  useEffect(() => {
    if (!isConnected && !isConnecting) {
      // Only show disconnect message if we were previously connected
      const wasConnected = localStorage.getItem('wagmi.connected');
      if (wasConnected) {
        toast({
          title: "Wallet Disconnected",
          description: "Your wallet has been disconnected successfully.",
        });
        localStorage.removeItem('wagmi.connected');
      }
    } else if (isConnected) {
      localStorage.setItem('wagmi.connected', 'true');
    }
  }, [isConnected, toast, isConnecting]);

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

  const getConnectorIcon = (connectorName: string) => {
    // Return FontAwesome icons as fallback for better reliability
    switch (connectorName.toLowerCase()) {
      case 'metamask':
        return "fab fa-ethereum";
      case 'walletconnect':
        return "fas fa-qrcode";
      case 'coinbase wallet':
        return "fas fa-coins";
      case 'injected':
        return "fas fa-wallet";
      default:
        return "fas fa-wallet";
    }
  };

  const renderWalletIcon = (connectorName: string) => {
    const iconClass = getConnectorIcon(connectorName);
    return <i className={`${iconClass} text-[#00d4ff] text-lg`}></i>;
  };

  const handleConnect = async (connectorToConnect: any) => {
    try {
      setIsConnecting(true);
      setIsModalOpen(false);
      await connect({ connector: connectorToConnect });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Please make sure your wallet is installed and unlocked.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setIsConnecting(true);
    disconnect();
    setIsConnecting(false);
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
      <div className="flex items-center space-x-2 lg:space-x-3">
        {/* Network Indicator - Hidden on small screens */}
        <div className="hidden sm:flex items-center space-x-2 px-2 lg:px-3 py-1.5 bg-[#1a1a1a] rounded-lg border border-white/10">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-[#00d4ff] text-xs lg:text-sm font-medium">{getNetworkName(chainId)}</span>
        </div>

        {/* Balance - Hidden on extra small screens */}
        <div className="hidden md:flex px-2 lg:px-3 py-1.5 bg-[#1a1a1a] rounded-lg border border-white/10">
          <span className="text-white text-xs lg:text-sm font-medium">
            {balance ? `${parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}` : '0.0000 ETH'}
          </span>
        </div>

        {/* Address/Disconnect Button */}
        <Button
          onClick={handleButtonClick}
          disabled={isConnecting}
          className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-medium px-3 lg:px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
        >
          {renderWalletIcon(connector?.name || 'wallet')}
          <span className="hidden sm:inline text-xs lg:text-sm">
            {address ? `${address.slice(0, 4)}...${address.slice(-3)}` : "Connected"}
          </span>
          <span className="sm:hidden text-xs">
            {isConnecting ? "..." : "Connected"}
          </span>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button
        onClick={handleButtonClick}
        disabled={isConnecting}
        className="bg-[#00d4ff] hover:bg-[#00d4ff]/90 disabled:opacity-50 text-[#0a0a0a] font-medium px-4 lg:px-6 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
      >
        <i className={`fas ${isConnecting ? 'fa-spinner fa-spin' : 'fa-wallet'}`}></i>
        <span className="hidden sm:inline">
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </span>
        <span className="sm:hidden text-xs">
          {isConnecting ? 'Connecting...' : 'Connect'}
        </span>
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md w-[95vw] mx-auto bg-[#1a1a1a] border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white text-center text-lg">Connect Wallet</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {connectors.map((connector) => (
              <Card
                key={connector.uid}
                className="p-3 sm:p-4 bg-[#0a0a0a] border-white/10 hover:border-[#00d4ff]/50 transition-colors cursor-pointer touch-manipulation"
                onClick={() => handleConnect(connector)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                    {renderWalletIcon(connector.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-white font-medium text-sm sm:text-base truncate">{connector.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {connector.name === 'MetaMask' && 'Browser extension wallet'}
                      {connector.name === 'Coinbase Wallet' && 'Coinbase wallet app'}
                      {connector.name === 'Browser Wallet' && 'Browser wallet'}
                      {connector.name === 'Injected' && 'Browser wallet'}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
            <p className="text-gray-400 text-xs sm:text-sm text-center px-2">
              Choose your preferred wallet to connect to the application.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}