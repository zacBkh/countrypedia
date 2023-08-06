import './globals.css'

import { Nunito, Inter, Source_Code_Pro } from 'next/font/google'

import Navbar from '@/components/navigation/navbar'
import Overlay from '@/components/ui/overlay'
import OverlaySearchBarMobile from '@/components/overlay-searchbar-mobile'

import ThemeProviderWrap from './theme-provider'

import { GlobalContextProvider } from './context/store'

const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
})

const sourceCode = Source_Code_Pro({
    subsets: ['latin'],
    variable: '--source-code',
})

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`!font-mono ${inter.variable} ${nunito.variable} ${sourceCode.variable}`}
        >
            <body>
                <ThemeProviderWrap>
                    <GlobalContextProvider>
                        <OverlaySearchBarMobile />
                        <Navbar />
                        <Overlay />
                        <main>{children}</main>
                    </GlobalContextProvider>
                </ThemeProviderWrap>
            </body>
        </html>
    )
}
