'use client'

export default function GettingStartedSection() {
  const phantomLink = 'https://phantom.app' // Phantom wallet download link

  const steps = [
    {
      number: 1,
      title: 'Download Phantom',
      description: 'Get the Phantom wallet extension for your browser or mobile app.',
      icon: '👻',
    },
    {
      number: 2,
      title: 'Add SOL',
      description: 'Fund your wallet with SOL to purchase $JIGGLYPUFF tokens.',
      icon: '💰',
    },
    {
      number: 3,
      title: 'Swap for $JIGGLYPUFF',
      description: 'Swap your SOL for $JIGGLYPUFF tokens directly in phantom using our contract address.',
      icon: '🔄',
    },
    {
      number: 4,
      title: 'Join the Mission',
      description: 'You\'re now part of the Kingdom! Every trade supports the collection.',
      icon: '👑',
    },
  ]

  return (
    <section id="getting-started" className="section-container bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
          New to Solana or Phantom?
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Follow these simple steps to join the Jigglypuff Kingdom
        </p>

        <div className="space-y-6 mb-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="floating-card p-6 flex items-start gap-6 transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  {step.icon}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-pink-500">0{step.number}</span>
                  <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={phantomLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Download Phantom
          </a>
        </div>
      </div>
    </section>
  )
}

