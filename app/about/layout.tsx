export const metadata = {
    title: 'About CountryPedia',
    description: 'CountryPedia',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>-- About & Team Layout --</h1>

            {children}
        </div>
    )
}
