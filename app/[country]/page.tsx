import { FC } from 'react'

import { getOneCountry, getAllCountries } from '@/services/fetchers'

import Carousel from '@/components/show-country/carousel'

import DynamicMapShowCountry from '@/components/dynamic-imports/dynamic-country-map'

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
    const {
        coatOfArms,
        flags,

        name,
        capital,
        area: size,

        languages,
        population,
        demonyms,

        timezones,
        startOfWeek,
        currencies,

        independent,
        unMember,

        region,
        subregion,
        latlng,
        maps,
    } = showCountry[0]
    return (
        <>
            <Carousel countryName={name.common} coa={coatOfArms.png} flag={flags.svg} />
            <DynamicMapShowCountry />

            {/* <h1>Hello</h1>
            <p>{name.common}</p>
            <p>{capital}</p> */}
        </>
    )
}

export default ShowCountry
