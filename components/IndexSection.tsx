'use client'

import Image from 'next/image'

export default function IndexSection() {
  return (
    <section className="section-container bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="floating-card p-6 sm:p-8 md:p-12">
          {/* Header with Logo */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mb-4 sm:mb-6">
              <div className="relative w-full h-full">
                <Image
                  src="/index-logo.webp"
                  alt="Jigglypuff Kingdom Index Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                  loading="lazy"
                />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent leading-tight px-2">
              ⭐ Introducing the Jigglypuff Kingdom Index
            </h2>
          </div>

          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700">
            <p className="text-lg sm:text-xl font-semibold text-center text-gray-800 leading-relaxed">
              The Kingdom isn't just collecting — we're building.
            </p>

            <p className="leading-relaxed">
              We're developing the <strong className="text-pink-600">Jigglypuff Kingdom Index</strong>, a real-time data platform for Pokémon collectors:
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6 sm:my-8">
              <div className="bg-pink-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-100">
                <div className="text-2xl sm:text-3xl mb-2">📊</div>
                <h3 className="font-bold text-pink-600 mb-2 text-sm sm:text-base">Multi-market price tracking</h3>
                <p className="text-xs sm:text-sm text-gray-600">Real-time pricing from major marketplaces</p>
              </div>

              <div className="bg-pink-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-100">
                <div className="text-2xl sm:text-3xl mb-2">📈</div>
                <h3 className="font-bold text-pink-600 mb-2 text-sm sm:text-base">Sales history</h3>
                <p className="text-xs sm:text-sm text-gray-600">Complete transaction records</p>
              </div>

              <div className="bg-pink-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-100">
                <div className="text-2xl sm:text-3xl mb-2">🚀</div>
                <h3 className="font-bold text-pink-600 mb-2 text-sm sm:text-base">Market momentum</h3>
                <p className="text-xs sm:text-sm text-gray-600">Track trends and movements</p>
              </div>

              <div className="bg-pink-50/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-100">
                <div className="text-2xl sm:text-3xl mb-2">🔍</div>
                <h3 className="font-bold text-pink-600 mb-2 text-sm sm:text-base">Card-level analytics</h3>
                <p className="text-xs sm:text-sm text-gray-600">Detailed insights per card</p>
              </div>
            </div>

            <p className="text-center text-base sm:text-lg font-medium text-gray-800 leading-relaxed">
              It's the first step toward a transparent, community-driven pricing layer for the entire Pokémon space.
            </p>

            {/* The Loop */}
            <div className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-pink-200">
              <div className="bg-gradient-to-r from-pink-50 to-pink-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-pink-200">
                <div className="space-y-2 sm:space-y-3 text-center">
                  <p className="text-sm sm:text-base text-gray-800 font-semibold leading-relaxed">
                    <span className="text-pink-600">The card</span> fuels the token.
                  </p>
                  <p className="text-sm sm:text-base text-gray-800 font-semibold leading-relaxed">
                    <span className="text-pink-600">The token</span> fuels the collection.
                  </p>
                  <p className="text-sm sm:text-base text-gray-800 font-semibold leading-relaxed">
                    <span className="text-pink-600">The collection</span> fuels the tools we're building for collectors everywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-6 sm:mt-8">
              <a
                href="https://jigglypuffindex.company/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block w-full sm:w-auto"
              >
                Explore the Index
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

