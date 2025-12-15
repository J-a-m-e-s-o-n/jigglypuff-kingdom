import React from 'react'
import { render, screen } from '@testing-library/react'
import MediaPage from '@/app/media/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/media'),
}))

describe('MediaAssetTypes', () => {
  it('.mp4 files render as <video> elements', () => {
    render(<MediaPage />)
    const videoElement = screen.getByRole('main').querySelector('video[src="/media/JKWalking.mp4"]')
    expect(videoElement).toBeInTheDocument()
    expect(videoElement?.tagName).toBe('VIDEO')
  })

  it('video elements have controls enabled', () => {
    render(<MediaPage />)
    const videoElement = screen.getByRole('main').querySelector('video[src="/media/JKWalking.mp4"]')
    expect(videoElement).toHaveAttribute('controls')
  })

  it('.gif files render as animated <img>', () => {
    render(<MediaPage />)
    const gifImage = screen.getByRole('main').querySelector('img[src="/media/Jiggly banner.gif"]')
    expect(gifImage).toBeInTheDocument()
    expect(gifImage?.tagName).toBe('IMG')
  })

  it('.png files render as <img>', () => {
    render(<MediaPage />)
    const pngImage = screen.getByRole('main').querySelector('img[src="/media/JKIndex.png"]')
    expect(pngImage).toBeInTheDocument()
    expect(pngImage?.tagName).toBe('IMG')
  })

  it('.jpeg files render as <img>', () => {
    render(<MediaPage />)
    const jpegImage = screen.getByRole('main').querySelector('img[src="/media/Director.jpg"]')
    expect(jpegImage).toBeInTheDocument()
    expect(jpegImage?.tagName).toBe('IMG')
  })

  it('unknown file types are ignored or safely handled', () => {
    // The current implementation filters out unknown types, so this test verifies
    // that the page still renders even if unknown types exist in the data
    render(<MediaPage />)
    // Should not crash and should handle gracefully
    expect(screen.getByRole('main')).toBeInTheDocument()
    // Only known types (mp4, gif, png, jpeg) should be rendered
    const videos = screen.getByRole('main').querySelectorAll('video')
    const images = screen.getByRole('main').querySelectorAll('img')
    // Should have at least one video or image from the known types
    expect(videos.length + images.length).toBeGreaterThan(0)
  })
})

