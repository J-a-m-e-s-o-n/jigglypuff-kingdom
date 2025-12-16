'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    router.push(`/${hash}`)
  }

  const navLinks = [
    { name: 'Story', href: '#origin-story', isHash: true },
    { name: 'Community', href: '#collection-quest', isHash: true },
    { name: 'Join the Movement', href: '#movement', isHash: true },
    { name: 'Media', href: '/media', isHash: false },
  ]

  const subLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection Quest', href: '#collection-quest' },
    { name: 'Getting Started', href: '#getting-started' },
    { name: 'About', href: '#about' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-pink-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 max-h-[60px] sm:max-h-none">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleHashClick(e, '#home')}
              className="flex items-center space-x-1.5 sm:space-x-2 group"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/jigglypuff.webp"
                  alt="Jigglypuff"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
                $JIGGLYPUFF
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3">
            {navLinks.map((link, index) => {
              const isActive = !link.isHash && pathname === link.href
              const className = `px-5 py-2.5 text-gray-700 hover:text-white font-medium rounded-full bg-white/80 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500 border border-pink-200/50 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                isActive ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white' : ''
              } ${
                index === 0 ? 'bubble-float' : index === 1 ? 'bubble-float-delay-1' : index === 2 ? 'bubble-float-delay-2' : ''
              }`
              const style = {
                boxShadow: '0 8px 16px rgba(244, 114, 182, 0.4), 0 4px 8px rgba(244, 114, 182, 0.3)',
              }
              
              if (link.isHash) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleHashClick(e, link.href)}
                    className={className}
                    style={style}
                  >
                    {link.name}
                  </a>
                )
              }
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={className}
                  style={style}
                >
                  {link.name}
                </Link>
              )
            })}
            
            {/* Dropdown for sublinks */}
            <div className="relative group">
              <button className="px-5 py-2.5 text-gray-700 hover:text-white font-medium rounded-full bg-white/80 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500 shadow-md hover:shadow-lg border border-pink-200/50 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center">
                More
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full right-0 mt-3 w-52 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-pink-100/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                <div className="py-2">
                  {subLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleHashClick(e, link.href)}
                      className="block px-5 py-2.5 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500 transition-all duration-200 mx-1 rounded-full"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-pink-600 rounded-lg hover:bg-pink-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-pink-100/50 mt-2 pt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => {
                const isActive = !link.isHash && pathname === link.href
                const className = `px-5 py-3 text-gray-700 hover:text-white font-medium rounded-full bg-white/80 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500 border border-pink-200/50 hover:border-pink-400/50 transition-all duration-300 active:scale-95 backdrop-blur-sm ${
                  isActive ? 'bg-gradient-to-r from-pink-400 to-pink-500 text-white' : ''
                } ${
                  index === 0 ? 'bubble-float' : index === 1 ? 'bubble-float-delay-1' : index === 2 ? 'bubble-float-delay-2' : ''
                }`
                const style = {
                  boxShadow: '0 8px 16px rgba(244, 114, 182, 0.4), 0 4px 8px rgba(244, 114, 182, 0.3)',
                }
                
                if (link.isHash) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        handleHashClick(e, link.href)
                        setIsMenuOpen(false)
                      }}
                      className={className}
                      style={style}
                    >
                      {link.name}
                    </a>
                  )
                }
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={className}
                    style={style}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="px-5 py-2 text-gray-500 font-semibold text-sm uppercase tracking-wide mt-2">
                More
              </div>
              {subLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleHashClick(e, link.href)
                    setIsMenuOpen(false)
                  }}
                  className="px-5 py-3 ml-4 text-gray-700 hover:text-white font-medium rounded-full bg-white/80 hover:bg-gradient-to-r hover:from-pink-400 hover:to-pink-500 shadow-md hover:shadow-lg border border-pink-200/50 hover:border-pink-400/50 transition-all duration-300 active:scale-95 backdrop-blur-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

