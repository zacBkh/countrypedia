'use client'

import { useState } from 'react'

import { BiRefresh } from 'react-icons/bi'

import { getSeveralRandomCountries } from '@/services/fetchers'

import useSWR, { useSWRConfig } from 'swr'
import SWR_KEYS from '@/constants/SWR-keys'

import { useGlobalContext } from '@/app/context/store'

import { TITLE_SEC_FONT_SIZE } from '@/constants/responsive-fonts'

import Spinner from '@/components/ui/spinner'

import RulesCapitalGuesserModal from '@/components/ui/modals/rules-capital-guesser-modal'

import CapitalGuesserOptions from '@/components/play/options-capital-guesser'

interface ClickedCountryTypes {
    code: string
    name: string
}

const CapitalGuesser = () => {
    const {
        modalsCtx: { capitalGuesserRules },
    } = useGlobalContext()

    const { mutate } = useSWRConfig()

    const [selectedCapital, setSelectedCapital] = useState('')
    const [userGameData, setUserGameData] = useState({ score: 0, countClick: 0 })
    const [isUserCorrect, setIsUserCorrect] = useState<boolean | null>(null)
    const [correctAnswer, setCorrectAnswer] = useState<string | undefined>('')

    const fetcher = async () => {
        const newCountry = await getSeveralRandomCountries(
            capitalGuesserRules.difficultyLevel,
            4,
        )

        return newCountry
    }

    const {
        data: fetchedCountries,
        error,
        isLoading,
    } = useSWR(SWR_KEYS.RANDOM_COUNTRY_CAPITAL, fetcher, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    // const userSelectCountryHandler = (ctySelected: ClickedCountryTypes) => {
    //     setSelectedCty(ctySelected)
    //     if (ctySelected.code === fetchedCountries?.cca3) {
    //         // if user is correct
    //         setUserGameData(prevState => ({
    //             ...prevState,
    //             score: prevState.score + 1,
    //         }))
    //         setIsUserCorrect(true)
    //     } else {
    //         setIsUserCorrect(false)
    //     }
    //     setUserGameData(prevState => ({
    //         ...prevState,
    //         countClick: prevState.countClick + 1,
    //     }))
    //     mutate(SWR_KEYS.RANDOM_COUNTRY_CAPITAL)
    // }

    const reFetchRequestHandler = () => {
        mutate(SWR_KEYS.RANDOM_COUNTRY_CAPITAL)
    }

    const openModal = () => {
        capitalGuesserRules.toggleModalState()
    }

    const selectCapitalHandler = async (capitalChosen: string) => {
        if (!fetchedCountries) {
            return
        }

        setUserGameData(prevState => ({
            ...prevState,
            countClick: prevState.countClick + 1,
        }))

        setSelectedCapital(capitalChosen)

        const fetchedCapital = fetchedCountries[0].capital[0]

        if (capitalChosen === fetchedCapital) {
            setUserGameData(prevState => ({
                ...prevState,
                score: prevState.score + 1,
            }))
            setCorrectAnswer(capitalChosen)
            setIsUserCorrect(true)
        } else {
            const countryOfIncorrectCapital = fetchedCountries.find(
                cty => cty.capital[0] === capitalChosen,
            )?.name.common
            setCorrectAnswer(countryOfIncorrectCapital)
            setIsUserCorrect(false)
        }

        mutate(SWR_KEYS.RANDOM_COUNTRY_CAPITAL)
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (isLoading || !fetchedCountries) {
        return <div>Loading...</div>
    }

    return (
        <>
            {capitalGuesserRules.isActive ? <RulesCapitalGuesserModal /> : ''}
            <div className="p-2 lg:p-3 2xl:p-5 flex flex-col gap-y-4 select-none">
                <div className="flex justify-center items-center gap-x-2">
                    <h1
                        title="That is the country you need to locate on the map."
                        className={`flex justify-center items-center  min-w-[140px] min-h-[44px] rounded-full w-fit px-5 py-2 bg-[#0D6D8C] font-bold text-react-txt-dark text-center ${TITLE_SEC_FONT_SIZE}`}
                    >
                        {isLoading || capitalGuesserRules.isActive ? (
                            <Spinner moreCSS="border-t-[#333A45]" />
                        ) : (
                            fetchedCountries[0].name.common
                            // fetchedCountries?.[0]?.name.common
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

                <div className="flex items-center justify-between text-center">
                    <p className="basis-1/3">
                        {isUserCorrect === null ? (
                            ''
                        ) : isUserCorrect ? (
                            <>{`✅ Correct!`}</>
                        ) : (
                            <>
                                {`❌ Wrong! `}
                                <span className="text-[#087da4] dark:text-[#149eca]">
                                    {selectedCapital}
                                </span>
                                {` is the capital of `}
                                <span className="text-[#087da4] dark:text-[#149eca]">
                                    {correctAnswer}
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
                            See instructions or change difficulty
                        </button>
                    </p>
                </div>
            </div>
            <CapitalGuesserOptions
                onSelectCapital={selectCapitalHandler}
                arrayOfRandomCountries={fetchedCountries}
            />
        </>
    )
}

export default CapitalGuesser
