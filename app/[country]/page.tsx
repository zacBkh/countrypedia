import { FC } from 'react'

import { getOneCountry, getAllCountries } from '@/services/fetchers'

import Carousel from '@/components/show-country/carousel'
import DynamicMapShowCountry from '@/components/dynamic-imports/dynamic-country-map'
import CountryDetailsDisplayer from '@/components/show-country/country-details-displayer'

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
        cca3,

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
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-4 ">
                    <Carousel
                        countryName={name.common}
                        coa={coatOfArms.png}
                        flag={flags.svg}
                    />
                    <DynamicMapShowCountry ISOCtyName={cca3} latLng={latlng} />
                </div>
                <CountryDetailsDisplayer countryDetails={showCountry[0]} />
            </div>
            {/* <h1>Hello</h1>
            <p>{name.common}</p>
            <p>{capital}</p> */}
        </>
    )
}

export default ShowCountry
