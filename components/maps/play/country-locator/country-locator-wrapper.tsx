'use client'

import { useState } from 'react'

import CountryLocatorMap from './country-locator-map'

import { BiRefresh } from 'react-icons/bi'

import { getRandomCountry } from '@/services/fetchers'

import useSWR, { useSWRConfig } from 'swr'
import SWR_KEYS from '@/constants/SWR-keys'

import { useGlobalContext } from '@/app/context/store'

import { TITLE_SEC_FONT_SIZE } from '@/constants/responsive-fonts'

import Spinner from '@/components/ui/spinner'

import RulesCountryLocatorModal from '@/components/ui/modals/rules-country-locator-modal'

interface ClickedCountryTypes {
    code: string
    name: string
}

const CountryLocatorWrapper = () => {
    const {
        modalsCtx: { countryLocatorRules },
    } = useGlobalContext()

    const { mutate } = useSWRConfig()

    const [selectedCty, setSelectedCty] = useState<ClickedCountryTypes>({
        code: '',
        name: '',
    })

    const [userGameData, setUserGameData] = useState({ score: 0, countClick: 0 })

    const [isUserCorrect, setIsUserCorrect] = useState<boolean | null>(null)

    const fetcher = async () => {
        const newCountry = await getRandomCountry()
        return newCountry
    }

    const {
        data: fetchedCountry,
        error,
        isLoading,
    } = useSWR(SWR_KEYS.RANDOM_COUNTRY, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    const userSelectCountryHandler = (ctySelected: ClickedCountryTypes) => {
        setSelectedCty(ctySelected)
        if (ctySelected.code === fetchedCountry?.cca3) {
            // if user is correct
            setUserGameData(prevState => ({
                ...prevState,
                score: prevState.score + 1,
            }))
            setIsUserCorrect(true)
        } else {
            setIsUserCorrect(false)
        }
        setUserGameData(prevState => ({
            ...prevState,
            countClick: prevState.countClick + 1,
        }))
        mutate(SWR_KEYS.RANDOM_COUNTRY)
    }

    const reFetchRequestHandler = () => {
        mutate(SWR_KEYS.RANDOM_COUNTRY)
    }

    const openModal = () => {
        countryLocatorRules.toggleModalState()
    }

    return (
        <>
            {countryLocatorRules.isActive ? <RulesCountryLocatorModal /> : ''}
            <div className="p-3 2xl:p-5 flex flex-col gap-y-4 select-none">
                <div className="flex justify-center items-center gap-x-2">
                    <h1
                        title="That is the country you need to locate on the map."
                        className={`flex justify-center items-center  min-w-[140px] min-h-[44px] rounded-full w-fit px-5 py-2 bg-[#0D6D8C] font-bold text-react-txt-dark text-center ${TITLE_SEC_FONT_SIZE}`}
                    >
                        {isLoading || countryLocatorRules.isActive ? (
                            <Spinner moreCSS="border-t-[#333A45]" />
                        ) : (
                            fetchedCountry?.name.common
                        )}
                    </h1>

                    <button
                        onClick={reFetchRequestHandler}
                        title="Generate another country to guess"
                        className="p-1 rounded-full"
                    >
                        <BiRefresh className="text-2xl" />
                    </button>
                </div>
                {/* 
                <p>Selected cty by user: {selectedCty.name}</p> */}

                {/* <button onClick={reFetchRequestHandler}>Re fetch country</button> */}

                <div className="flex items-center justify-between text-center">
                    <p className="basis-1/3">
                        {isUserCorrect === null ? (
                            '👨🏼‍🏫 A feedback will appear here'
                        ) : isUserCorrect ? (
                            '✅ Correct!'
                        ) : (
                            <>
                                ❌ You missed it! You have selected{' '}
                                <span className="text-[#087da4] dark:text-[#149eca]">
                                    {selectedCty.name}
                                </span>{' '}
                            </>
                        )}
                    </p>
                    <p className="basis-1/3">
                        🎯 Your score: {userGameData.score}/{userGameData.countClick}
                    </p>

                    <p className="basis-1/3">
                        Feeling lost?{' '}
                        <button
                            onClick={openModal}
                            className="text-[#087da4] dark:text-[#149eca] font-semibold hover:underline hover:!bg-transparent text-base active:transform-none"
                        >
                            See the instructions
                        </button>
                    </p>
                </div>
            </div>
            <CountryLocatorMap onCtySelection={userSelectCountryHandler} />
        </>
    )
}

export default CountryLocatorWrapper