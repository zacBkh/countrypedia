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

        capital,
        area,

        languages,
        population,
        demonyms,

        startOfWeek,
        currencies,

        independent,
        unMember,

        region,
        subregion,
    } = countryDetails

    return (
        <div
            className="lg:w-1/2 text-lg grid grid-cols-1 sm:grid-cols-2 gap-4 text-center"
            id="detailCountryContainer"
        >
            <div id="capital-area-currency">
                {capital ? (
                    <p>
                        <span>🏛️ Capital: </span> {capital}
                    </p>
                ) : (
                    ''
                )}

                {area ? (
                    <p>
                        <span>📍 Area: </span> {area.toLocaleString()}
                    </p>
                ) : (
                    ''
                )}

                {currencies ? (
                    <p>
                        <span>💰 Currency: </span>
                        {Object.values(currencies)[0].name}
                    </p>
                ) : (
                    ''
                )}
            </div>

            <div id="population-languages">
                {population ? (
                    <p>
                        <span>👨‍👨‍👧‍👦 Population: </span>
                        {population.toLocaleString()}
                    </p>
                ) : (
                    ''
                )}

                {demonyms ? (
                    <p>
                        <span>👨‍👨‍👧‍👦 Demonym: </span>
                        {demonyms.eng.m}
                    </p>
                ) : (
                    ''
                )}

                {languages ? (
                    <p>
                        <span>💬 Language: </span> {Object.values(languages)[0]}
                    </p>
                ) : (
                    ''
                )}
            </div>

            <div id="independent-unMember">
                {independent ? (
                    <p>
                        <span>💪🏼 Independency: </span>
                        {independent ? 'Yes' : 'No'}
                    </p>
                ) : (
                    ''
                )}

                {unMember ? (
                    <p>
                        <span>☮️ Member of United Nations: </span>
                        {unMember ? 'Yes' : 'No'}
                    </p>
                ) : (
                    ''
                )}
            </div>

            <div id="regions-startWeek">
                {region ? (
                    <p>
                        <span>📍 Region: </span>
                        {region}
                    </p>
                ) : (
                    ''
                )}

                {subregion ? (
                    <p>
                        <span>📍 Subregion: </span>
                        {subregion}
                    </p>
                ) : (
                    ''
                )}

                {startOfWeek ? (
                    <p>
                        <span>📆 Start week: </span>
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
