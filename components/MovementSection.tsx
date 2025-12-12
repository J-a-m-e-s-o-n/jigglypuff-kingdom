'use client'

export default function MovementSection() {
  return (
    <section id="movement" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="floating-card p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent leading-tight">
            The Jigglypuff Movement
          </h2>
          
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700">
            <div className="bg-pink-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-100">
              <h3 className="font-bold text-pink-600 mb-2 sm:mb-3 text-lg sm:text-xl">The Launch</h3>
              <p className="leading-relaxed">
                The token launched as a way to unite collectors and enthusiasts around a shared mission. Every trade, every holder, every moment contributes to the growing legend of the Jigglypuff Kingdom.
              </p>
            </div>

            <div className="bg-pink-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-100">
              <h3 className="font-bold text-pink-600 mb-2 sm:mb-3 text-lg sm:text-xl">The Loop</h3>
              <p className="mb-3 sm:mb-4 leading-relaxed">
                <strong className="text-pink-600">Every trade fuels the mission.</strong> When you buy or sell $JIGGLYPUFF, you're directly contributing to the collection.
              </p>
              <p className="leading-relaxed">
                <strong className="text-pink-600">100% of creator fees go directly to buying more 1st Edition Jigglypuffs.</strong> This creates a powerful loop: collectors → holders → card accumulation → lore growth → stronger community.
              </p>
            </div>

            {/* Vertical flow on mobile, horizontal on larger screens */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
              <div className="text-center flex-shrink-0">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">👥</div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Collectors</div>
              </div>
              <div className="text-pink-400 text-xl sm:text-2xl rotate-90 sm:rotate-0">→</div>
              <div className="text-center flex-shrink-0">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">💎</div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Holders</div>
              </div>
              <div className="text-pink-400 text-xl sm:text-2xl rotate-90 sm:rotate-0">→</div>
              <div className="text-center flex-shrink-0">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">🎴</div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Cards</div>
              </div>
              <div className="text-pink-400 text-xl sm:text-2xl rotate-90 sm:rotate-0">→</div>
              <div className="text-center flex-shrink-0">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">✨</div>
                <div className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Lore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

