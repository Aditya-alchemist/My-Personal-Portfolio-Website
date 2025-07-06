import { createConfig, http } from 'wagmi'
import { mainnet, polygon, arbitrum, base, optimism, bsc } from 'wagmi/chains'
import { metaMask, coinbaseWallet, injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, polygon, arbitrum, base, optimism, bsc],
  connectors: [
    injected({
      target: {
        id: 'injected',
        name: 'Browser Wallet',
        provider: typeof window !== 'undefined' ? window.ethereum : undefined,
      },
    }),
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