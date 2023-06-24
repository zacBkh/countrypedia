import './globals.css'
import { Roboto_Mono, Inter } from 'next/font/google'

import Navbar from '../components/navbar'

export const metadata = {
  title: 'CountryPedia',
  description: 'Find informations about all countries with CountryPedia',
  keywords: 'Countries, world',
}

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`font-mono ${inter.variable} ${roboto_mono.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
