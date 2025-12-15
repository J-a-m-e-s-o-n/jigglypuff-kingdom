'use client'

export default function CreatorFeeSection() {
  const creatorFeeLink = 'https://pump.fun/coin/AoKgjNMumZ2JjHFaGnrcKSnuTTRqrHWdKHhPMhzjpump' // Replace with actual creator fee page link

  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="floating-card p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent leading-tight">
            Community-Driven. Collector-Fueled.
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
            100% of creator fees from $JIGGLYPUFF fund the mission — growing the 1st Edition Jigglypuff collection and building the JK Index, turning the collection into real tools for collectors everywhere.
          </p>

          <a
            href={creatorFeeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block w-full sm:w-auto"
          >
            View Creator Fees
          </a>
        </div>
      </div>
    </section>
  )
}

