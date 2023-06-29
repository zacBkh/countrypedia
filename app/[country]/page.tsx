import { FC } from 'react'
import { getOneCountry, getAllCountries } from '@/services/fetchers'
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const allCountries = await getAllCountries()

    return allCountries.map(cty => ({
        country: cty.name.common,
    }))
}

interface ShowCountryProps {
    params: { country: string }
}

const ShowCountry: FC<ShowCountryProps> = async ({ params: countryName }) => {
    const { country } = countryName

    const showCountry = await getOneCountry(country)
    const { capital, coatOfArms, flags, languages, maps, name, region } = showCountry[0]
    return (
        <>
            <h1>Hello</h1>
            <p>{name.common}</p>
            <p>{capital}</p>
        </>
    )
}

export default ShowCountry
