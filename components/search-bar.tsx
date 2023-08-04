'use client'

import useSWRImmutable from 'swr/immutable'

import { usePathname } from 'next/navigation'

import { FC, useEffect, useRef, useState } from 'react'

import KeyBoardStroke from './ui/icons/os-icons'
import MagnifyingGlass from './ui/icons/magnifying-glass'
import CloseButton from './ui/icons/close-button'

import { useGlobalContext } from '@/app/context/store'

import useOnClickOutside from '@/hooks/useOnClickOutside'

import SWR_KEYS from '@/constants/SWR-keys'

import SuggestionMobileSearchBar from './suggestion-mobile-searchbar'

import { fetcherGetCtysSearchBar } from './overlay-searchbar-mobile'

interface SearchBarProps {
    isMobileMode?: boolean
}

const SearchBar: FC<SearchBarProps> = ({ isMobileMode }) => {
    const [isSuggestionVisible, setIsSuggestionVisible] = useState(false)

    const searchBarRef = useRef<HTMLInputElement>(null)

    const { searchQuery, setSearchQuery } = useGlobalContext()

    const {
        data: fetchedCountries,
        error,
        isLoading,
    } = useSWRImmutable(SWR_KEYS.GET_ALL_COUNTRIES_SEARCHBAR, fetcherGetCtysSearchBar)

    const filteredCountries = fetchedCountries?.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const searchHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const search = evt.target.value
        setSearchQuery(search) // send to global context
        if (search.length > 0) {
            setIsSuggestionVisible(true) // reveal suggestion popup
        } else {
            setIsSuggestionVisible(false)
        }
    }

    // Display filtered countries if filter, otherwise display all
    const activeCountries = searchQuery ? filteredCountries : fetchedCountries

    const [currentOS, setCurrentOS] = useState('Windows')

    useEffect(() => {
        const navigator =
            typeof window !== 'undefined' &&
            (window as any)?.navigator?.userAgentData?.platform

        setCurrentOS(navigator)

        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault()
                searchBarRef.current?.focus()
            }
        }

        window.addEventListener('keydown', keyDownHandler)
        return () => {
            window.removeEventListener('keydown', keyDownHandler)
        }
    }, [])

    const deleteSearchHandler = () => {
        setSearchQuery('')
        setIsSuggestionVisible(false)
    }

    const suggestedPopUp = useRef(null)

    useOnClickOutside(suggestedPopUp, () => setIsSuggestionVisible(false))

    const pathname = usePathname()

    const closeHandler = () => {
        setIsSuggestionVisible(false)
        setSearchQuery('')
    }

    return (
        <div
            ref={suggestedPopUp}
            className="relative flex flex-1 justify-center items-center w-full 3xl:w-auto 3xl:shrink-0 3xl:justify-center"
        >
            <div className="z-50 absolute left-[3%] 2xl:left-[14px] top-auto flex justify-center items-center">
                {searchQuery ? (
                    <CloseButton
                        moreCSSSvg="mr-3 align-middle text-[#99A1B3] shrink-0"
                        onButtonClick={deleteSearchHandler}
                    />
                ) : (
                    <MagnifyingGlass
                        moreCSSSvg={`${
                            isMobileMode ? 'ml-2' : ''
                        } mr-3 align-middle text-[#99A1B3] shrink-0`}
                    />
                )}
            </div>

            <input
                onFocus={() => setIsSuggestionVisible(true)}
                ref={searchBarRef}
                onChange={searchHandler}
                value={searchQuery}
                placeholder="Search any country"
                className="p-2 pl-10 flex 2xl:mx-0 relative pr-1 py-1 h-10 outline-none focus:outline-react-blue-txt-light&dark items-center text-left text-gray-30 rounded-full align-middle text-base bg-[#EBECF0] dark:bg-[#333944] !w-full"
            />
            {!isMobileMode ? (
                <div className="z-50 absolute flex items-center right-[2%] top-auto">
                    {currentOS === 'Mac' ? (
                        <KeyBoardStroke
                            moreCSS="w-5 h-5 p-2"
                            data_platform="mac"
                            text="⌘"
                        />
                    ) : (
                        <KeyBoardStroke
                            moreCSS="w-10 h-5"
                            data_platform="win"
                            text="Ctrl"
                        />
                    )}
                    <KeyBoardStroke moreCSS="w-5 h-5" text="K" />
                </div>
            ) : (
                ''
            )}

            {isSuggestionVisible && !isMobileMode && pathname !== '/' ? (
                <div className="rounded-md w-full max-h-72 absolute top-[130%] z-20 h-fit shadow-md overflow-hidden overflow-y-auto">
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
            ) : (
                ''
            )}
        </div>
    )
}

export default SearchBar
