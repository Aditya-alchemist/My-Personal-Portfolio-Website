import { createConfig, http } from 'wagmi'
import { mainnet, sepolia, polygon, arbitrum, base, optimism, bsc } from 'wagmi/chains'
import { metaMask, coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const supportedChains = [sepolia, mainnet, polygon, arbitrum, base, optimism, bsc] as const
export const preferredChain = sepolia

const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

export const config = createConfig({
  chains: supportedChains,
  connectors: [
    injected(),
    metaMask({
      dappMetadata: {
        name: 'Aditya kumar Mishra Portfolio',
        url: typeof window !== 'undefined' ? window.location.origin : 'https://replit.dev',
      },
    }),
    coinbaseWallet({
      appName: 'Aditya kumar Mishra Portfolio',
      appLogoUrl: 'https://replit.dev/public/icons/favicon-196x196.png',
    }),
    ...(walletConnectProjectId
      ? [
          walletConnect({
            projectId: walletConnectProjectId,
            showQrModal: false,
            metadata: {
              name: 'Aditya kumar Mishra Portfolio',
              description: 'Portfolio with Web3 wallet connectivity',
              url: typeof window !== 'undefined' ? window.location.origin : 'https://replit.dev',
              icons: ['https://replit.dev/public/icons/favicon-196x196.png'],
            },
          }),
        ]
      : []),
  ],
  multiInjectedProviderDiscovery: true,
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [optimism.id]: http(),
    [bsc.id]: http(),
  },
})

export const hasWalletConnectProjectId = Boolean(walletConnectProjectId)

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}