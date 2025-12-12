'use client'

import Image from 'next/image'

export default function HeroSection() {
  const contractAddress = 'AoKgjNMumZ2JjHFaGnrcKSnuTTRqrHWdKHhPMhzjpump' // Replace with actual contract address
  const pumpFunLink = 'https://pump.fun/coin/AoKgjNMumZ2JjHFaGnrcKSnuTTRqrHWdKHhPMhzjpump' // Replace with actual PumpFun link
  const joinQuestLink = '#collection-quest' // Link to collection quest section

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    alert('Contract address copied to clipboard!')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      {/* Animated Background - Clouds and Jigglypuffs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating Clouds */}
        <div className="cloud float-cloud-1 w-20 h-20" style={{ top: '10%' }}></div>
        <div className="cloud float-cloud-2 w-24 h-24" style={{ top: '25%', animationDelay: '-2s' }}></div>
        <div className="cloud float-cloud-3 w-16 h-16" style={{ top: '40%', animationDelay: '-4s' }}></div>
        <div className="cloud float-cloud-4 w-28 h-28" style={{ top: '55%', animationDelay: '-6s' }}></div>
        <div className="cloud float-cloud-1 w-22 h-22" style={{ top: '70%', animationDelay: '-8s' }}></div>
        <div className="cloud float-cloud-2 w-18 h-18" style={{ top: '85%', animationDelay: '-12s' }}></div>
        <div className="cloud float-cloud-3 w-26 h-26" style={{ top: '15%', animationDelay: '-14s' }}></div>
        <div className="cloud float-cloud-4 w-20 h-20" style={{ top: '30%', animationDelay: '-16s' }}></div>
        <div className="cloud float-cloud-1 w-24 h-24" style={{ top: '45%', animationDelay: '-18s' }}></div>
        <div className="cloud float-cloud-2 w-16 h-16" style={{ top: '60%', animationDelay: '-22s' }}></div>
        <div className="cloud float-cloud-3 w-20 h-20" style={{ top: '75%', animationDelay: '-24s' }}></div>
        <div className="cloud float-cloud-4 w-22 h-22" style={{ top: '90%', animationDelay: '-26s' }}></div>

        {/* Floating Jigglypuffs */}
        <div className="float-jigglypuff-1 absolute" style={{ width: '60px', height: '60px', top: '12%' }}>
          <Image
            src="/jigglypuff.webp"
            alt="Jigglypuff"
            fill
            className="object-contain opacity-70"
            sizes="60px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-2 absolute" style={{ width: '50px', height: '50px', top: '28%', animationDelay: '-3s' }}>
          <Image
            src="/jigglypuff.webp"
            alt="Jigglypuff"
            fill
            className="object-contain opacity-60"
            sizes="50px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-3 absolute" style={{ width: '70px', height: '70px', top: '44%', animationDelay: '-6s' }}>
          <Image
            src="/jigglypuff.webp"
            alt="Jigglypuff"
            fill
            className="object-contain opacity-65"
            sizes="70px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-1 absolute" style={{ width: '55px', height: '55px', top: '60%', animationDelay: '-15s' }}>
          <Image
            src="/jigglypuff.webp"
            alt="Jigglypuff"
            fill
            className="object-contain opacity-70"
            sizes="55px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-2 absolute" style={{ width: '65px', height: '65px', top: '76%', animationDelay: '-25s' }}>
          <Image
            src="/jigglypuff.webp"
            alt="Jigglypuff"
            fill
            className="object-contain opacity-60"
            sizes="65px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-3 absolute" style={{ width: '45px', height: '45px', top: '92%', animationDelay: '-35s' }}>
          <Image
            src="/jigglypuff.webp"
            alt="Jigglypuff"
            fill
            className="object-contain opacity-65"
            sizes="45px"
            loading="lazy"
          />
        </div>

        {/* Floating Jiggly (new image) */}
        <div className="float-jigglypuff-1 absolute" style={{ width: '55px', height: '55px', top: '18%', animationDelay: '-5s' }}>
          <Image
            src="/jiggly.webp"
            alt="Jiggly"
            fill
            className="object-contain opacity-65"
            sizes="55px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-2 absolute" style={{ width: '65px', height: '65px', top: '34%', animationDelay: '-10s' }}>
          <Image
            src="/jiggly.webp"
            alt="Jiggly"
            fill
            className="object-contain opacity-60"
            sizes="65px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-3 absolute" style={{ width: '50px', height: '50px', top: '50%', animationDelay: '-20s' }}>
          <Image
            src="/jiggly.webp"
            alt="Jiggly"
            fill
            className="object-contain opacity-70"
            sizes="50px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-1 absolute" style={{ width: '60px', height: '60px', top: '66%', animationDelay: '-30s' }}>
          <Image
            src="/jiggly.webp"
            alt="Jiggly"
            fill
            className="object-contain opacity-65"
            sizes="60px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-2 absolute" style={{ width: '55px', height: '55px', top: '82%', animationDelay: '-40s' }}>
          <Image
            src="/jiggly.webp"
            alt="Jiggly"
            fill
            className="object-contain opacity-60"
            sizes="55px"
            loading="lazy"
          />
        </div>

        {/* Floating Cards */}
        <div className="float-jigglypuff-2 absolute" style={{ width: '80px', height: '100px', top: '8%', animationDelay: '-7s' }}>
          <Image
            src="/jigglypuff-card.webp"
            alt="Jigglypuff Card"
            fill
            className="object-contain opacity-50"
            sizes="80px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-3 absolute" style={{ width: '70px', height: '88px', top: '22%', animationDelay: '-14s' }}>
          <Image
            src="/jigglypuff-card.webp"
            alt="Jigglypuff Card"
            fill
            className="object-contain opacity-45"
            sizes="70px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-1 absolute" style={{ width: '75px', height: '94px', top: '38%', animationDelay: '-17s' }}>
          <Image
            src="/jigglypuff-card.webp"
            alt="Jigglypuff Card"
            fill
            className="object-contain opacity-50"
            sizes="75px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-2 absolute" style={{ width: '65px', height: '81px', top: '54%', animationDelay: '-27s' }}>
          <Image
            src="/jigglypuff-card.webp"
            alt="Jigglypuff Card"
            fill
            className="object-contain opacity-45"
            sizes="65px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-3 absolute" style={{ width: '85px', height: '106px', top: '70%', animationDelay: '-37s' }}>
          <Image
            src="/jigglypuff-card.webp"
            alt="Jigglypuff Card"
            fill
            className="object-contain opacity-50"
            sizes="85px"
            loading="lazy"
          />
        </div>
        <div className="float-jigglypuff-1 absolute" style={{ width: '72px', height: '90px', top: '86%', animationDelay: '-47s' }}>
          <Image
            src="/jigglypuff-card.webp"
            alt="Jigglypuff Card"
            fill
            className="object-contain opacity-45"
            sizes="72px"
            loading="lazy"
          />
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10 text-center px-4">
        <div className="floating-card p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
          {/* Main Header */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 bg-clip-text text-transparent leading-tight">
            Jigglypuff Kingdom
          </h1>
          
          {/* Subheader */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 font-medium leading-relaxed">
            A unified community with one mission.
          </p>

          {/* Jigglypuff Card Image */}
          <div className="mb-6 sm:mb-8 flex justify-center items-center relative">
            {/* Pink Aura Behind Card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="card-aura absolute w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] bg-gradient-to-r from-pink-400/40 via-pink-500/50 to-pink-400/40 rounded-full blur-3xl"></div>
              <div className="card-aura absolute w-56 h-72 sm:w-72 sm:h-[22rem] md:w-[22rem] md:h-[26rem] bg-gradient-to-r from-pink-300/50 via-pink-400/60 to-pink-300/50 rounded-full blur-2xl" style={{ animationDelay: '0.5s' }}></div>
              <div className="card-aura absolute w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-96 bg-gradient-to-r from-pink-200/60 via-pink-300/70 to-pink-200/60 rounded-full blur-xl" style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Card Container with Float Animation */}
            <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96 card-float z-10 max-w-[90vw]">
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl shadow-floating-lg overflow-hidden border-2 sm:border-4 border-pink-300/50 bg-gradient-to-br from-pink-100 to-pink-200">
                <Image
                  src="/jigglypuff-card.webp"
                  alt="1st Edition Jigglypuff Card"
                  fill
                  className="object-contain p-2 rounded-2xl sm:rounded-3xl"
                  priority
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
          </div>

          {/* Contract Address */}
          <div className="mb-6 sm:mb-8">
            <label className="block text-xs sm:text-sm font-semibold text-gray-600 mb-2">
              Contract Address
            </label>
            <div className="flex items-center justify-center gap-2 bg-gray-50 rounded-xl p-2.5 sm:p-3 border border-pink-200 max-w-full sm:max-w-md mx-auto">
              <code className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-mono flex-1 break-all sm:truncate text-center sm:text-left px-1">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="text-pink-500 hover:text-pink-600 active:scale-95 px-2 sm:px-3 py-1 rounded-lg hover:bg-pink-50 transition-all duration-120 flex-shrink-0"
                title="Copy to clipboard"
                aria-label="Copy contract address"
              >
                📋
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
            <a
              href={pumpFunLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto text-center"
            >
              Buy $JIGGLYPUFF
            </a>
            <a
              href={joinQuestLink}
              className="btn-secondary w-full sm:w-auto text-center"
            >
              Join the Quest
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

