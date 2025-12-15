'use client'

import { useEffect, useRef } from 'react'

export default function NewsScrollbar() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const jkIndexLinks = {
    viewIndex: 'https://jkindex.io',
    learnMore: 'https://docs.jkindex.io'
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    const content = contentRef.current
    if (!scrollContainer || !content) return

    let scrollPosition = 0
    let animationId: number | null = null
    const scrollSpeed = 0.5 // Adjust speed (pixels per frame)

    const scroll = () => {
      const contentWidth = content.scrollWidth / 2 // Since we duplicate content
      
      if (contentWidth > 0) {
        scrollPosition += scrollSpeed
        
        // Reset scroll position when it reaches halfway (end of first set)
        if (scrollPosition >= contentWidth) {
          scrollPosition = 0
        }
        
        scrollContainer.scrollLeft = scrollPosition
      }
      
      animationId = requestAnimationFrame(scroll)
    }

    // Start scrolling after a small delay to ensure content is rendered
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(scroll)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      if (animationId !== null) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="fixed top-14 sm:top-16 md:top-20 left-0 right-0 z-40 bg-gradient-to-r from-pink-500 to-pink-400 text-white py-2 sm:py-3 shadow-lg border-b border-pink-300/50">
      <div className="flex items-center overflow-hidden">
        {/* JK Index Label */}
        <div className="flex-shrink-0 px-3 sm:px-4 md:px-6 lg:px-8 bg-pink-600/80 backdrop-blur-sm z-10 rounded-r-full shadow-lg border-r-2 border-pink-700/50 relative">
          <div className="flex items-center space-x-1.5 sm:space-x-2 whitespace-nowrap">
            <span className="text-base sm:text-lg font-bold">🚧</span>
            <span className="font-bold text-xs sm:text-sm md:text-base">JK Index</span>
          </div>
          {/* Tube entrance effect */}
          <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 bg-gradient-to-r from-pink-600/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Scrolling Content */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-x-hidden scrollbar-hide relative"
        >
          {/* Fade effect at the entrance */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-pink-500 via-pink-500/80 to-transparent z-10 pointer-events-none"></div>
          <div ref={contentRef} className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 whitespace-nowrap">
            {/* First set */}
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 flex-shrink-0">
              <span className="text-xs sm:text-sm md:text-base font-medium">
                We're building the JK Index — a real-time pricing & data platform for Pokémon collectors.
              </span>
              <a
                href={jkIndexLinks.viewIndex}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 border border-white/30"
              >
                View JK Index →
              </a>
              <a
                href={jkIndexLinks.learnMore}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 border border-white/30"
              >
                Learn More →
              </a>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 flex-shrink-0">
              <span className="text-xs sm:text-sm md:text-base font-medium">
                We're building the JK Index — a real-time pricing & data platform for Pokémon collectors.
              </span>
              <a
                href={jkIndexLinks.viewIndex}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 border border-white/30"
              >
                View JK Index →
              </a>
              <a
                href={jkIndexLinks.learnMore}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-1 sm:py-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 border border-white/30"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
