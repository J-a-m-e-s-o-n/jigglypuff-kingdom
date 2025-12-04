'use client'

export default function OriginStorySection() {
  return (
    <section id="origin-story" className="section-container bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="floating-card p-8 sm:p-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
            How the Kingdom Began
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Card Pile Illustration */}
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="relative">
                <div className="w-48 h-64 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl shadow-floating transform rotate-3 border-2 border-pink-300/50"></div>
                <div className="w-48 h-64 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-floating absolute top-4 left-4 transform -rotate-3 border-2 border-pink-200/50"></div>
                <div className="w-48 h-64 bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl shadow-floating absolute top-8 left-8 transform rotate-6 border-2 border-pink-400/50"></div>
              </div>
            </div>

            {/* Story Text */}
            <div className="flex-1">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                A lifelong passion for Pokémon evolved into a community quest: collect every 1st Edition Jigglypuff and make it the most iconic non-holo card in the Jungle set. What began as one collector's obsession quickly became a unified Kingdom with a shared mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

