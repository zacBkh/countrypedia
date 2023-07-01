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
            <div id="capital-area-currency">
                {capital ? (
                    <p>
                        <span>Capital: </span> {capital}
                    </p>
                ) : (
                    ''
                )}

                {area ? (
                    <p>
                        <span>Area: </span> {area}
                    </p>
                ) : (
                    ''
                )}

                {currencies ? (
                    <p>
                        <span>Currency: </span>
                        {Object.values(currencies)[0].name}
                    </p>
                ) : (
                    ''
                )}
            </div>

            <div id="population-languages">
                {population ? (
                    <p>
                        <span>Population: </span>
                        {population}
                    </p>
                ) : (
                    ''
                )}

                {demonyms ? (
                    <p>
                        <span>Demonym: </span>
                        {demonyms.eng.m}
                    </p>
                ) : (
                    ''
                )}

                {languages ? (
                    <p>
                        <span>Language: </span> {Object.values(languages)[0]}
                    </p>
                ) : (
                    ''
                )}
            </div>

            <div id="independent-unMember">
                {independent ? (
                    <p>
                        <span>Independency: </span>
                        {independent ? 'Yes' : 'No'}
                    </p>
                ) : (
                    ''
                )}

                {unMember ? (
                    <p>
                        <span>Member of United Nations: </span>
                        {unMember ? 'Yes' : 'No'}
                    </p>
                ) : (
                    ''
                )}
            </div>

            <div id="regions-timezones-startWeek">
                {region ? (
                    <p>
                        <span>Region: </span>
                        {region}
                    </p>
                ) : (
                    ''
                )}

                {subregion ? (
                    <p>
                        <span>Subregion: </span>
                        {subregion}
                    </p>
                ) : (
                    ''
                )}

                {timezones ? (
                    <p>
                        <span>Timezone: </span>
                        {timezones[0]}
                    </p>
                ) : (
                    ''
                )}

                {startOfWeek ? (
                    <p>
                        <span>Start week: </span>
                        {startOfWeek}
                    </p>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}

export default CountryDetailsDisplayer
