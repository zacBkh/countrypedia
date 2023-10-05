// API route fetchers

import { APP_LINKS } from '@/constants/urls'

import { GameNames } from '@/constants/game-names'

import type { Game } from '@prisma/client'

export interface FetchAllLikeCountFetcherTypes {
    success: boolean
    result: Game[]
}

export const fetchAllLikeCountFetcher: () => Promise<FetchAllLikeCountFetcherTypes> =
    async () => {
        const response = await fetch(`api${APP_LINKS.PLAY}`, {
            method: 'GET',
        })
        const data = await response.json()
        return data
    }

export const fetchGameFetcher = async (game: GameNames) => {
    const response = await fetch(`api${APP_LINKS.PLAY}/${game}`, {
        method: 'GET',
    })
    const data = await response.json()
    return data
}

export const incrementLikeCountFetcher = async (
    game: GameNames,
    hasLikedBefore: boolean,
) => {
    const response = await fetch(`api${APP_LINKS.PLAY}/${game}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(hasLikedBefore),
    })
    const data = await response.json()
    return data
}

export const reviewGame = async (
    gameName: GameNames,
    comment: string,
    authorName: string,
) => {
    const response = await fetch(`api${APP_LINKS.PLAY}/review/${gameName}`, {
        method: 'POST',
        body: JSON.stringify({ comment, authorName }),
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    return data
}

import type { Review } from '@prisma/client'

export interface ReviewFetchType {
    success: boolean
    result: Array<Review & { game: { name: string } }>
}

export const getReviewsGame: () => Promise<ReviewFetchType> = async () => {
    const response = await fetch(`api${APP_LINKS.PLAY}/review/`, {
        method: 'GET',
    })
    const data = await response.json()
    return data
}
