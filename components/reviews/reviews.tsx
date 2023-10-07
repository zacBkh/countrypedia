'use client'

import { BsFilter } from 'react-icons/bs'

import { useState } from 'react'

import ReviewDisplayer from '@/components/reviews/review-displayer'

import { lookUpGames } from '@/constants/game-names'

import { GameNames } from '@/constants/game-names'

import { styleTxtBlued } from '@/components/play/games-dashboard-ui'

import { getReviewsGame } from '@/services/dynamic-fetchers'

import SWR_KEYS from '@/constants/SWR-keys'

import useSWRImmutable from 'swr/immutable'

import Spinner from '@/components/ui/spinner'

const Reviews = () => {
    const {
        data: reviews,
        error,
        isLoading,
        isValidating,
    } = useSWRImmutable(SWR_KEYS.REVIEWS_GAME, getReviewsGame, {
        revalidateOnMount: true,
    })

    const [activeGame, setactiveGame] = useState<GameNames | ''>('')

    const handleClickFilter = (game: GameNames) => {
        if (game === activeGame) {
            return setactiveGame('')
        } else {
            setactiveGame(game)
        }
    }

    // Is filtered or not
    let reviewsToDisplay
    if (!activeGame) {
        reviewsToDisplay = reviews?.result
    } else {
        reviewsToDisplay = reviews?.result?.filter(
            review => review.game.name === activeGame,
        )
    }

    if (error) return <div>Failed to load the reviews</div>
    if (isLoading)
        return (
            <div className="h-[20vh] flex justify-center items-center">
                <Spinner moreCSS="border-t-react-blue-txt-light&dark !w-10 !h-10" />
            </div>
        )

    return (
        <div className="space-y-8">
            <div className="flex justify-center sm:justify-start items-center gap-x-2">
                <BsFilter className="text-2xl" />
                <div className="flex items-center gap-x-4">
                    {Object.values(GameNames).map(gameName => (
                        <button
                            key={gameName}
                            className={`p-2 rounded-xl
                            ${
                                activeGame === gameName
                                    ? `activeLink ${styleTxtBlued} `
                                    : ''
                            }`}
                            onClick={() => handleClickFilter(gameName)}
                        >
                            {lookUpGames[gameName]}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-10 px-6">
                {reviewsToDisplay?.map(rev => (
                    <ReviewDisplayer key={rev.id} data={rev} />
                ))}
                {isValidating && (
                    <Spinner moreCSS="m-auto border-t-react-blue-txt-light&dark !w-8 !h-8" />
                )}
            </div>
        </div>
    )
}

export default Reviews
