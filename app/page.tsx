import { getAllCountries } from '@/services/fetchers'

import CountryCard from '@/components/country-card'
const HomePage = async ({}) => {
    const allCountries = await getAllCountries()
    return (
        <>
            <div>THIS IS MAIN PAGE HOME ROOT</div>
            {allCountries.map(cty => (
                <CountryCard key={cty.cca3} details={cty} />
            ))}
        </>
    )
}

export default HomePage
