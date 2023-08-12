import { NextRequest, NextResponse } from 'next/server'

import GameNames from '@/constants/game-names'

// INCREMENT LIKE COUNT
import { incrementLikeCount } from '@/services/prisma-queries'

import { fetchOneGameLikeCount } from '@/services/prisma-queries'

export async function GET(
    request: Request,
    { params: queryParams }: { params: { game: GameNames } },
) {
    const game = queryParams.game

    const likesCount = await fetchOneGameLikeCount(game)
    return NextResponse.json({
        success: true,
        result: likesCount,
    })
}

export async function POST(
    request: Request,
    { params: queryParams }: { params: { game: GameNames } },
) {
    const game = queryParams.game

    const hasLikedBefore = await request.json()

    // If game passed in query params is not in enum return err
    if (!Object.values(GameNames).includes(game)) {
        console.log('Error, this game is not valid')
        return NextResponse.json({ success: false, result: 'This game is not valid' })
    }

    await incrementLikeCount(queryParams.game, hasLikedBefore)
    return NextResponse.json({
        success: true,
        result: `${game} likeCounter has been succesfully incremented`,
    })
}
