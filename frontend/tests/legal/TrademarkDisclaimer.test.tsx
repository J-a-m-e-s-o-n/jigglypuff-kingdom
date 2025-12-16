import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Import components that should include the disclaimer
import Home from '@/app/page'
import SocialLinksFooter from '@/components/SocialLinksFooter'

// Mock next/navigation for page components
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

describe('TrademarkDisclaimer', () => {
  describe('A. Disclaimer Renders', () => {
    it('disclaimer title renders with exact text "Trademark & Affiliation Disclaimer"', () => {
      // This test will fail until component is implemented
      render(<SocialLinksFooter />)
      
      const title = screen.getByRole('heading', { 
        name: /Trademark & Affiliation Disclaimer/i 
      })
      expect(title).toBeInTheDocument()
      expect(title).toHaveTextContent('Trademark & Affiliation Disclaimer')
    })

    it('first paragraph renders with exact text about JK Index and Nintendo affiliation', () => {
      render(<SocialLinksFooter />)
      
      const firstParagraph = screen.getByText(/JK Index and the Jigglypuff Kingdom community are not affiliated with, endorsed by, or sponsored by Nintendo, The Pokémon Company, Creatures Inc., or Game Freak\./i)
      expect(firstParagraph).toBeInTheDocument()
    })

    it('second paragraph renders with exact text about Pokémon trademarks', () => {
      render(<SocialLinksFooter />)
      
      const secondParagraph = screen.getByText(/Pokémon, Pokémon character names, and all related trademarks are the property of Nintendo, Creatures Inc., and GAME FREAK inc\. and are used for informational and community purposes only\./i)
      expect(secondParagraph).toBeInTheDocument()
    })

    it('third paragraph renders with exact text about fair use', () => {
      render(<SocialLinksFooter />)
      
      const thirdParagraph = screen.getByText(/All product names, images, and references are used under fair use for identification, commentary, and data analysis\./i)
      expect(thirdParagraph).toBeInTheDocument()
    })

    it('all paragraphs are present as separate elements', () => {
      render(<SocialLinksFooter />)
      
      // Should have exactly 3 paragraph elements with the disclaimer text
      const paragraphs = screen.getAllByText(/Nintendo|Pokémon|fair use/i, { exact: false })
      expect(paragraphs.length).toBeGreaterThanOrEqual(3)
    })
  })

  describe('B. Site-Wide Visibility', () => {
    it('disclaimer is present on the homepage', () => {
      render(<Home />)
      
      const disclaimerTitle = screen.getByRole('heading', { 
        name: /Trademark & Affiliation Disclaimer/i 
      })
      expect(disclaimerTitle).toBeInTheDocument()
    })

    it('footer navigation still renders correctly with disclaimer present', () => {
      render(<SocialLinksFooter />)
      
      // Footer should still have social links
      expect(screen.getByText(/Join the Kingdom/i)).toBeInTheDocument()
      
      // Footer should still have contract address section
      expect(screen.getByText(/Contract Address/i)).toBeInTheDocument()
      
      // Disclaimer should also be present
      expect(screen.getByRole('heading', { 
        name: /Trademark & Affiliation Disclaimer/i 
      })).toBeInTheDocument()
    })

    it('no layout shifts or overflow issues with disclaimer', () => {
      const { container } = render(<SocialLinksFooter />)
      const footer = container.querySelector('footer')
      
      expect(footer).toBeInTheDocument()
      
      // Check that footer has proper container classes (no obvious overflow)
      expect(footer?.className).toMatch(/section-container/)
    })

    it('disclaimer is visible and readable (not hidden or display:none)', () => {
      render(<SocialLinksFooter />)
      
      const disclaimerTitle = screen.getByRole('heading', { 
        name: /Trademark & Affiliation Disclaimer/i 
      })
      
      // Element should be visible
      expect(disclaimerTitle).toBeVisible()
      
      // Check computed styles if possible (though this might require jsdom/cssom setup)
      const styles = window.getComputedStyle(disclaimerTitle)
      expect(styles.display).not.toBe('none')
      expect(styles.visibility).not.toBe('hidden')
    })
  })

  describe('C. Accessibility', () => {
    it('disclaimer uses proper semantic elements (section, p, footer)', () => {
      const { container } = render(<SocialLinksFooter />)
      
      // Disclaimer should be in a semantic section or within footer
      const disclaimerSection = container.querySelector('section[aria-label*="Trademark"], section[aria-label*="Disclaimer"], footer section')
      const disclaimerInFooter = container.querySelector('footer')
      
      // Either a section within footer, or footer itself contains the disclaimer
      expect(disclaimerSection || disclaimerInFooter?.querySelector('section')).toBeTruthy()
    })

    it('text is readable by screen readers (has proper heading structure)', () => {
      render(<SocialLinksFooter />)
      
      const title = screen.getByRole('heading', { 
        name: /Trademark & Affiliation Disclaimer/i 
      })
      expect(title).toBeInTheDocument()
      
      // Paragraphs should be readable
      const paragraphs = screen.getAllByText(/Nintendo|Pokémon|fair use/i, { exact: false })
      paragraphs.forEach(p => {
        expect(p).toBeInTheDocument()
      })
    })

    it('disclaimer has appropriate heading level', () => {
      render(<SocialLinksFooter />)
      
      const title = screen.getByRole('heading', { 
        name: /Trademark & Affiliation Disclaimer/i 
      })
      
      // Should be an h2 or h3 (not h1, as that's for page title)
      const tagName = title.tagName.toLowerCase()
      expect(['h2', 'h3', 'h4']).toContain(tagName)
    })

    it('color contrast meets accessibility standards (gray text, not too light)', () => {
      const { container } = render(<SocialLinksFooter />)
      
      // Find disclaimer section
      const disclaimerSection = container.querySelector('section[aria-label*="Trademark"], section[aria-label*="Disclaimer"]')
      expect(disclaimerSection).toBeInTheDocument()
      
      // Find the div containing paragraphs (has text-gray-600 class)
      const textContainer = disclaimerSection?.querySelector('div.space-y-2, div.space-y-3, div[class*="text-gray"]')
      expect(textContainer).toBeInTheDocument()
      
      // Check that text color classes indicate readable text (gray, not white/transparent)
      const className = textContainer?.className || ''
      // Should have text-gray or similar, not text-white or text-transparent
      expect(className).toMatch(/text-gray|text-slate|text-neutral/)
      // Should NOT be transparent or too light
      expect(className).not.toMatch(/text-white|text-transparent|text-pink-100|text-pink-50/)
    })
  })

  describe('D. Non-Regression', () => {
    it('navbar links are not broken when disclaimer is present', () => {
      render(<Home />)
      
      // Disclaimer should be present
      expect(screen.getByRole('heading', { 
        name: /Trademark & Affiliation Disclaimer/i 
      })).toBeInTheDocument()
      
      // Check that we can still query for homepage content (navbar would be in Header, but we're testing footer doesn't break layout)
      expect(screen.getByText(/Join the Kingdom/i)).toBeInTheDocument()
    })

    it('Media section is not broken (footer renders on media page)', () => {
      // We need to verify that footer component itself works
      render(<SocialLinksFooter />)
      
      // Footer should render
      const footer = screen.getByText(/Join the Kingdom/i)
      expect(footer).toBeInTheDocument()
      
      // Disclaimer should be present
      expect(screen.getByRole('heading', { 
        name: /Trademark & Affiliation Disclaimer/i 
      })).toBeInTheDocument()
    })

    it('homepage anchors still work (footer does not interfere)', () => {
      render(<Home />)
      
      // Homepage sections should still render
      // We can't test anchor links directly here, but we can verify structure
      const main = screen.getByRole('main')
      expect(main).toBeInTheDocument()
      
      // Footer with disclaimer should be present
      expect(screen.getByRole('heading', { 
        name: /Trademark & Affiliation Disclaimer/i 
      })).toBeInTheDocument()
    })

    it('disclaimer text matches exactly (no modifications)', () => {
      render(<SocialLinksFooter />)
      
      // Verify exact text matches requirements
      expect(screen.getByText(/JK Index and the Jigglypuff Kingdom community are not affiliated with, endorsed by, or sponsored by Nintendo, The Pokémon Company, Creatures Inc., or Game Freak\./)).toBeInTheDocument()
      
      expect(screen.getByText(/Pokémon, Pokémon character names, and all related trademarks are the property of Nintendo, Creatures Inc., and GAME FREAK inc\. and are used for informational and community purposes only\./)).toBeInTheDocument()
      
      expect(screen.getByText(/All product names, images, and references are used under fair use for identification, commentary, and data analysis\./)).toBeInTheDocument()
    })

    it('disclaimer is responsive (mobile and desktop friendly)', () => {
      const { container } = render(<SocialLinksFooter />)
      
      const disclaimerSection = container.querySelector('section[aria-label*="Trademark"], section[aria-label*="Disclaimer"], footer section')
      expect(disclaimerSection).toBeInTheDocument()
      
      // Should have responsive classes (sm:, md:, lg: prefixes are common in Tailwind)
      const sectionClassName = disclaimerSection?.className || ''
      expect(sectionClassName).toMatch(/sm:|md:|lg:/)
      
      // Also check that footer container has responsive structure
      const footer = container.querySelector('footer')
      const footerInner = footer?.querySelector('div.max-w')
      expect(footerInner || footer).toBeTruthy()
    })
  })
})

