'use client'

import { useState, useEffect } from 'react'

import { BiRefresh } from 'react-icons/bi'

import { getSeveralRandomCountries } from '@/services/fetchers'

import useSWR, { useSWRConfig } from 'swr'
import SWR_KEYS from '@/constants/SWR-keys'

import { useGlobalContext } from '@/app/context/store'

import { TITLE_SEC_FONT_SIZE } from '@/constants/responsive-fonts'

import Spinner from '@/components/ui/spinner'

import RulesCapitalGuesserModal from '@/components/ui/modals/rules-capital-guesser-modal'

import CapitalGuesserOptions from '@/components/play/options-capital-guesser'

import {
    ScoreDisplayer,
    HelpMessage,
    FeedbackUserAnswerCapitalGuesser,
} from '@/components/play/games-dashboard-ui'

export interface FeedbackUserAnswerTypes {
    isUserCorrect: boolean | null
    selectedCapital: string
    correctAnswer: string | undefined
}

const CapitalGuesser = () => {
    const {
        modalsCtx: { capitalGuesserRules },
    } = useGlobalContext()

    useEffect(() => {
        const isModalActive = capitalGuesserRules?.isActive
        if (capitalGuesserRules && !isModalActive) {
            capitalGuesserRules.toggleModalState()
        }
    }, [])

    const { mutate } = useSWRConfig()

    const [countClick, setCountClick] = useState(0)
    const [score, setScore] = useState(0)

    const [selectedCapital, setSelectedCapital] = useState('')

    const [isUserCorrect, setIsUserCorrect] =
        useState<FeedbackUserAnswerTypes['isUserCorrect']>(null)

    const [correctAnswer, setCorrectAnswer] =
        useState<FeedbackUserAnswerTypes['correctAnswer']>('')

    const fetcher = async () => {
        const newCountry = await getSeveralRandomCountries(
            capitalGuesserRules?.difficultyLevel,
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
        revalidateIfStale: false,
    })

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (isLoading || !fetchedCountries) {
        return (
            <div className="flex w-full justify-center items-center h-[80vh]">
                <Spinner moreCSS="border-t-[#087EA4] !w-10 !h-10 !border-4" />
            </div>
        )
    }

    const reFetchRequestHandler = async () => {
        mutate(SWR_KEYS.RANDOM_COUNTRY_CAPITAL)
    }

    const openModal = () => {
        capitalGuesserRules.toggleModalState()
    }

    const selectCapitalHandler = async (capitalChosen: string) => {
        setCountClick(prev => prev + 1)
        setSelectedCapital(capitalChosen)

        if (capitalChosen === fetchedCountries[0].capital[0]) {
            setScore(prev => prev + 1)
            setIsUserCorrect(true)
            setCorrectAnswer(capitalChosen)
        } else {
            const countryOfIncorrectCapital = fetchedCountries.find(
                cty => cty.capital[0] === capitalChosen,
            )?.name.common
            setIsUserCorrect(false)
            setCorrectAnswer(countryOfIncorrectCapital)
        }

        mutate(SWR_KEYS.RANDOM_COUNTRY_CAPITAL)

        if (!fetchedCountries) {
            return
        }
    }

    return (
        <div className="py-6 p-1 sm:p-6">
            {capitalGuesserRules?.isActive ? <RulesCapitalGuesserModal /> : ''}
            <div className="2xl:p-5 flex flex-col gap-y-6 select-none">
                <div className="flex justify-center items-center gap-x-2">
                    <h1
                        title="That is the country you need to locate on the map."
                        className={`flex justify-center items-center  min-w-[140px] min-h-[44px] rounded-full w-fit px-5 py-2 bg-[#0D6D8C] font-bold text-react-txt-dark text-center ${TITLE_SEC_FONT_SIZE}`}
                    >
                        {isLoading || capitalGuesserRules?.isActive ? (
                            <Spinner moreCSS="border-t-[#333A45]" />
                        ) : (
                            fetchedCountries[0].name.common
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

                <div className="flex flex-col gap-y-8 items-center justify-between text-center text-sm sm:text-base">
                    <div className="order-2 sm:order-1">
                        <FeedbackUserAnswerCapitalGuesser
                            isUserCorrect={isUserCorrect}
                            selectedCapital={selectedCapital}
                            correctAnswer={correctAnswer}
                        />

                        <ScoreDisplayer score={score} countClick={countClick} />

                        <HelpMessage openModal={openModal} />
                    </div>

                    <CapitalGuesserOptions
                        onSelectCapital={selectCapitalHandler}
                        arrayOfRandomCountries={fetchedCountries}
                    />
                </div>
            </div>
        </div>
    )
}

export default CapitalGuesser
