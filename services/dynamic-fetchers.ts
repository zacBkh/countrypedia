// API route fetchers

import { APP_LINKS } from '@/constants/urls'

import GameNames from '@/constants/game-names'

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
