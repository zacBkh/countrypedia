import GuessCountryDisplayer from '@/components/play/guess-country-displayer'

import MapCountryLocator from '@/components/maps/country-locator/country-locator-map'

const CountryMapLocator = async () => {
    return (
        <>
            <h1>Welcome to the game</h1>
            <GuessCountryDisplayer />
            <MapCountryLocator />
        </>
    )
}

export default CountryMapLocator
