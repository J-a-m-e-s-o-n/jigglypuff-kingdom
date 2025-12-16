import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'
import { usePathname } from 'next/navigation'

// Mock next/navigation
const mockUsePathname = jest.fn(() => '/')
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
  useRouter: () => ({
    push: mockPush,
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}))

describe('MediaNavIntegration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockUsePathname.mockReturnValue('/')
  })

  it('navbar contains a Media tab/link', () => {
    render(<Header />)
    const mediaLink = screen.getByRole('link', { name: /media/i })
    expect(mediaLink).toBeInTheDocument()
  })

  it('clicking "Media" has href to /media', () => {
    render(<Header />)
    const mediaLink = screen.getByRole('link', { name: /media/i })
    expect(mediaLink).toHaveAttribute('href', '/media')
  })

  it('existing navbar links still function', () => {
    render(<Header />)
    
    // Check that existing links are still present
    expect(screen.getByRole('link', { name: /story/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /community/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /join the movement/i })).toBeInTheDocument()
  })

  it('Media tab is highlighted when active', () => {
    mockUsePathname.mockReturnValue('/media')
    
    render(<Header />)
    const mediaLink = screen.getByRole('link', { name: /media/i })
    
    // Check for active state styling
    expect(mediaLink).toHaveClass('bg-gradient-to-r')
    expect(mediaLink).toHaveClass('from-pink-400')
    expect(mediaLink).toHaveClass('to-pink-500')
    expect(mediaLink).toHaveClass('text-white')
  })
})

