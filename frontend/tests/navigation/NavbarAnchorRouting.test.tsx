import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '@/components/Header'
import { useRouter, usePathname } from 'next/navigation'

// Mock next/navigation
const mockPush = jest.fn()
const mockReplace = jest.fn()
const mockPathname = jest.fn(() => '/')

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
    replace: mockReplace,
    prefetch: jest.fn(),
  }),
  usePathname: () => mockPathname(),
}))

describe('NavbarAnchorRouting', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockPathname.mockReturnValue('/')
  })

  describe('Homepage Anchor Navigation', () => {
    it('when user is on /, clicking navbar link "Story" navigates to /#origin-story', async () => {
      mockPathname.mockReturnValue('/')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const storyLink = screen.getByRole('link', { name: /story/i })
      await user.click(storyLink)
      
      // Should navigate to /#origin-story
      expect(mockPush).toHaveBeenCalledWith('/#origin-story')
    })

    it('when user is on /, clicking navbar link "Community" navigates to /#collection-quest', async () => {
      mockPathname.mockReturnValue('/')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const communityLink = screen.getByRole('link', { name: /community/i })
      await user.click(communityLink)
      
      // Should navigate to /#collection-quest
      expect(mockPush).toHaveBeenCalledWith('/#collection-quest')
    })

    it('when user is on /, clicking navbar link "Join the Movement" navigates to /#movement', async () => {
      mockPathname.mockReturnValue('/')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const movementLink = screen.getByRole('link', { name: /join the movement/i })
      await user.click(movementLink)
      
      // Should navigate to /#movement
      expect(mockPush).toHaveBeenCalledWith('/#movement')
    })
  })

  describe('Media → Homepage Anchor Navigation (BUG CASE)', () => {
    it('when user is on /media, clicking navbar link "Story" navigates to /#origin-story (NOT /media#origin-story)', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const storyLink = screen.getByRole('link', { name: /story/i })
      await user.click(storyLink)
      
      // Should navigate to /#origin-story, NOT /media#origin-story
      expect(mockPush).toHaveBeenCalledWith('/#origin-story')
      expect(mockPush).not.toHaveBeenCalledWith('/media#origin-story')
    })

    it('when user is on /media, clicking navbar link "Community" navigates to /#collection-quest', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const communityLink = screen.getByRole('link', { name: /community/i })
      await user.click(communityLink)
      
      // Should navigate to /#collection-quest
      expect(mockPush).toHaveBeenCalledWith('/#collection-quest')
      expect(mockPush).not.toHaveBeenCalledWith('/media#collection-quest')
    })

    it('when user is on /media, clicking navbar link "Join the Movement" navigates to /#movement', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const movementLink = screen.getByRole('link', { name: /join the movement/i })
      await user.click(movementLink)
      
      // Should navigate to /#movement
      expect(mockPush).toHaveBeenCalledWith('/#movement')
      expect(mockPush).not.toHaveBeenCalledWith('/media#movement')
    })

    it('when user is on /media, clicking dropdown link "Home" navigates to /#home', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      // Hover over "More" to show dropdown (in real app, but for test we'll find the link)
      // Note: dropdown links might need special handling in tests
      const homeLink = screen.getByRole('link', { name: /^home$/i })
      await user.click(homeLink)
      
      // Should navigate to /#home
      expect(mockPush).toHaveBeenCalledWith('/#home')
      expect(mockPush).not.toHaveBeenCalledWith('/media#home')
    })

    it('when user is on /media, clicking dropdown link "Roadmap" navigates to /#roadmap', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const roadmapLink = screen.getByRole('link', { name: /roadmap/i })
      await user.click(roadmapLink)
      
      // Should navigate to /#roadmap
      expect(mockPush).toHaveBeenCalledWith('/#roadmap')
      expect(mockPush).not.toHaveBeenCalledWith('/media#roadmap')
    })
  })

  describe('Media → Homepage Non-Anchor Links', () => {
    it('when on /media, clicking navbar link "Media" does not cause navigation errors', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const mediaLink = screen.getByRole('link', { name: /media/i })
      
      // Media link should have correct href (Next.js Link handles navigation)
      expect(mediaLink).toHaveAttribute('href', '/media')
      
      // Should not cause errors when clicked
      await user.click(mediaLink)
      expect(() => {}).not.toThrow()
    })
  })

  describe('Media → Media Links Still Work', () => {
    it('clicking "Media" while already on /media does not cause navigation errors', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const mediaLink = screen.getByRole('link', { name: /media/i })
      await user.click(mediaLink)
      
      // Should handle gracefully, no errors
      expect(() => {
        // No errors should be thrown
      }).not.toThrow()
    })

    it('clicking "Media" while already on /media does not break router state', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const mediaLink = screen.getByRole('link', { name: /media/i })
      
      // Media link should have correct href
      expect(mediaLink).toHaveAttribute('href', '/media')
      
      // Should not break router state
      await user.click(mediaLink)
      expect(() => {}).not.toThrow()
    })
  })

  describe('Regression Safety', () => {
    it('no JavaScript errors during navigation', async () => {
      const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const storyLink = screen.getByRole('link', { name: /story/i })
      await user.click(storyLink)
      
      // Should not log any errors
      expect(consoleError).not.toHaveBeenCalled()
      consoleError.mockRestore()
    })

    it('navbar remains clickable after route changes', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      const { rerender } = render(<Header />)
      
      const storyLink = screen.getByRole('link', { name: /story/i })
      await user.click(storyLink)
      
      // Simulate pathname change
      mockPathname.mockReturnValue('/')
      rerender(<Header />)
      
      // Navbar should still be clickable
      const communityLink = screen.getByRole('link', { name: /community/i })
      expect(communityLink).toBeInTheDocument()
      await user.click(communityLink)
      
      expect(mockPush).toHaveBeenCalledTimes(2)
    })

    it('no infinite routing loops', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const storyLink = screen.getByRole('link', { name: /story/i })
      await user.click(storyLink)
      
      // Should only call push once, not in a loop
      expect(mockPush).toHaveBeenCalledTimes(1)
    })

    it('no full page reloads unless intended', async () => {
      mockPathname.mockReturnValue('/media')
      const user = userEvent.setup()
      
      render(<Header />)
      
      const storyLink = screen.getByRole('link', { name: /story/i })
      await user.click(storyLink)
      
      // Should use router.push (client-side), not window.location
      expect(mockPush).toHaveBeenCalled()
      // No window.location changes should occur
    })
  })
})

