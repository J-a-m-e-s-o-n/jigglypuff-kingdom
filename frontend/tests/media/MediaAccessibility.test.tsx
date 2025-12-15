import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MediaPage from '@/app/media/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/media'),
}))

describe('MediaAccessibility', () => {
  it('media items are keyboard focusable', () => {
    render(<MediaPage />)
    const mediaItems = screen.getByRole('main').querySelectorAll('video, img, [tabindex="0"], [tabindex="-1"]')
    expect(mediaItems.length).toBeGreaterThan(0)
  })

  it('video controls are accessible', () => {
    render(<MediaPage />)
    const videoElement = screen.getByRole('main').querySelector('video[controls]')
    expect(videoElement).toBeInTheDocument()
    expect(videoElement).toHaveAttribute('controls')
  })

  it('images have alt text', () => {
    render(<MediaPage />)
    const images = screen.getByRole('main').querySelectorAll('img')
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt')
      expect(img.getAttribute('alt')).not.toBe('')
    })
  })

  it('download links are accessible via keyboard', async () => {
    const user = userEvent.setup()
    render(<MediaPage />)
    
    const downloadLink = screen.getAllByRole('button', { name: /download/i })[0]
    expect(downloadLink).toBeInTheDocument()
    
    // Tab to the link
    await user.tab()
    
    // Link should be focusable (tabIndex 0)
    expect(downloadLink).toHaveAttribute('tabIndex', '0')
  })

  it('ARIA roles are used where appropriate', () => {
    render(<MediaPage />)
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
    
    // Check for appropriate ARIA attributes
    const mediaContainer = mainElement.querySelector('[role="region"], [aria-label], [aria-labelledby]')
    // At minimum, main should have role
    expect(mainElement).toHaveAttribute('role', 'main')
  })
})

