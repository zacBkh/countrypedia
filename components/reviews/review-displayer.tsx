import { FC } from 'react'

import type { Review } from '@prisma/client' // import type of review

import { styleTxtBlued } from '../play/games-dashboard-ui'

import { lookUpGames } from '@/constants/game-names'

export interface ReviewDisplayerProps {
    data: {
        game: {
            name: string
        }
    } & Review
}

const ReviewDisplayer: FC<ReviewDisplayerProps> = ({ data }) => {
    const { authorName, comment, createdAt, game } = data

    const formattedDate = new Date(createdAt).toLocaleString('en-US', {
        month: 'long',
        year: 'numeric',
    })

    return (
        <div className="flex flex-col gap-y-2">
            <div>
                <p>
                    <span className={`${styleTxtBlued} font-bold`}>{authorName}</span>,
                    about{' '}
                    <span className="italic font-bold">
                        {lookUpGames[game.name as keyof typeof lookUpGames]}
                    </span>
                </p>
                <p className="font-light italic">{formattedDate}</p>
            </div>

            <p>{comment}</p>
        </div>
    )
}

export default ReviewDisplayer
