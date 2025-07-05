import { createConfig, http } from 'wagmi'
import { mainnet, polygon, arbitrum, base, optimism, bsc } from 'wagmi/chains'
import { metaMask, walletConnect, coinbaseWallet, injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, polygon, arbitrum, base, optimism, bsc],
  connectors: [
    injected(),
    metaMask({
      dappMetadata: {
        name: 'Alex Chen Portfolio',
        url: 'https://alexchen.dev',
      },
    }),
    walletConnect({
      projectId: 'demo-project-id', // In production, use your actual project ID
      metadata: {
        name: 'Alex Chen Portfolio',
        description: 'Blockchain Developer Portfolio',
        url: typeof window !== 'undefined' ? window.location.origin : 'https://alexchen.dev',
        icons: [typeof window !== 'undefined' ? `${window.location.origin}/icon.png` : 'https://alexchen.dev/icon.png']
      }
    }),
    coinbaseWallet({
      appName: 'Alex Chen Portfolio',
      appLogoUrl: typeof window !== 'undefined' ? `${window.location.origin}/icon.png` : 'https://alexchen.dev/icon.png'
    }),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [optimism.id]: http(),
    [bsc.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}