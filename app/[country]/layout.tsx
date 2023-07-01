interface ParamsProps {
    country: string
}

export async function generateMetadata({ params }: { params: ParamsProps }) {
    const { country } = params
    const ctySplitted = country.split(' ')[0]

    return {
        title: `${ctySplitted} | CountryPedia`,
        description: `Find out everything you need to know about ${ctySplitted}! Learn more about the population of ${ctySplitted}, which language they speak, the currency of the ${ctySplitted}...
        You can also see where ${ctySplitted} is on an interactive world map!`,
        keywords: `${ctySplitted}, CountryPedia countries, world, discover, worldmap, capital of ${ctySplitted}, currency of ${ctySplitted}, timezone of ${ctySplitted}, `,
    }
}

export default function ShowCountryLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}
