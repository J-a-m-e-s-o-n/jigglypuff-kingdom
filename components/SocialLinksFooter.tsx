'use client'

export default function SocialLinksFooter() {
  // Replace with actual social media links
  const socialLinks = {
    jigglypuffKing: 'https://x.com/JigglypuffKing_', // Replace with actual X profile
    community: 'https://x.com/i/communities/1994831733418799281', // Replace with actual community X
    buyToken: 'https://pump.fun/coin/AoKgjNMumZ2JjHFaGnrcKSnuTTRqrHWdKHhPMhzjpump', // Replace with actual PumpFun link
  }

  return (
    <footer className="section-container bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-4xl mx-auto">
        {/* Social Links Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
            Join the Kingdom
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={socialLinks.jigglypuffKing}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-card px-6 py-4 hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">👑</span>
                <span className="font-semibold text-gray-700">Jigglypuff King</span>
              </div>
            </a>

            <a
              href={socialLinks.community}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-card px-6 py-4 hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐦</span>
                <span className="font-semibold text-gray-700">X Community</span>
              </div>
            </a>

            <a
              href={socialLinks.buyToken}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-card px-6 py-4 hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-pink-400 to-pink-500 text-white"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span className="font-semibold">Buy Token</span>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center pt-8 border-t border-pink-200">
          <p className="text-gray-600 text-sm">
            © 2024 Jigglypuff Kingdom. Community-powered.
          </p>
        </div>
      </div>
    </footer>
  )
}

