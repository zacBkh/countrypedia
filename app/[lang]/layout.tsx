import './globals.css'

import { Nunito, Inter, Source_Code_Pro } from 'next/font/google'

import Navbar from '@/components/navigation/navbar'
import Overlay from '@/components/ui/overlay'
import OverlaySearchBarMobile from '@/components/overlay-searchbar-mobile'

import ThemeProviderWrap from './theme-provider'

import { GlobalContextProvider } from '../context/store'

import { Locale, i18n } from '@/i18n.config'

const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
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

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { lang: Locale }
}) {
    return (
        <html
            lang={params.lang}
            className={`!font-mono ${inter.variable} ${nunito.variable} ${sourceCode.variable}`}
        >
            <body lang={params.lang}>
                <ThemeProviderWrap>
                    <GlobalContextProvider>
                        <OverlaySearchBarMobile />
                        <Navbar lang={params.lang} />
                        <Overlay />
                        <main>{children}</main>
                    </GlobalContextProvider>
                </ThemeProviderWrap>
            </body>
        </html>
    )
}
