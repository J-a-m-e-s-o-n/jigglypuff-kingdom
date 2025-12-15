'use client'

import { mediaAssets, MediaAsset } from '@/lib/media'
import { usePathname } from 'next/navigation'

export default function MediaPage() {
  const pathname = usePathname()

  const renderMediaItem = (asset: MediaAsset) => {
    const isVideo = asset.type === 'mp4'
    const isImage = asset.type === 'gif' || asset.type === 'png' || asset.type === 'jpeg'

    if (!isVideo && !isImage) {
      // Unknown file types are ignored
      return null
    }

    return (
      <div
        key={asset.id}
        data-media-item
        className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-pink-200/50 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 flex flex-col"
        role="article"
        aria-label={`Media item: ${asset.title}`}
      >
        <div className="mb-3 flex items-center justify-center min-h-[200px] bg-gray-50/50 rounded-lg">
          {isVideo && (
            <video
              src={asset.src}
              controls
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
              aria-label={asset.title}
            >
              Your browser does not support the video tag.
            </video>
          )}
          {isImage && (
            <img
              src={asset.src}
              alt={asset.title}
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
            />
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700 font-medium truncate flex-1 mr-2">
            {asset.title}
          </span>
          <a
            href={asset.src}
            download={asset.filename}
            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-400 to-pink-500 rounded-full hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
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
      className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent mb-8 text-center">
          Media Gallery
        </h1>

        {mediaAssets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No media files available.</p>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="region"
            aria-label="Media gallery"
          >
            {mediaAssets.map(renderMediaItem)}
          </div>
        )}
      </div>
    </main>
  )
}

