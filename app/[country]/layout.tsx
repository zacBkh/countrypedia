// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Country CountryPedia',
    description: 'CountryPedia',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}
