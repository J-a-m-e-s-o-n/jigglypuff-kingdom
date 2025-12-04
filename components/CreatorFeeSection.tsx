'use client'

export default function CreatorFeeSection() {
  const creatorFeeLink = 'https://pump.fun/coin/AoKgjNMumZ2JjHFaGnrcKSnuTTRqrHWdKHhPMhzjpump' // Replace with actual creator fee page link

  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="floating-card p-8 sm:p-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
            Community-Driven. Collector-Fueled.
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            100% of creator fees from $JIGGLYPUFF go directly toward buying more 1st Edition Jigglypuff cards — strengthening the narrative, the collection, and the kingdom.
          </p>

          <a
            href={creatorFeeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            View Creator Fees
          </a>
        </div>
      </div>
    </section>
  )
}

