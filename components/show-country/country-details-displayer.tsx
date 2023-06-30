import { FC } from 'react'
import { GetOneCountryProps } from '@/services/fetchers'
interface CountryDetailsDisplayerProps {
    countryDetails: GetOneCountryProps
}

const CountryDetailsDisplayer: FC<CountryDetailsDisplayerProps> = ({
    countryDetails,
}) => {
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
    } = countryDetails

    return <></>
}

export default CountryDetailsDisplayer
