import './globals.css'
import { Nunito, Inter } from 'next/font/google'

import Navbar from '../components/navbar'

import ThemeProviderWrap from './theme-provider'

export const metadata = {
    title: 'CountryPedia',
    description: 'Find informations about all countries with CountryPedia',
    keywords: 'Countries, world',
}

const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
})

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`font-mono ${inter.variable} ${nunito.variable}`}>
            <body className="px-5 2xl:px-10 pb-2">
                <ThemeProviderWrap>
                    <Navbar />
                    <main className="p-8">{children}</main>
                </ThemeProviderWrap>
            </body>
        </html>
    )
}
