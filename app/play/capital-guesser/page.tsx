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
import { sleep } from '@/utils/sleep'

const CapitalGuesser = () => {
    const {
        modalsCtx: { capitalGuesserRules },
    } = useGlobalContext()

    const { mutate } = useSWRConfig()

    const [countClick, setCountClick] = useState(0)
    const [score, setScore] = useState(0)

    const [selectedCapital, setSelectedCapital] = useState('')
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
        revalidateIfStale: false,
    })

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (isLoading || !fetchedCountries) {
        return <div>Loading...</div>
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

    const styleText = 'text-[#087da4] dark:text-[#149eca] font-bold'
    return (
        <div className="py-6 p-1 sm:p-6">
            {capitalGuesserRules.isActive ? <RulesCapitalGuesserModal /> : ''}
            <div className="2xl:p-5 flex flex-col gap-y-6 select-none">
                <div className="flex justify-center items-center gap-x-2">
                    <h1
                        title="That is the country you need to locate on the map."
                        className={`flex justify-center items-center  min-w-[140px] min-h-[44px] rounded-full w-fit px-5 py-2 bg-[#0D6D8C] font-bold text-react-txt-dark text-center ${TITLE_SEC_FONT_SIZE}`}
                    >
                        {isLoading || capitalGuesserRules.isActive ? (
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

                <div className="flex gap-y-2 flex-col sm:flex-row sm:gap-y-0 items-center justify-between text-center text-sm sm:text-base">
                    <p className="basis-1/3">
                        {isUserCorrect === null ? (
                            ''
                        ) : isUserCorrect ? (
                            <>{`✅ Correct!`}</>
                        ) : (
                            <>
                                {`❌ Wrong! `}
                                <span className={`${styleText}`}>{selectedCapital}</span>
                                {` is the capital of `}
                                <span className={`${styleText}`}>
                                    {correctAnswer}
                                </span>{' '}
                            </>
                        )}
                    </p>
                    <p className="basis-1/3 rounded-md py-2">
                        🎯 Your score:{' '}
                        <span className={`${styleText}`}>
                            {score}/{countClick}
                        </span>
                    </p>

                    <p className="basis-1/3">
                        Feeling lost?{' '}
                        <button
                            onClick={openModal}
                            className={`${styleText} hover:underline hover:!bg-transparent active:transform-none"`}
                        >
                            See instructions or change level
                        </button>
                    </p>
                </div>
            </div>
            <CapitalGuesserOptions
                onSelectCapital={selectCapitalHandler}
                arrayOfRandomCountries={fetchedCountries}
            />
        </div>
    )
}

export default CapitalGuesser
