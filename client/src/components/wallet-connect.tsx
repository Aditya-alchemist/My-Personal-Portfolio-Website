import { useState } from "react";
import { useAccount, useConnect, useDisconnect, useBalance, useChainId } from "wagmi";
import { formatEther } from "viem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function WalletConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address, isConnected, connector } = useAccount();
  const { connectors, connect } = useConnect();
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

  const handleConnect = (connectorToConnect: any) => {
    try {
      connect({ connector: connectorToConnect });
      setIsModalOpen(false);
      toast({
        title: "Wallet Connected",
        description: `Successfully connected to ${connectorToConnect.name}`,
      });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Please make sure your wallet is installed and unlocked.",
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
          {renderWalletIcon(connector?.name || 'wallet')}
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
        <i className="fas fa-wallet"></i>
        <span>Connect Wallet</span>
      </Button>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-[#1a1a1a] border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white text-center">Connect Wallet</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {connectors.map((connector) => (
              <Card
                key={connector.uid}
                className="p-4 bg-[#0a0a0a] border-white/10 hover:border-[#00d4ff]/50 transition-colors cursor-pointer"
                onClick={() => handleConnect(connector)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {renderWalletIcon(connector.name)}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{connector.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {connector.name === 'MetaMask' && 'Browser extension wallet'}
                      {connector.name === 'WalletConnect' && 'Mobile wallet connection'}
                      {connector.name === 'Coinbase Wallet' && 'Coinbase wallet app'}
                      {connector.name === 'Injected' && 'Browser wallet'}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
            <p className="text-gray-400 text-sm text-center">
              Choose your preferred wallet to connect to the application.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}