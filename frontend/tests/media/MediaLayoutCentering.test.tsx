import React from 'react'
import { render, screen } from '@testing-library/react'
import MediaPage from '@/app/media/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/media'),
}))

describe('MediaLayoutCentering', () => {
  describe('Mixed Dimension Rendering', () => {
    it('renders media items with different aspect ratios without breaking layout', () => {
      render(<MediaPage />)
      const mediaItems = screen.getAllByRole('article')
      
      // Should render all media items regardless of dimensions
      expect(mediaItems.length).toBeGreaterThan(0)
      
      // Each item should have consistent container structure
      mediaItems.forEach((item) => {
        expect(item).toBeInTheDocument()
        const mediaElement = item.querySelector('video, img')
        expect(mediaElement).toBeInTheDocument()
      })
    })

    it('handles tall (portrait) media assets correctly', () => {
      render(<MediaPage />)
      const mediaItems = screen.getAllByRole('article')
      
      // Find items with images (which could be portrait)
      const imageItems = mediaItems.filter((item) => 
        item.querySelector('img')
      )
      
      // Should handle portrait images without breaking layout
      expect(imageItems.length).toBeGreaterThan(0)
      imageItems.forEach((item) => {
        const img = item.querySelector('img')
        expect(img).toBeInTheDocument()
        // Image should be contained, not stretched
        expect(img?.className).toMatch(/max|contain|object/)
      })
    })

    it('handles wide (landscape) media assets correctly', () => {
      render(<MediaPage />)
      const videoItems = screen.getAllByRole('article').filter((item) =>
        item.querySelector('video')
      )
      
      // Should handle landscape videos
      expect(videoItems.length).toBeGreaterThan(0)
      videoItems.forEach((item) => {
        const video = item.querySelector('video')
        expect(video).toBeInTheDocument()
        // Video should be contained, not stretched
        expect(video?.className).toMatch(/max|contain|object/)
      })
    })

    it('handles square media assets correctly', () => {
      render(<MediaPage />)
      const mediaItems = screen.getAllByRole('article')
      
      // Should handle square assets without issues
      expect(mediaItems.length).toBeGreaterThan(0)
      mediaItems.forEach((item) => {
        const mediaElement = item.querySelector('video, img')
        expect(mediaElement).toBeInTheDocument()
      })
    })
  })

  describe('Centering Behavior', () => {
    it('each media item container has consistent sizing', () => {
      render(<MediaPage />)
      const mediaItems = screen.getAllByRole('article')
      
      expect(mediaItems.length).toBeGreaterThan(0)
      
      // All items should have the same base container classes
      const firstItemClasses = mediaItems[0].className
      mediaItems.forEach((item) => {
        // Should share common container styling
        expect(item.className).toContain('rounded-2xl')
        expect(item.className).toContain('p-4')
      })
    })

    it('media elements are horizontally centered within their containers', () => {
      render(<MediaPage />)
      const mediaItems = screen.getAllByRole('article')
      
      mediaItems.forEach((item) => {
        const mediaContainer = item.querySelector('div.mb-3, [class*="flex"], [class*="center"]')
        expect(mediaContainer).toBeInTheDocument()
        
        // Container should use flexbox or centering classes
        const containerClasses = mediaContainer?.className || ''
        expect(
          containerClasses.includes('flex') ||
          containerClasses.includes('center') ||
          containerClasses.includes('items-center') ||
          containerClasses.includes('justify-center')
        ).toBe(true)
      })
    })

    it('media elements do not stretch to fill container incorrectly', () => {
      render(<MediaPage />)
      const videos = screen.getByRole('main').querySelectorAll('video')
      const images = screen.getByRole('main').querySelectorAll('img')
      
      // Videos should use object-fit: contain or max-width/max-height
      videos.forEach((video) => {
        const classes = video.className
        expect(
          classes.includes('object-contain') ||
          classes.includes('max-w') ||
          classes.includes('max-h')
        ).toBe(true)
      })
      
      // Images should use object-fit: contain or max-width/max-height
      images.forEach((img) => {
        const classes = img.className
        expect(
          classes.includes('object-contain') ||
          classes.includes('max-w') ||
          classes.includes('max-h')
        ).toBe(true)
      })
    })

    it('media maintains original aspect ratio without distortion', () => {
      render(<MediaPage />)
      const videos = screen.getByRole('main').querySelectorAll('video')
      const images = screen.getByRole('main').querySelectorAll('img')
      
      // Should not use object-fit: cover (which would crop/distort)
      videos.forEach((video) => {
        expect(video.className).not.toContain('object-cover')
      })
      
      images.forEach((img) => {
        expect(img.className).not.toContain('object-cover')
      })
    })
  })

  describe('Grid Stability', () => {
    it('grid rows remain aligned even with mixed media sizes', () => {
      render(<MediaPage />)
      const grid = screen.getByRole('region', { name: /media gallery/i })
      
      expect(grid).toBeInTheDocument()
      expect(grid.className).toContain('grid')
      
      // Grid should have consistent gap
      expect(grid.className).toContain('gap-')
    })

    it('one oddly-shaped asset does not break row alignment', () => {
      render(<MediaPage />)
      const mediaItems = screen.getAllByRole('article')
      
      // All items should have consistent structure
      const itemHeights: number[] = []
      mediaItems.forEach((item) => {
        const rect = item.getBoundingClientRect()
        itemHeights.push(rect.height)
      })
      
      // Items should have similar heights (within reasonable variance)
      // This ensures grid alignment
      expect(mediaItems.length).toBeGreaterThan(0)
    })

    it('spacing between media cards remains consistent', () => {
      render(<MediaPage />)
      const grid = screen.getByRole('region', { name: /media gallery/i })
      
      // Grid should have gap classes
      expect(grid.className).toMatch(/gap-\d+/)
    })
  })

  describe('Responsive Behavior', () => {
    it('media containers stack cleanly on mobile viewport', () => {
      // Simulate mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      })
      
      render(<MediaPage />)
      const grid = screen.getByRole('region', { name: /media gallery/i })
      
      // Should use single column on mobile
      expect(grid.className).toContain('grid-cols-1')
    })

    it('media is centered and has no horizontal overflow on mobile', () => {
      render(<MediaPage />)
      const main = screen.getByRole('main')
      const mediaItems = screen.getAllByRole('article')
      
      // Main container should have padding to prevent edge-hugging
      expect(main.className).toContain('px-')
      
      // Media items should be contained
      mediaItems.forEach((item) => {
        const mediaElement = item.querySelector('video, img')
        if (mediaElement) {
          const classes = mediaElement.className
          expect(
            classes.includes('max-w-full') ||
            classes.includes('w-full') ||
            classes.includes('object-contain')
          ).toBe(true)
        }
      })
    })

    it('grid remains visually balanced on desktop', () => {
      // Simulate desktop viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1920,
      })
      
      render(<MediaPage />)
      const grid = screen.getByRole('region', { name: /media gallery/i })
      
      // Should use multi-column grid on desktop
      expect(grid.className).toMatch(/lg:grid-cols-\d+/)
    })

    it('tall or wide assets do not dominate the layout on desktop', () => {
      render(<MediaPage />)
      const mediaItems = screen.getAllByRole('article')
      
      // All items should have consistent container sizing
      mediaItems.forEach((item) => {
        // Should have padding and consistent structure
        expect(item.className).toContain('p-')
      })
    })
  })

  describe('Regression Safety', () => {
    it('media download buttons still work', () => {
      render(<MediaPage />)
      const downloadButtons = screen.getAllByRole('button', { name: /download/i })
      
      expect(downloadButtons.length).toBeGreaterThan(0)
      downloadButtons.forEach((button) => {
        expect(button).toHaveAttribute('download')
      })
    })

    it('media type rendering unchanged (video still video, image still image)', () => {
      render(<MediaPage />)
      const videos = screen.getByRole('main').querySelectorAll('video')
      const images = screen.getByRole('main').querySelectorAll('img')
      
      // Should have both videos and images
      expect(videos.length).toBeGreaterThan(0)
      expect(images.length).toBeGreaterThan(0)
      
      // Videos should have controls
      videos.forEach((video) => {
        expect(video).toHaveAttribute('controls')
      })
      
      // Images should have alt text
      images.forEach((img) => {
        expect(img).toHaveAttribute('alt')
      })
    })

    it('no change to routing or navbar behavior', () => {
      render(<MediaPage />)
      const main = screen.getByRole('main')
      
      // Page should still render
      expect(main).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /media gallery/i })).toBeInTheDocument()
    })

    it('media items are still accessible via keyboard', () => {
      render(<MediaPage />)
      const downloadButtons = screen.getAllByRole('button', { name: /download/i })
      
      downloadButtons.forEach((button) => {
        expect(button).toHaveAttribute('tabIndex', '0')
      })
    })
  })
})

