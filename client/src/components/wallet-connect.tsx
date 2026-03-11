import { useEffect, useMemo, useState } from "react";
import { useAccount, useBalance, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { formatEther } from "viem";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { hasWalletConnectProjectId, preferredChain, supportedChains } from "@/lib/wagmi";

export default function WalletConnect() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectingConnectorId, setConnectingConnectorId] = useState<string | null>(null);
  const [lastToastState, setLastToastState] = useState<"connected" | "disconnected" | null>(null);
  const { address, isConnected, connector, chain } = useAccount();
  const { connectors, connectAsync } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChainAsync, isPending: isSwitching } = useSwitchChain();
  const { toast } = useToast();

  const { data: balance } = useBalance({
    address: address,
  });

  const availableConnectors = useMemo(
    () => connectors.filter((connectorItem, index, items) => {
      return items.findIndex(({ id }) => id === connectorItem.id) === index;
    }),
    [connectors],
  );

  const supportedNetworkNames = useMemo(
    () => supportedChains.map(({ name }) => name).join(" • "),
    [],
  );

  useEffect(() => {
    if (isConnected && connector && lastToastState !== "connected") {
      toast({
        title: "Wallet Connected",
        description: `Connected to ${connector.name} on ${chain?.name ?? "an EVM network"}.`,
      });
      setLastToastState("connected");
    }
    if (!isConnected && lastToastState === "connected") {
      toast({
        title: "Wallet Disconnected",
        description: "Your wallet has been disconnected successfully.",
      });
      setLastToastState("disconnected");
    }
  }, [chain?.name, connector, isConnected, lastToastState, toast]);

  const isOnPreferredChain = chain?.id === preferredChain.id;

  const getConnectorIcon = (connectorName: string) => {
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

  const getConnectorDescription = (connectorName: string) => {
    switch (connectorName.toLowerCase()) {
      case "metamask":
        return "Best for Sepolia development and browser extension flows.";
      case "coinbase wallet":
        return "Mobile and extension wallet with Coinbase ecosystem support.";
      case "walletconnect":
        return hasWalletConnectProjectId
          ? "Scan with a compatible mobile wallet through WalletConnect."
          : "Add VITE_WALLETCONNECT_PROJECT_ID to enable WalletConnect QR pairing.";
      case "injected":
      case "browser wallet":
        return "Auto-detect installed EIP-6963 and injected browser wallets.";
      default:
        return "Connect using the wallet provider exposed in your browser.";
    }
  };

  const renderWalletIcon = (connectorName: string) => {
    const iconClass = getConnectorIcon(connectorName);
    return <i className={`${iconClass} text-[#00d4ff] text-lg`}></i>;
  };

  const handleConnect = async (connectorToConnect: (typeof availableConnectors)[number]) => {
    try {
      if (connectorToConnect.id === "walletConnect" && !hasWalletConnectProjectId) {
        toast({
          title: "WalletConnect Not Configured",
          description: "Set VITE_WALLETCONNECT_PROJECT_ID to enable QR-based mobile wallet pairing.",
          variant: "destructive",
        });
        return;
      }

      setIsConnecting(true);
      setConnectingConnectorId(connectorToConnect.uid);
      setIsModalOpen(false);
      await connectAsync({ connector: connectorToConnect, chainId: preferredChain.id });
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Please make sure your wallet is installed, unlocked, and allowed to use Sepolia.",
        variant: "destructive",
      });
    } finally {
      setIsConnecting(false);
      setConnectingConnectorId(null);
    }
  };

  const handleDisconnect = () => disconnect();

  const handleSwitchToSepolia = async () => {
    try {
      await switchChainAsync({ chainId: preferredChain.id });
      toast({
        title: "Network Updated",
        description: `Switched to ${preferredChain.name}.`,
      });
    } catch (error) {
      console.error("Failed to switch network:", error);
      toast({
        title: "Network Switch Failed",
        description: `Please switch to ${preferredChain.name} in your wallet.`,
        variant: "destructive",
      });
    }
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
        <div className="hidden sm:flex items-center space-x-2 rounded-lg border border-white/10 bg-[#1a1a1a] px-2 py-1.5 lg:px-3">
          <div className={`h-2 w-2 rounded-full ${isOnPreferredChain ? "bg-green-500" : "bg-amber-400"}`}></div>
          <span className="text-xs font-medium text-[#00d4ff] lg:text-sm">{chain?.name ?? preferredChain.name}</span>
        </div>

        <div className="hidden rounded-lg border border-white/10 bg-[#1a1a1a] px-2 py-1.5 md:flex lg:px-3">
          <span className="text-xs font-medium text-white lg:text-sm">
            {balance ? `${parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}` : '0.0000 ETH'}
          </span>
        </div>

        {!isOnPreferredChain && (
          <Button
            onClick={handleSwitchToSepolia}
            disabled={isSwitching}
            className="hidden bg-amber-500 px-3 py-2 text-xs font-medium text-black hover:bg-amber-400 lg:inline-flex"
          >
            {isSwitching ? "Switching..." : "Switch to Sepolia"}
          </Button>
        )}

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
            <DialogTitle className="text-center text-lg text-white">Web3 Wallets</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <div className="rounded-lg border border-[#00d4ff]/20 bg-[#0c1119] p-3 text-center">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#00d4ff]">Preferred Network</p>
              <p className="mt-2 text-sm text-white">{preferredChain.name}</p>
              <p className="mt-1 text-xs text-gray-400">Also configured for {supportedNetworkNames}.</p>
            </div>

            {availableConnectors.map((connectorItem) => (
              <Card
                key={connectorItem.uid}
                className="cursor-pointer touch-manipulation border-white/10 bg-[#0a0a0a] p-3 transition-colors hover:border-[#00d4ff]/50 sm:p-4"
                onClick={() => handleConnect(connectorItem)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                    {renderWalletIcon(connectorItem.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="truncate text-sm font-medium text-white sm:text-base">{connectorItem.name}</h3>
                      {connectingConnectorId === connectorItem.uid && isConnecting && (
                        <span className="text-xs text-[#00d4ff]">Connecting...</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 sm:text-sm">
                      {getConnectorDescription(connectorItem.name)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            <p className="px-2 text-center text-xs text-gray-400 sm:text-sm">
              Choose a wallet to connect. Sepolia is the primary network for demos and contract flows.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}