import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import NewsScrollbar from '@/components/NewsScrollbar'
import MusicPlayer from '@/components/MusicPlayer'
import { Analytics } from '@vercel/analytics/next'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Jigglypuff Kingdom - A Community Quest',
  description: 'A whole community with one mission: collect every 1st Edition Jigglypuff and make it the most iconic non-holo card in the Jungle set.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <Header />
        <NewsScrollbar />
        {children}
        <MusicPlayer />
        <Analytics />
      </body>
    </html>
  )
}

