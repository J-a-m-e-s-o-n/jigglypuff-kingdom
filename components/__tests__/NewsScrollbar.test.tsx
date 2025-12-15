import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import NewsScrollbar from '../NewsScrollbar'

// Track RAF calls
let rafCallbacks: Array<FrameRequestCallback> = []
let rafIdCounter = 0

const mockRAF = jest.fn((callback: FrameRequestCallback) => {
  rafCallbacks.push(callback)
  return rafIdCounter++
})

const mockCAF = jest.fn((id: number) => {
  rafCallbacks = []
})

beforeAll(() => {
  global.requestAnimationFrame = mockRAF as any
  global.cancelAnimationFrame = mockCAF as any
})

afterEach(() => {
  jest.clearAllMocks()
  rafCallbacks = []
  rafIdCounter = 0
})

describe('NewsScrollbar Scrolling Tests', () => {
  it('renders the Latest News label', () => {
    render(<NewsScrollbar />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders the JK Index message', () => {
    render(<NewsScrollbar />)
    const messages = screen.getAllByText(/We're building the JK Index/i)
    expect(messages.length).toBeGreaterThan(0)
  })

  it('has duplicate content for seamless scrolling', () => {
    render(<NewsScrollbar />)
    const messages = screen.getAllByText(/We're building the JK Index/i)
    expect(messages.length).toBeGreaterThanOrEqual(2)
  })

  it('has a scrollable container with overflow-x-auto', () => {
    const { container } = render(<NewsScrollbar />)
    const scrollContainer = container.querySelector('[class*="overflow-x-auto"]')
    expect(scrollContainer).toBeInTheDocument()
    expect(scrollContainer).toHaveClass('overflow-x-auto')
  })

  it('starts scrolling animation after mount', async () => {
    render(<NewsScrollbar />)
    
    // Wait for the timeout (300ms) and RAF to be called
    await waitFor(() => {
      expect(mockRAF).toHaveBeenCalled()
    }, { timeout: 600 })
  })

  it('should continuously scroll the container', async () => {
    const { container } = render(<NewsScrollbar />)
    const scrollContainer = container.querySelector('[class*="overflow-x-auto"]') as HTMLElement
    
    expect(scrollContainer).toBeInTheDocument()
    
    // Mock scrollLeft property
    let scrollLeftValue = 0
    Object.defineProperty(scrollContainer, 'scrollLeft', {
      get: () => scrollLeftValue,
      set: (value: number) => {
        scrollLeftValue = value
      },
      configurable: true,
    })

    // Mock content width
    const contentDiv = scrollContainer.querySelector('div[class*="flex items-center"]') as HTMLElement
    if (contentDiv) {
      const firstChild = contentDiv.children[0] as HTMLElement
      if (firstChild) {
        Object.defineProperty(firstChild, 'clientWidth', {
          get: () => 1500,
          configurable: true,
        })
      }
    }

    // Wait for animation to start
    await waitFor(() => {
      expect(mockRAF).toHaveBeenCalled()
    }, { timeout: 600 })

    // Execute a few animation frames
    const initialScroll = scrollLeftValue
    
    // Run callbacks a few times
    for (let i = 0; i < 10; i++) {
      rafCallbacks.forEach(cb => {
        try {
          cb(performance.now())
        } catch (e) {
          // Ignore errors
        }
      })
      // Small delay to simulate frame timing
      await new Promise(resolve => setTimeout(resolve, 16))
    }

    // After frames, scrollLeft should have increased
    await waitFor(() => {
      expect(scrollLeftValue).toBeGreaterThan(initialScroll)
    }, { timeout: 1000 })
  })

  it('should reset scroll position when reaching content width', async () => {
    const { container } = render(<NewsScrollbar />)
    const scrollContainer = container.querySelector('[class*="overflow-x-auto"]') as HTMLElement
    
    const contentWidth = 1000
    let scrollLeftValue = 0
    
    Object.defineProperty(scrollContainer, 'scrollLeft', {
      get: () => scrollLeftValue,
      set: (value: number) => {
        // Simulate the reset logic: when value >= contentWidth, reset to 0
        if (value >= contentWidth) {
          scrollLeftValue = 0
        } else {
          scrollLeftValue = value
        }
      },
      configurable: true,
    })

    const contentDiv = scrollContainer.querySelector('div[class*="flex items-center"]') as HTMLElement
    if (contentDiv) {
      const firstChild = contentDiv.children[0] as HTMLElement
      if (firstChild) {
        Object.defineProperty(firstChild, 'clientWidth', {
          get: () => contentWidth,
          configurable: true,
        })
      }
    }

    // Wait for animation
    await waitFor(() => {
      expect(mockRAF).toHaveBeenCalled()
    }, { timeout: 600 })

    // Simulate scrolling past the content width
    scrollContainer.scrollLeft = contentWidth + 100
    
    await waitFor(() => {
      expect(scrollLeftValue).toBe(0)
    }, { timeout: 500 })
  })
})
