import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Viewport } from 'next'
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] })
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({ subsets: ['vietnamese'], weight: ['400', '700'], display: 'swap' });


export const metadata = {
  title: siteConfig.name,
  description: 'Generated by create next app',
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  )
}