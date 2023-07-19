'use client'

import { useState } from 'react'

import useSWR from 'swr'
import { getRandomCountry, getRandomCountryTypes } from '@/services/fetchers'

import SWR_KEYS from '@/constants/SWR-keys'

const GuessCountryDisplayer = ({}) => {
    const [activeRandomCountry, setActiveRandomCountry] =
        useState<getRandomCountryTypes | null>(null)

    const fetcher = async () => {
        const res = await getRandomCountry()
        setActiveRandomCountry(res)
        return res
    }

    const { data, error, isLoading } = useSWR(SWR_KEYS.RANDOM_COUNTRY, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>

    console.log('cca2', activeRandomCountry?.cca2)
    console.log('cca3', activeRandomCountry?.cca3)
    return (
        <>
            <h1>{activeRandomCountry?.name.common}</h1>
            <button onClick={fetcher}>Re fetch country</button>
        </>
    )
}

export default GuessCountryDisplayer
