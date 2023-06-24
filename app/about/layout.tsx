import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'About CountryPedia',
  description: 'CountryPedia',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>-- About & Child Layout --</h1>

      {children}
    </div>
  )
}
