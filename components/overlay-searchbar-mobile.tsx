'use client'

import { Locale } from '@/i18n.config'

import { FC } from 'react'

import SearchBar from './search-bar'

import { useGlobalContext } from '@/app/context/store'

import useSWRImmutable from 'swr/immutable'

import SWR_KEYS from '@/constants/SWR-keys'

import { getAllCountriesSearchBar } from '@/services/fetchers'

import SuggestionMobileSearchBar from './suggestion-mobile-searchbar'

import Divider from './ui/divider'

export const fetcherGetCtysSearchBar = async () => {
    const allCountries = await getAllCountriesSearchBar()
    return allCountries
}

const OverlaySearchBarMobile = () => {
    const { isMobileSearchBarActive, setIsMobileSearchBarActive } = useGlobalContext()

    const { searchQuery, setSearchQuery } = useGlobalContext()

    const {
        data: fetchedCountries,
        error,
        isLoading,
    } = useSWRImmutable(SWR_KEYS.GET_ALL_COUNTRIES_SEARCHBAR, fetcherGetCtysSearchBar)

    const closeHandler = () => {
        setIsMobileSearchBarActive(false)
        setSearchQuery('')
    }

    const filteredCountries = fetchedCountries?.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    // Display filtered countries if filter, otherwise display all
    const activeCountries = searchQuery ? filteredCountries : fetchedCountries

    if (!isMobileSearchBarActive) return null

    return (
        <div className="flex flex-col gap-y-6 px-5 py-3 w-screen min-h-screen bg-[#23272F] absolute z-[9999999]">
            <div className="sticky top-0 bg-[#23272F] h-fit pt-[6px]">
                <div className="flex items-center gap-x-9">
                    <SearchBar trad="Search" isMobileMode />
                    <button
                        onClick={closeHandler}
                        className="text-[#087da4] dark:text-[#149eca] font-semibold"
                    >
                        Cancel
                    </button>
                </div>
                <Divider moreCSS="sm:hidden mt-3" />
            </div>

            <div className="flex flex-col gap-y-4">
                {fetchedCountries &&
                    activeCountries &&
                    activeCountries.map(cty => (
                        <SuggestionMobileSearchBar
                            key={cty.cca3}
                            cca3={cty.cca3}
                            onClickCountry={closeHandler}
                            name={cty.name}
                            flags={cty.flags}
                            region={cty.region}
                        />
                    ))}
            </div>
        </div>
    )
}

export default OverlaySearchBarMobile
