export const metadata = {
    title: 'CountryPedia | Test your knowledge!',
    description: 'CountryPedia',
}

export default function PlayLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>-- Play layout --</h1>

            {children}
        </div>
    )
}
