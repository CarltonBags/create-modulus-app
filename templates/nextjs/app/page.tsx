'use client'

import { useAppKit } from '@reown/appkit/react'
import { useAccount, useBalance } from 'wagmi'
import { useEffect, useState } from 'react'
import { formatUnits } from 'viem'

export default function Home() {
  const { open } = useAppKit()
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#2e0a0a] to-[#0a0a0f] text-white flex flex-col">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-500 via-red-700 to-red-500 bg-clip-text text-transparent animate-gradient">
              BUIDL for the Revolution
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Build decentralized applications on Modulus zkEVM
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-lg space-y-6">
            {/* Connect Button */}
            <div className="flex justify-center">
              <button
                onClick={() => open()}
                className="group relative px-10 py-5 bg-gradient-to-r from-red-800 via-red-900 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-700 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-red-900/50"
              >
                <span className="relative z-10">
                  {mounted && isConnected ? 'Manage Wallet' : 'Connect Wallet'}
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-800 to-red-900 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Display Connected Address */}
            {mounted && isConnected && address && (
              <div className="backdrop-blur-xl bg-white/5 border border-red-800/20 rounded-2xl p-8 text-center shadow-xl space-y-4">
                <div className="inline-block px-3 py-1 bg-red-900/20 rounded-full">
                  <p className="text-red-300 text-xs font-semibold uppercase tracking-wider">
                    Connected
                  </p>
                </div>
                
                {/* Balance Display */}
                <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-xl p-6 border border-red-800/30">
                  <p className="text-gray-400 text-xs mb-2">Balance</p>
                  <p className="text-3xl font-bold text-white">
                    {balance ? `${parseFloat(formatUnits(balance.value, balance.decimals)).toFixed(4)} ${balance.symbol}` : '0.0000 CULT'}
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="text-gray-400 text-sm mb-3">Wallet Address</p>
                  <p className="text-white font-mono text-sm break-all bg-black/30 px-4 py-3 rounded-lg border border-red-800/10">
                    {address}
                  </p>
                </div>
              </div>
            )}

            {/* Network Info */}
            <div className="backdrop-blur-xl bg-white/5 border border-red-800/20 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Network</p>
                  <p className="text-white font-semibold">Modulus Testnet</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-xs mb-1">Chain ID</p>
                  <p className="text-red-400 font-semibold">6666</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm">
              Powered by <span className="text-red-400 font-semibold">Modulus zkEVM</span>
            </p>
            <div className="flex justify-center space-x-6 text-xs text-gray-500">
              <a href="https://docs.moduluszk.io" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                Docs
              </a>
              <a href="https://eye.moduluszk.io" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                Explorer
              </a>
              <a href="https://faucet.moduluszk.io" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                Faucet
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

