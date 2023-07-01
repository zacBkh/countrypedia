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

        name,
        capital,
        area,

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

    return (
        <div className="w-1/2 text-lg grid grid-cols-2 gap-4" id="detailCountryContainer">
            <div>
                <p>
                    <span>Capital: </span> {capital}
                </p>
                <p>
                    <span>Area: </span> {area}
                </p>
                <p>
                    <span>Currency: </span>
                    {Object.values(currencies)[0].name}
                </p>
            </div>

            <div>
                <p>
                    <span>Population: </span>
                    {population}
                </p>
                <p>
                    <span>Demonym: </span>
                    {demonyms.eng.m}
                </p>
                <p>
                    <span>Language: </span> {Object.values(languages)[0]}
                </p>
            </div>

            <div>
                <p>
                    <span>Independency: </span>
                    {independent ? 'Yes' : 'No'}
                </p>
                <p>
                    <span>Member of United Nations: </span>
                    {unMember ? 'Yes' : 'No'}
                </p>
            </div>

            <div>
                <p>
                    <span>Region: </span>
                    {region}
                </p>
                <p>
                    <span>Subregion: </span>
                    {subregion}
                </p>

                <p>
                    <span>Timezone: </span>
                    {timezones[0]}
                </p>
                <p>
                    <span>Start week: </span>
                    {startOfWeek}
                </p>
            </div>
        </div>
    )
}

export default CountryDetailsDisplayer
