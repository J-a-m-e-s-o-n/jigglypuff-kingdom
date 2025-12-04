'use client'

export default function MovementSection() {
  return (
    <section id="movement" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="floating-card p-8 sm:p-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
            The Jigglypuff Movement
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <div className="bg-pink-50/50 rounded-2xl p-6 border border-pink-100">
              <h3 className="font-bold text-pink-600 mb-3 text-xl">The Launch</h3>
              <p>
                The token launched as a way to unite collectors and enthusiasts around a shared mission. Every trade, every holder, every moment contributes to the growing legend of the Jigglypuff Kingdom.
              </p>
            </div>

            <div className="bg-pink-50/50 rounded-2xl p-6 border border-pink-100">
              <h3 className="font-bold text-pink-600 mb-3 text-xl">The Loop</h3>
              <p className="mb-4">
                <strong className="text-pink-600">Every trade fuels the mission.</strong> When you buy or sell $JIGGLYPUFF, you're directly contributing to the collection.
              </p>
              <p>
                <strong className="text-pink-600">100% of creator fees go directly to buying more 1st Edition Jigglypuffs.</strong> This creates a powerful loop: collectors → holders → card accumulation → lore growth → stronger community.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-sm text-gray-600">Collectors</div>
              </div>
              <div className="text-pink-400 text-2xl">→</div>
              <div className="text-center">
                <div className="text-3xl mb-2">💎</div>
                <div className="text-sm text-gray-600">Holders</div>
              </div>
              <div className="text-pink-400 text-2xl">→</div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎴</div>
                <div className="text-sm text-gray-600">Cards</div>
              </div>
              <div className="text-pink-400 text-2xl">→</div>
              <div className="text-center">
                <div className="text-3xl mb-2">✨</div>
                <div className="text-sm text-gray-600">Lore</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

