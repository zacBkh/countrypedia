import { FC } from 'react'

import { getOneCountry, getAllCountries } from '@/services/fetchers'

import Carousel from '@/components/show-country/carousel'
import DynamicMapShowCountry from '@/components/dynamic-imports/dynamic-country-map'

import CountryDetailsDisplayer from '@/components/show-country/country-details-displayer'

import { SUPER_TITLE_FONT_SIZE } from '@/constants/responsive-fonts'

export async function generateStaticParams() {
    const allCountries = await getAllCountries()

    return allCountries.map(cty => ({
        country: cty.name.common,
    }))
}

interface ShowCountryProps {
    params: { country: string }
}

const ShowCountry: FC<ShowCountryProps> = async ({ params }) => {
    const { country } = params

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
        <div className="mb-28">
            <h1 className={`${SUPER_TITLE_FONT_SIZE} py-2 md:py-3 2xl:py-5 text-center`}>
                {name.common}
            </h1>

            <DynamicMapShowCountry ISOCtyName={cca3} latLng={latlng} />
            <div className="px-6 md:px-10 2xl:px-12 flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row justify-between items-center w-full mt-4 md;mt-6">
                <Carousel
                    countryName={name.common}
                    coa={coatOfArms.png}
                    flag={flags.svg}
                />
                <CountryDetailsDisplayer countryDetails={showCountry[0]} />
            </div>
        </div>
    )
}

export default ShowCountry
