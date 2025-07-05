import { useState, useEffect, createContext, useContext } from "react";

// Add window.ethereum type declaration
declare global {
  interface Window {
    ethereum?: any;
  }
}

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  chainId: number | null;
  balance: string | null;
  connect: (walletType: string) => Promise<void>;
  disconnect: () => void;
  switchNetwork: (chainId: number) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [balance, setBalance] = useState<string | null>(null);

  const connect = async (walletType: string) => {
    try {
      if (walletType === "metamask") {
        if (typeof window.ethereum !== "undefined") {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          
          const chainId = await window.ethereum.request({
            method: "eth_chainId",
          });
          
          setAddress(accounts[0]);
          setChainId(parseInt(chainId, 16));
          setIsConnected(true);
          
          // Get balance
          const balance = await window.ethereum.request({
            method: "eth_getBalance",
            params: [accounts[0], "latest"],
          });
          
          setBalance((parseInt(balance, 16) / 1e18).toFixed(4));
        } else {
          throw new Error("MetaMask not found");
        }
      } else if (walletType === "walletconnect") {
        // Mock WalletConnect connection
        setAddress("0x7f21d6db0b059496ee1c0810898e35c125a714ab");
        setChainId(137); // Polygon
        setIsConnected(true);
        setBalance("0.011");
      } else if (walletType === "coinbase") {
        // Mock Coinbase Wallet connection
        setAddress("0x8f32e6db1c159486ff2d1920899f46d236b825bc");
        setChainId(8453); // Base
        setIsConnected(true);
        setBalance("0.024");
      } else {
        // Fallback for other wallets
        setAddress("0x1234567890123456789012345678901234567890");
        setChainId(1);
        setIsConnected(true);
        setBalance("1.5");
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      throw error;
    }
  };

  const disconnect = () => {
    setIsConnected(false);
    setAddress(null);
    setChainId(null);
    setBalance(null);
  };

  const switchNetwork = async (targetChainId: number) => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${targetChainId.toString(16)}` }],
      });
      setChainId(targetChainId);
    } catch (error) {
      console.error("Failed to switch network:", error);
      throw error;
    }
  };

  useEffect(() => {
    // Check if already connected
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
          
          // Get chain ID
          window.ethereum.request({ method: "eth_chainId" }).then((chainId: string) => {
            setChainId(parseInt(chainId, 16));
          });
          
          // Get balance
          window.ethereum.request({
            method: "eth_getBalance",
            params: [accounts[0], "latest"],
          }).then((balance: string) => {
            setBalance((parseInt(balance, 16) / 1e18).toFixed(4));
          });
        }
      });

      // Listen for account changes
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length === 0) {
          disconnect();
        } else {
          setAddress(accounts[0]);
        }
      });

      // Listen for network changes
      window.ethereum.on("chainChanged", (chainId: string) => {
        setChainId(parseInt(chainId, 16));
      });
    }
  }, []);

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address,
        chainId,
        balance,
        connect,
        disconnect,
        switchNetwork,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}
