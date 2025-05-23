import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'High G Solutions | Digital Thread Consulting for Defense Systems',
  description: 'Leveraging deep expertise in weapon systems engineering, high-G environments, and ballistic modeling to accelerate precision fires and cannon-based air defense development.',
  keywords: 'defense consulting, digital engineering, ballistic systems, precision fires, weapon systems, DEVCOM AC, digital thread',
  authors: [{ name: 'Jason Foultz', url: 'https://highgsolutions.com' }],
  openGraph: {
    title: 'High G Solutions | Digital Thread Consulting for Defense Systems',
    description: 'Leveraging deep expertise in weapon systems engineering, high-G environments, and ballistic modeling to accelerate precision fires and cannon-based air defense development.',
    url: 'https://highgsolutions.com',
    siteName: 'High G Solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 