import prisma from '@/utils/prisma'

import { NextRequest, NextResponse } from 'next/server'

import { incrementLikeCount } from '@/services/prisma-queries'

import GameNames from '@/constants/game-names'

export async function POST(
    request: Request,
    { params: queryParams }: { params: { game: GameNames } },
) {
    const game = queryParams.game

    // If game passed in query params is not in enum return err
    if (!Object.values(GameNames).includes(game)) {
        console.log('Error, this game is not valid')
        return NextResponse.json({ success: false, message: 'This game is not valid' })
    }

    await incrementLikeCount(queryParams.game)
    return NextResponse.json({
        success: true,
        message: `${game} likeCounter has been succesfully incremented`,
    })
}
