import { PrismaClient, Prisma } from '@prisma/client'
const PrismaConnector = new PrismaClient()

import { GameNames } from '@/constants/game-names'

/*SC Games */
// Create new game in records
export const createNewGame = async () => {
    const newGame = await PrismaConnector.game.create({
        data: {
            name: 'CAPITAL_GUESSER',
        },
    })
    console.log('Just added a new game -->', newGame)
}

// Fetch all games like count
export const fetchLikesCount = async () => {
    const likeCount = await PrismaConnector.game.findMany()
    return likeCount
}
// Fetch only one game
export const fetchOneGameLikeCount = async (game: GameNames) => {
    const likeCount = await PrismaConnector.game.findMany({
        where: {
            name: game,
        },
    })
    return likeCount
}

// Increment like count of a game passed in params
export const incrementLikeCount = async (game: GameNames, hasLikedBefore: boolean) => {
    try {
        const updatedGame = await PrismaConnector.game.update({
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
    const deletion = await PrismaConnector.game.deleteMany()
}
/* !SC */

/*SC Reviews */

// Create new review in records
export const createNewReview = async (data: Prisma.ReviewCreateInput) => {
    const newReview = await PrismaConnector.review.create({
        data,
    })
    console.log('Just added review from prisma-queries.ts -->', newReview)
}

/* !SC */
// const newReviewData = {
//     comment: 'Country locator is a very nice game!',
//     game: {
//         connect: { id: 1 }, // connect with game whose id is 1
//     },
// }

// createNewReview(newReviewData)
// createNewGame()
// fetchLikesCount()
// deleteAllGames()
// .then(async () => {
//     await PrismaConnector.$disconnect()
// })
// .catch(async e => {
//     console.error(e)
//     await PrismaConnector.$disconnect()
//     process.exit(1)
// })
