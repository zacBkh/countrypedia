'use client'

import { useState, FC } from 'react'
import CountryCard from './country-card'
import { ReturnFxProps } from '@/services/fetchers'

import Button from './ui/buttons'

interface CountriesProps {
    allCountries: ReturnFxProps[]
}

const Countries: FC<CountriesProps> = ({ allCountries }) => {
    const [limit, setLimit] = useState(20)

    const limitedCountries = allCountries.slice(0, limit)

    const loadMoreHandler = () => {
        setLimit(prev => prev + 20)
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex flex-wrap justify-between items-center gap-4">
                    {limitedCountries.map(cty => (
                        <CountryCard key={cty.cca3} details={cty} />
                    ))}
                </div>
                <Button onLoadMore={loadMoreHandler} text="See More" />
            </div>
        </>
    )
}

export default Countries
