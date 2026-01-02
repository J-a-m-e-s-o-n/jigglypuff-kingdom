'use client'

import { mediaAssets, MediaAsset } from '@/lib/media'
import { usePathname } from 'next/navigation'

export default function MediaPage() {
  const pathname = usePathname()

  // Separate images and videos
  const images = mediaAssets.filter(asset => asset.type === 'gif' || asset.type === 'png' || asset.type === 'jpeg')
  const videos = mediaAssets.filter(asset => asset.type === 'mp4' || asset.type === 'mov')

  const renderMediaItem = (asset: MediaAsset) => {
    const isVideo = asset.type === 'mp4' || asset.type === 'mov'
    const isImage = asset.type === 'gif' || asset.type === 'png' || asset.type === 'jpeg'

    if (!isVideo && !isImage) {
      // Unknown file types are ignored
      return null
    }

    return (
      <div
        key={asset.id}
        data-media-item
        className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-pink-200/50 hover:border-pink-400/50 transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 flex flex-col"
        role="article"
        aria-label={`Media item: ${asset.title}`}
      >
        <div className="mb-2 sm:mb-3 flex items-center justify-center min-h-[150px] sm:min-h-[200px] md:min-h-[250px] bg-gray-50/50 rounded-lg sm:rounded-xl overflow-hidden">
          {isVideo && (
            <video
              src={asset.src}
              controls
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
              aria-label={asset.title}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          )}
          {isImage && (
            <img
              src={asset.src}
              alt={asset.title}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
              loading="lazy"
            />
          )}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <span className="text-xs sm:text-sm text-gray-700 font-medium break-words sm:truncate sm:flex-1 sm:mr-2">
            {asset.title}
          </span>
          <a
            href={asset.src}
            download={asset.filename}
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-pink-400 to-pink-500 rounded-full hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg text-center whitespace-nowrap min-h-[36px] sm:min-h-[40px] flex items-center justify-center"
            role="button"
            tabIndex={0}
            aria-label={`Download ${asset.title}`}
          >
            Download
          </a>
        </div>
      </div>
    )
  }

  return (
    <main
      role="main"
      className="min-h-screen pt-16 sm:pt-20 pb-8 sm:pb-12 px-3 sm:px-4 md:px-6 lg:px-8 overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent mb-6 sm:mb-8 text-center px-2">
          Media Gallery
        </h1>

        {mediaAssets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-base sm:text-lg">No media files available.</p>
          </div>
        ) : (
          <div className="space-y-8 sm:space-y-12">
            {/* Images Section */}
            {images.length > 0 && (
              <section aria-labelledby="images-heading" className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 px-2">
                  <h2
                    id="images-heading"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 sm:gap-3"
                  >
                    <span className="text-2xl sm:text-3xl">🖼️</span>
                    <span>Images</span>
                    <span className="text-sm sm:text-base font-normal text-gray-500">({images.length})</span>
                  </h2>
                </div>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
                  role="region"
                  aria-label="Images gallery"
                >
                  {images.map(renderMediaItem)}
                </div>
              </section>
            )}

            {/* Videos Section */}
            {videos.length > 0 && (
              <section aria-labelledby="videos-heading" className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 px-2">
                  <h2
                    id="videos-heading"
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 sm:gap-3"
                  >
                    <span className="text-2xl sm:text-3xl">🎬</span>
                    <span>Videos</span>
                    <span className="text-sm sm:text-base font-normal text-gray-500">({videos.length})</span>
                  </h2>
                </div>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
                  role="region"
                  aria-label="Videos gallery"
                >
                  {videos.map(renderMediaItem)}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
