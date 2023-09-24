import prisma from '../utils/prisma'

import GameNames from '@/constants/game-names'

// Create new game in records
export const createNewGame = async () => {
    const newGame = await prisma.game.create({
        data: {
            name: 'CAPITAL_GUESSER',
        },
    })
    console.log('Just added -->', newGame)
}

// Fetch all games like count
export const fetchLikesCount = async () => {
    const likeCount = await prisma.game.findMany()
    return likeCount
}
// Fetch only one game
export const fetchOneGameLikeCount = async (game: GameNames) => {
    const likeCount = await prisma.game.findMany({
        where: {
            name: game,
        },
    })
    console.log('Like counts individual fetcher -->', likeCount)
    return likeCount
}

// Increment like count of a game passed in params
export const incrementLikeCount = async (game: GameNames, hasLikedBefore: boolean) => {
    try {
        const updatedGame = await prisma.game.update({
            where: {
                name: game,
            },
            data: {
                likeCount: {
                    increment: hasLikedBefore ? -1 : +1,
                },
            },
        })
        return updatedGame
    } catch (error) {
        return error
    }
}

export const deleteAllGames = async () => {
    const deletion = await prisma.game.deleteMany()
}

// createNewGame()
fetchLikesCount()
    // deleteAllGames()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async e => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
