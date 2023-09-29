import { NextRequest, NextResponse } from 'next/server'

import { GameNameWithIDs } from '@/constants/game-names'
import { GameNames } from '@/constants/game-names'

import { createNewReview } from '@/services/prisma-queries'

export async function POST(
    request: Request,
    { params: queryParams }: { params: { game: GameNames } },
) {
    const gameNameToReview = queryParams.game

    // Checking if game is valid
    if (!Object.values(GameNames).includes(gameNameToReview)) {
        console.log('Error, this game is not valid')
        return NextResponse.json(
            {
                success: false,
                result: 'This game is not valid [ADD_REVIEW]',
            },
            { status: 404 },
        )
    }

    const gameID = GameNameWithIDs[gameNameToReview] // getting the game ID
    const req = await request.json()

    // Checking if comemnt & author name
    if (!req.hasOwnProperty('comment') || !req.hasOwnProperty('authorName')) {
        return NextResponse.json(
            {
                success: false,
                result: `One mandatory property is missing [ADD_REVIEW]`,
            },
            { status: 400 },
        )
    }

    const { comment, authorName } = req

    createNewReview({ comment, authorName, game: { connect: { id: gameID } } }) // connecting to the gameID in the game model

    return NextResponse.json(
        {
            success: true,
            result: `Thank you for your review ${authorName}`,
        },
        { status: 201 },
    )
}
