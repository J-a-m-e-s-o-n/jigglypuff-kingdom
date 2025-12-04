'use client'

import Image from 'next/image'

export default function CollectionQuestSection() {
  // Placeholder values - replace with dynamic data from backend
  const cardsCollected = 245
  const estimatedTotalValue = '14'
  const nextTarget = '2000 cards'

  return (
    <section id="collection-quest" className="section-container bg-gradient-soft">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
          The Jigglypuff Kingdom
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Cards Collected Stat */}
        <div className="floating-card p-8 text-center transform transition-all duration-300 hover:scale-105">
          <div className="relative w-12 h-12 mx-auto mb-4">
            <Image
              src="/jigglypuff-card.webp"
              alt="Jigglypuff Card"
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <div className="text-4xl font-bold text-pink-600 mb-2">{cardsCollected}</div>
          <div className="text-gray-600 font-medium">Cards Collected</div>
        </div>

        {/* Estimated Total Value Stat */}
        <div className="floating-card p-8 text-center transform transition-all duration-300 hover:scale-105">
          <div className="text-5xl mb-4">💎</div>
          <div className="text-4xl font-bold text-pink-600 mb-2">{estimatedTotalValue}</div>
          <div className="text-gray-600 font-medium">PSA Graded Cards</div>
        </div>

        {/* Next Target Stat */}
        <div className="floating-card p-8 text-center transform transition-all duration-300 hover:scale-105">
          <div className="text-5xl mb-4">🎯</div>
          <div className="text-4xl font-bold text-pink-600 mb-2">{nextTarget}</div>
          <div className="text-gray-600 font-medium">Next Target</div>
        </div>
      </div>
    </section>
  )
}

