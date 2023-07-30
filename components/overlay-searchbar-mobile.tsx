'use client'

import { useEffect, FC } from 'react'

import SearchBar from './search-bar'

import { useGlobalContext } from '@/app/context/store'

import useSWRImmutable from 'swr/immutable'

import SWR_KEYS from '@/constants/SWR-keys'

import { getAllCountriesSearchBar } from '@/services/fetchers'

import SuggestionMobileSearchBar from './suggestion-mobile-searchbar'

interface OverlaySearchBarMobileProps {
    hello?: any
}

const OverlaySearchBarMobile: FC<OverlaySearchBarMobileProps> = ({ hello }) => {
    const { isMobileSearchBarActive, setIsMobileSearchBarActive } = useGlobalContext()

    const { searchQuery, setSearchQuery } = useGlobalContext()

    // useEffect(() => {
    //     if (isMobileSearchBarActive) {
    //         document.body.style.overflow = 'hidden'
    //     }

    //     return () => {
    //         document.body.style.overflow = 'auto'
    //     }
    // }, [isMobileSearchBarActive])

    const fetcher = async () => {
        const allCountries = await getAllCountriesSearchBar()
        return allCountries
    }

    const {
        data: fetchedCountries,
        error,
        isLoading,
    } = useSWRImmutable(SWR_KEYS.GET_ALL_COUNTRIES_SEARCHBAR, fetcher)

    const closeHandler = () => {
        setIsMobileSearchBarActive(false)
    }

    const filteredCountries = fetchedCountries?.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    // Display filtered countries if filter, otherwise display all
    const activeCountries = searchQuery ? filteredCountries : fetchedCountries

    if (!isMobileSearchBarActive) return null

    return (
        <>
            <div className="flex flex-col gap-y-6 px-6 py-3 w-screen min-h-screen bg-[#23272F] absolute z-[9999999]">
                <div className="h-fit flex items-center gap-x-9">
                    <SearchBar isMobileMode />
                    <button
                        onClick={closeHandler}
                        className="text-[#087da4] dark:text-[#149eca] font-semibold"
                    >
                        Cancel
                    </button>
                </div>

                {/* DO SOMETHING WITH LAODING HERE */}
                {fetchedCountries &&
                    activeCountries &&
                    activeCountries.map(cty => (
                        <SuggestionMobileSearchBar
                            key={cty.cca3}
                            name={cty.name}
                            flags={cty.flags}
                            region={cty.region}
                        />
                    ))}
            </div>
        </>
    )
}

export default OverlaySearchBarMobile
