
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'St. Catharines Pressure Washing | Professional Cleaning Services Niagara',
  description: 'Professional pressure washing services in St. Catharines and Niagara region. Driveways, house washing, deck cleaning, oil stain removal. Free quotes, lowest price guarantee. Call (365) 880-8272',
  keywords: 'pressure washing St. Catharines, house washing Niagara, driveway cleaning, deck cleaning, oil stain removal, siding cleaning, roof cleaning, Niagara region',
  authors: [{ name: 'St. Catharines Pressure Washing' }],
  creator: 'St. Catharines Pressure Washing',
  publisher: 'St. Catharines Pressure Washing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stcatharinespressurewashing.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'St. Catharines Pressure Washing | Professional Cleaning Services',
    description: 'Professional pressure washing services in St. Catharines and Niagara region. Free quotes, lowest price guarantee.',
    url: 'https://stcatharinespressurewashing.ca',
    siteName: 'St. Catharines Pressure Washing',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'St. Catharines Pressure Washing | Professional Cleaning Services',
    description: 'Professional pressure washing services in St. Catharines and Niagara region. Free quotes, lowest price guarantee.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
