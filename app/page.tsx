import { Suspense } from 'react'

import { getAllCountries } from '@/services/fetchers'

import CountryCard from '@/components/country-card'
const HomePage = async () => {
    const allCountries = await getAllCountries()

    return (
        <>
            <div className="flex gap-4 flex-wrap justify-between">
                <Suspense fallback={<div>111111111111111</div>}></Suspense>

                <Suspense fallback={<div>Loading...</div>}>
                    {allCountries.map(cty => (
                        <CountryCard key={cty.cca3} details={cty} />
                    ))}
                </Suspense>
            </div>
        </>
    )
}

export default HomePage
