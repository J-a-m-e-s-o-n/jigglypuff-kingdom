import React from 'react'
import { render, screen } from '@testing-library/react'
import MediaPage from '@/app/media/page'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/media'),
}))

describe('MediaDownloads', () => {
  it('each media item includes a Download link', () => {
    render(<MediaPage />)
    const downloadLinks = screen.getAllByRole('button', { name: /download/i })
    expect(downloadLinks.length).toBeGreaterThan(0)
  })

  it('clicking Download uses download attribute', () => {
    render(<MediaPage />)
    const downloadLink = screen.getByRole('main').querySelector('a[download]')
    expect(downloadLink).toBeInTheDocument()
    expect(downloadLink).toHaveAttribute('download')
  })

  it('download links have download attribute to prevent navigation', () => {
    render(<MediaPage />)
    const downloadLinks = screen.getAllByRole('button', { name: /download/i })
    
    downloadLinks.forEach((link) => {
      expect(link).toHaveAttribute('download')
    })
  })

  it('download URL matches the asset source', () => {
    render(<MediaPage />)
    const downloadLink = screen.getByRole('main').querySelector('a[href="/media/JKWalking.mp4"][download]')
    expect(downloadLink).toBeInTheDocument()
    expect(downloadLink).toHaveAttribute('href', '/media/JKWalking.mp4')
  })
})

