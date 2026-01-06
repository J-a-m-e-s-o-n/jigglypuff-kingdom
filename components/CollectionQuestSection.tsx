'use client'

import Image from 'next/image'

export default function CollectionQuestSection() {
  // Placeholder values - replace with dynamic data from backend
  const cardsCollected = 224
  const priceHistory = {
    start: '$2',
    current: '$17',
    label: 'ATH for Near Mint'
  }
  const nextTarget = '2000 cards'

  return (
    <section id="collection-quest" className="section-container bg-gradient-soft">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent leading-tight">
          The Jigglypuff Kingdom
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {/* Cards Collected Stat */}
        <div className="floating-card p-6 sm:p-8 text-center transform transition-all duration-300 hover:scale-105 active:scale-95">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4">
            <Image
              src="/jigglypuff-card.webp"
              alt="Jigglypuff Card"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 40px, 48px"
              loading="lazy"
            />
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-pink-600 mb-1 sm:mb-2">{cardsCollected}</div>
          <div className="text-sm sm:text-base text-gray-600 font-medium">Cards Collected</div>
        </div>

        {/* Price History Stat */}
        <div className="floating-card p-6 sm:p-8 text-center transform transition-all duration-300 hover:scale-105 active:scale-95">
          <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📈</div>
          <div className="flex items-center justify-center gap-2 mb-1 sm:mb-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-500 line-through">{priceHistory.start}</span>
            <span className="text-pink-400 text-lg sm:text-xl">→</span>
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600">{priceHistory.current}</span>
          </div>
          <div className="text-xs sm:text-sm text-gray-600 font-medium">{priceHistory.label}</div>
        </div>

        {/* Next Target Stat */}
        <div className="floating-card p-6 sm:p-8 text-center transform transition-all duration-300 hover:scale-105 active:scale-95">
          <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎯</div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 mb-1 sm:mb-2 break-words">{nextTarget}</div>
          <div className="text-sm sm:text-base text-gray-600 font-medium">Next Target</div>
        </div>
      </div>
    </section>
  )
}

