'use client'

import { useState } from 'react'

import ReviewDisplayer from '@/components/reviews/review-displayer'

import { lookUpGames } from '@/constants/game-names'

import { GameNames } from '@/constants/game-names'

import { styleTxtBlued } from '@/components/play/games-dashboard-ui'

import { getReviewsGame } from '@/services/dynamic-fetchers'

import SWR_KEYS from '@/constants/SWR-keys'

import useSWR from 'swr'

import Spinner from '@/components/ui/spinner'

const Reviews = () => {
    const {
        mutate,
        data: reviews,
        error,
        isLoading,
        isValidating,
    } = useSWR('/ap/reviews', () => getReviewsGame(), {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    })

    const [activeGame, setactiveGame] = useState<GameNames | ''>('')

    const handleClickFilter = (game: GameNames) => {
        if (game === activeGame) {
            return setactiveGame('')
        } else {
            setactiveGame(game)
        }
    }

    console.log('isValidating', isValidating)
    console.log('reviews', reviews)
    // Is filtered or not
    let reviewsToDisplay
    if (!activeGame) {
        reviewsToDisplay = reviews?.result
    } else {
        reviewsToDisplay = reviews?.result?.filter(
            review => review.game.name === activeGame,
        )
    }

    if (error) return <div>failed to load</div>
    if (isLoading)
        return <Spinner moreCSS="border-t-react-blue-txt-light&dark !w-10 !h-10" />

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-x-4">
                <p className="font-bold">Show only reviews for </p>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-10 px-6">
                {reviewsToDisplay?.map(rev => (
                    <ReviewDisplayer key={rev.id} data={rev} />
                ))}
            </div>
            <button onClick={() => mutate()}>Hello</button>
        </div>
    )
}

export default Reviews
