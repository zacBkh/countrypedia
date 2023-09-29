import { FC } from 'react'

import type { Review } from '@prisma/client' // import type of review

import { styleTxtBlued } from '@/components/play/games-dashboard-ui'

interface ReviewDisplayerProps {
    data: {
        game: {
            name: string
        }
    } & Review
}

const ReviewDisplayer: FC<ReviewDisplayerProps> = async ({ data }) => {
    const { authorName, comment, createdAt, game } = data
    console.log('data', data)

    const formattedDate = new Date(createdAt).toLocaleString('en-US', {
        month: 'long',
        year: 'numeric',
    })

    const lookUpGames = {
        'COUNTRY_LOCATOR': 'Country Locator',
        'CAPITAL_GUESSER': 'Capital Guesser',
    }

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
