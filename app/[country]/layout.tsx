import { unSlugCtyName } from '@/utils/slug-url'

interface ParamsProps {
    country: string
}

export async function generateMetadata({ params }: { params: ParamsProps }) {
    const { country } = params
    const countryDisplay = unSlugCtyName(country)
    console.log('countryDisplay', countryDisplay)

    return {
        title: `${countryDisplay} | CountryPedia`,
        description: `Find out everything you need to know about ${countryDisplay}! Learn more about the population of ${countryDisplay}, which language they speak, the currency of the ${countryDisplay}...
        You can also see where ${countryDisplay} is on an interactive world map!`,
        keywords: `${countryDisplay}, CountryPedia countries, world, discover, worldmap, capital of ${countryDisplay}, currency of ${countryDisplay}, timezone of ${countryDisplay}, `,
    }
}

export default function ShowCountryLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}
