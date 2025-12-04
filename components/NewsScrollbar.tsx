'use client'

import { useEffect, useRef } from 'react'

interface Tweet {
  id: string
  text: string
  author: string
  url: string
  timestamp: string
}

export default function NewsScrollbar() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Preset tweets - replace with actual tweet URLs
  const tweets: Tweet[] = [
    {
      id: '1',
      text: 'Thread 🧵: Growing the Jigglypuff Kingdom IRL',
      author: '@JigglypuffKing_',
      url: 'https://x.com/JigglypuffKing_/status/1996311559841411286',
      timestamp: '2h ago'
    },
    {
      id: '2',
      text: 'They see the vision. Do you?',
      author: '@JigglypuffKing_',
      url: 'https://x.com/JigglypuffKing_/status/1996244306684985576?s=20',
      timestamp: '5h ago'
    },
    {
      id: '3',
      text: 'Listen, she didn’t even have Jigglypuff in her top 3',
      author: '@JigglypuffKing_',
      url: 'https://x.com/JigglypuffKing_/status/1995975483595653167',
      timestamp: '1d ago'
    },
    {
      id: '4',
      text: 'Boots on the ground time.',
      author: '@JigglypuffKing_',
      url: 'https://x.com/JigglypuffKing_/status/1995959715252371956',
      timestamp: '2d ago'
    },
    {
      id: '5',
      text: 'It’s not about my collection, it’s about our collection.',
      author: '@JigglypuffKing_',
      url: 'https://x.com/JigglypuffKing_/status/1995919606104678542',
      timestamp: '3d ago'
    },
  ]

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
    <div className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-gradient-to-r from-pink-500 to-pink-400 text-white py-3 shadow-lg border-b border-pink-300/50">
      <div className="flex items-center overflow-hidden">
        {/* News Label */}
        <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 bg-pink-600/80 backdrop-blur-sm z-10 rounded-r-full shadow-lg border-r-2 border-pink-700/50 relative">
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <span className="text-lg font-bold">📰</span>
            <span className="font-bold text-sm sm:text-base">Latest News</span>
          </div>
          {/* Tube entrance effect */}
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-pink-600/80 to-transparent pointer-events-none"></div>
        </div>

        {/* Scrolling Tweets */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-x-hidden scrollbar-hide relative"
        >
          {/* Fade effect at the entrance */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-pink-500 via-pink-500/80 to-transparent z-10 pointer-events-none"></div>
          <div ref={contentRef} className="flex items-center space-x-8 whitespace-nowrap">
            {tweets.map((tweet) => (
              <a
                key={tweet.id}
                href={tweet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-pink-100 transition-colors duration-200 group flex-shrink-0"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-pink-200 group-hover:text-pink-100">🐦</span>
                  <span className="text-sm sm:text-base font-medium">
                    {tweet.text}
                  </span>
                  <span className="text-pink-200 text-xs sm:text-sm">
                    {tweet.author} • {tweet.timestamp}
                  </span>
                </div>
                <span className="text-pink-200 group-hover:text-white">→</span>
              </a>
            ))}
            {/* Duplicate for seamless loop */}
            {tweets.map((tweet) => (
              <a
                key={`${tweet.id}-dup`}
                href={tweet.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-pink-100 transition-colors duration-200 group flex-shrink-0"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-pink-200 group-hover:text-pink-100">🐦</span>
                  <span className="text-sm sm:text-base font-medium">
                    {tweet.text}
                  </span>
                  <span className="text-pink-200 text-xs sm:text-sm">
                    {tweet.author} • {tweet.timestamp}
                  </span>
                </div>
                <span className="text-pink-200 group-hover:text-white">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

