'use client'

import { useState } from 'react'
import TrademarkDisclaimer from './TrademarkDisclaimer'

export default function SocialLinksFooter() {
  const [copied, setCopied] = useState(false)
  
  // Replace with actual social media links
  const socialLinks = {
    jigglypuffKing: 'https://x.com/JigglypuffKing_', // Replace with actual X profile
    community: 'https://x.com/i/communities/1994831733418799281', // Replace with actual community X
    buyToken: 'https://pump.fun/coin/AoKgjNMumZ2JjHFaGnrcKSnuTTRqrHWdKHhPMhzjpump', // Replace with actual PumpFun link
  }
  
  const contractAddress = 'AoKgjNMumZ2JjHFaGnrcKSnuTTRqrHWdKHhPMhzjpump'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="section-container bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-4xl mx-auto">
        {/* Social Links Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent leading-tight">
            Join the Kingdom
          </h2>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <a
              href={socialLinks.jigglypuffKing}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-card px-5 py-3 sm:px-6 sm:py-4 hover:scale-105 active:scale-95 transform transition-all duration-300 w-full sm:w-auto"
            >
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">👑</span>
                <span className="font-semibold text-gray-700 text-sm sm:text-base">Jigglypuff King</span>
              </div>
            </a>

            <a
              href={socialLinks.community}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-card px-5 py-3 sm:px-6 sm:py-4 hover:scale-105 active:scale-95 transform transition-all duration-300 w-full sm:w-auto"
            >
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">🐦</span>
                <span className="font-semibold text-gray-700 text-sm sm:text-base">X Community</span>
              </div>
            </a>

            <a
              href={socialLinks.buyToken}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-card px-5 py-3 sm:px-6 sm:py-4 hover:scale-105 active:scale-95 transform transition-all duration-300 bg-gradient-to-r from-pink-400 to-pink-500 text-white w-full sm:w-auto"
            >
              <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">🚀</span>
                <span className="font-semibold text-sm sm:text-base">Buy Token</span>
              </div>
            </a>
          </div>
          
          {/* Contract Address with Copy Button */}
          <div className="mb-6 sm:mb-8">
            <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-2">
              Contract Address
            </label>
            <div className="flex items-center justify-center gap-2 bg-gray-50 rounded-xl p-2.5 sm:p-3 border border-pink-200 max-w-full sm:max-w-md mx-auto">
              <code className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-mono flex-1 break-all sm:truncate text-center sm:text-left px-1">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="text-pink-500 hover:text-pink-600 active:scale-95 px-2 sm:px-3 py-1 rounded-lg hover:bg-pink-50 transition-all duration-120 flex-shrink-0"
                title="Copy to clipboard"
                aria-label="Copy contract address"
              >
                {copied ? '✓' : '📋'}
              </button>
            </div>
          </div>
        </div>

        {/* Trademark Disclaimer */}
        <TrademarkDisclaimer />

        {/* Footer Text */}
        <div className="text-center pt-6 sm:pt-8 border-t border-pink-200">
          <p className="text-gray-600 text-xs sm:text-sm">
            © 2025 Jigglypuff Kingdom. All original content. Community-powered.
          </p>
        </div>
      </div>
    </footer>
  )
}

