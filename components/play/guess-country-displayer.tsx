'use client'
import { useState } from 'react'
import useSWR from 'swr'
import { getRandomCountry } from '@/services/fetchers'

import SWR_KEYS from '@/constants/SWR-keys'

const GuessCountryDisplayer = ({}) => {
    const [activeCountry, setActiveCountry] = useState('')

    const fetcher = async () => {
        const newCountry = await getRandomCountry()
        setActiveCountry(newCountry.name.common)
        return newCountry
    }

    const { data, error, isLoading } = useSWR(SWR_KEYS.RANDOM_COUNTRY, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>

    return (
        <>
            <h1>{activeCountry}</h1>
            <button onClick={fetcher}>Re fetch country</button>
        </>
    )
}

export default GuessCountryDisplayer
