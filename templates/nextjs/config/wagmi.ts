import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { defineChain } from 'viem'
import { http } from 'wagmi'

// Define Modulus Testnet chain
export const modulusTestnet = defineChain({
  id: 6666,
  name: 'Modulus Testnet',
  network: 'modulus-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'CULT',
    symbol: 'CULT',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.moduluszk.io'],
    },
    public: {
      http: ['https://rpc.moduluszk.io'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://eye.moduluszk.io' },
  },
  testnet: true,
})

// Get projectId from environment variables
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID

if (!projectId) {
  throw new Error('NEXT_PUBLIC_REOWN_PROJECT_ID is not set')
}

// Create wagmi adapter
export const wagmiAdapter = new WagmiAdapter({
  networks: [modulusTestnet],
  projectId,
  transports: {
    [modulusTestnet.id]: http(),
  },
})

// Create modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [modulusTestnet],
  projectId,
  metadata: {
    name: 'Modulus dApp',
    description: 'Buidl on the Revolution',
    url: 'https://moduluszk.io',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  themeMode: 'dark',
  features: {
    analytics: false,
  },
})

export const config = wagmiAdapter.wagmiConfig

