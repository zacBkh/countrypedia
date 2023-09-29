'use client'

import { FC, useState } from 'react'

import ReviewDisplayer from '@/components/reviews/review-displayer'

import type { Review } from '@prisma/client' // import type of review

import { lookUpGames } from '@/constants/game-names'

import { GameNames } from '@/constants/game-names'

import { styleTxtBlued } from '../play/games-dashboard-ui'

import { Suspense } from 'react'

interface ReviewsProps {
    data: (Review & {
        game: {
            name: string
        }
    })[]
}

const Reviews: FC<ReviewsProps> = ({ data }) => {
    const [activeGame, setactiveGame] = useState<GameNames | ''>('')

    const handleClickFilter = (game: GameNames) => {
        setactiveGame(game)
    }

    // Is filtered or not
    let reviewsToDisplay
    if (!activeGame) {
        reviewsToDisplay = data
    } else {
        reviewsToDisplay = data.filter(review => review.game.name === activeGame)
    }

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-x-4">
                <p className="bold">Show only reviews for </p>

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

            <Suspense fallback={<div className="text-4xl">Loading...</div>}>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-10 px-6">
                    {reviewsToDisplay.map(review => (
                        <ReviewDisplayer key={review.id} data={review} />
                    ))}
                </div>
            </Suspense>
        </div>
    )
}

export default Reviews