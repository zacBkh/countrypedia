import { NextRequest, NextResponse } from 'next/server'

import GameNames from '@/constants/game-names'

import { fetchLikesCount } from '@/services/prisma-queries'

// GET LIKE COUNT
export async function GET() {
    console.log('999999999', 999999999)

    const likesCount = await fetchLikesCount()
    return NextResponse.json({
        success: true,
        result: likesCount,
    })
}

// INCREMENT LIKE COUNT
import { incrementLikeCount } from '@/services/prisma-queries'

export async function POST(
    request: Request,
    { params: queryParams }: { params: { game: GameNames } },
) {
    const game = queryParams.game

    // If game passed in query params is not in enum return err
    if (!Object.values(GameNames).includes(game)) {
        console.log('Error, this game is not valid')
        return NextResponse.json({ success: false, result: 'This game is not valid' })
    }

    await incrementLikeCount(queryParams.game)
    return NextResponse.json({
        success: true,
        result: `${game} likeCounter has been succesfully incremented`,
    })
}
