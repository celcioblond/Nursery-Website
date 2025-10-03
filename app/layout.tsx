import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maria Lawn Care - Professional Lawn Care Services',
  description: 'Professional lawn care services including landscaping, mowing, weed control, fertilizing, and more. Making your outdoor space beautiful and healthy.',
  keywords: 'lawn care, landscaping, mowing, weed control, fertilizing, Tulsa lawn care',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

