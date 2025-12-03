'use client'

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { CategoryFilterProvider } from '@/contexts/CategoryFilterContext'
import Head from 'next/head'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/icon.svg" type="image/svg+xml" />
        <title>보안뉴스 - 최신 사이버보안 뉴스</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CategoryFilterProvider>{children}</CategoryFilterProvider>
      </body>
    </html>
  )
}
