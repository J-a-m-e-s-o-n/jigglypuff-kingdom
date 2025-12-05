'use client'

import { useState, useRef, useEffect } from 'react'

// Add your music files to the public/music folder
// Update this array with your actual music files
const tracks = [
  { name: 'Jigglypuff Theme', src: '/music/jigglypuff-theme.mp3' },
  // Add more tracks as needed:
  // { name: 'Kingdom Anthem', src: '/music/kingdom-anthem.mp3' },
]

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMinimized, setIsMinimized] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const shouldLoopRef = useRef(true)

  // Format time to MM:SS
  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Update volume when slider changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  // Handle track end - loop the current track
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
      // Only loop if we should be looping (track was playing)
      if (shouldLoopRef.current) {
        // Restart the current track to create a loop
        audio.currentTime = 0
        audio.play().catch(() => {
          // If auto-play is blocked, user will need to click play again
          setIsPlaying(false)
          shouldLoopRef.current = false
        })
      }
    }

    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [currentTrack])

  // Play/pause toggle
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        shouldLoopRef.current = false
      } else {
        audioRef.current.play()
        shouldLoopRef.current = true
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Skip to next track
  const nextTrack = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1)
    } else {
      setCurrentTrack(0)
    }
    if (audioRef.current) {
      audioRef.current.load()
      if (isPlaying) {
        shouldLoopRef.current = true
        audioRef.current.play()
      }
    }
  }

  // Skip to previous track
  const previousTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1)
    } else {
      setCurrentTrack(tracks.length - 1)
    }
    if (audioRef.current) {
      audioRef.current.load()
      if (isPlaying) {
        shouldLoopRef.current = true
        audioRef.current.play()
      }
    }
  }

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  // Update play state and track time
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleLoadedMetadata = () => setDuration(audio.duration)
    const handleDurationChange = () => setDuration(audio.duration)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('durationchange', handleDurationChange)

    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('durationchange', handleDurationChange)
    }
  }, [])

  // Load new track when currentTrack changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load()
      setCurrentTime(0)
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Auto-play might be blocked, that's okay
          setIsPlaying(false)
        })
      }
    }
  }, [currentTrack])

  // Don't render if no tracks
  if (tracks.length === 0) {
    return null
  }

  return (
    <>
      {/* Audio Element - Always rendered, persists across view changes */}
      <audio
        ref={audioRef}
        src={tracks[currentTrack]?.src}
        preload="auto"
        loop={false}
      />

      {/* Minimized view */}
      {isMinimized ? (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-pink-200/50 p-3 flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white transition-all duration-300 hover:scale-105 shadow-md flex-shrink-0"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Track Name */}
            <p className="text-sm font-semibold text-gray-700 truncate max-w-[120px]">
              {tracks[currentTrack]?.name || 'No Track'}
            </p>

            {/* Expand Button */}
            <button
              onClick={() => setIsMinimized(false)}
              className="p-1.5 rounded-full hover:bg-pink-100 transition-colors flex-shrink-0"
              aria-label="Expand player"
            >
              <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        /* Full view */
        <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-pink-200/50 p-4 min-w-[280px]">
          {/* Header with Minimize Button */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex-1 text-center">
              <p className="text-sm font-semibold text-gray-700 truncate">
                {tracks[currentTrack]?.name || 'No Track'}
              </p>
              <p className="text-xs text-gray-500">
                {currentTrack + 1} / {tracks.length}
              </p>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1.5 rounded-full hover:bg-pink-100 transition-colors ml-2 flex-shrink-0"
              aria-label="Minimize player"
            >
              <svg className="w-4 h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
          </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 mb-3">
          {/* Previous Track */}
          <button
            onClick={previousTrack}
            className="p-2 rounded-full hover:bg-pink-100 transition-colors"
            aria-label="Previous track"
          >
            <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
            </svg>
          </button>

          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="p-3 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white transition-all duration-300 hover:scale-105 shadow-md"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Next Track */}
          <button
            onClick={nextTrack}
            className="p-2 rounded-full hover:bg-pink-100 transition-colors"
            aria-label="Next track"
          >
            <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
            </svg>
          </button>
        </div>

        {/* Timer */}
        <div className="mb-3 text-center">
          <span className="text-xs text-gray-600 font-mono">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="p-1.5 rounded-full hover:bg-pink-100 transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? (
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>

          {/* Volume Slider */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="flex-1 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
            aria-label="Volume"
          />

          {/* Volume Percentage */}
          <span className="text-xs text-gray-600 w-10 text-right">
            {Math.round((isMuted ? 0 : volume) * 100)}%
          </span>
        </div>
        </div>
      </div>
      )}
    </>
  )
}

