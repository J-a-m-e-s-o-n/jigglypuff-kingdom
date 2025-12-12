'use client'

export default function OriginStorySection() {
  return (
    <section id="origin-story" className="section-container bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="floating-card p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent leading-tight">
            How the Kingdom Began
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
            {/* Card Pile Illustration */}
            <div className="flex-shrink-0 w-full md:w-64 flex justify-center md:justify-start">
              <div className="relative max-w-[90%] md:max-w-none">
                <div className="w-40 h-52 sm:w-48 sm:h-64 bg-gradient-to-br from-pink-200 to-pink-300 rounded-xl sm:rounded-2xl shadow-floating transform rotate-3 border-2 border-pink-300/50"></div>
                <div className="w-40 h-52 sm:w-48 sm:h-64 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl sm:rounded-2xl shadow-floating absolute top-3 left-3 sm:top-4 sm:left-4 transform -rotate-3 border-2 border-pink-200/50"></div>
                <div className="w-40 h-52 sm:w-48 sm:h-64 bg-gradient-to-br from-pink-300 to-pink-400 rounded-xl sm:rounded-2xl shadow-floating absolute top-6 left-6 sm:top-8 sm:left-8 transform rotate-6 border-2 border-pink-400/50"></div>
              </div>
            </div>

            {/* Story Text */}
            <div className="flex-1 space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                A lifelong passion for Pokémon evolved into a community quest: collect every 1st Edition Jigglypuff and make it the most iconic non-holo card in the Jungle set.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                What began as one collector's obsession quickly became a unified Kingdom with a shared mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

