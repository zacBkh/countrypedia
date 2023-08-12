// API route fetchers

import { APP_LINKS } from '@/constants/urls'

import GameNames from '@/constants/game-names'

import type { Game } from '@prisma/client'

import { CURRENT_DOMAIN } from '@/constants/urls'

// export const fetchAllLikeCountFetcher: () => Promise<Game[]> = async () => {
//     const response = await fetch(`${CURRENT_DOMAIN}api${APP_LINKS.PLAY}`, {
//         method: 'GET',
//     })
//     const data = await response.json()
//     return data
// }

export const incrementLikeCountFetcher = async (game: GameNames) => {
    const response = await fetch(`${CURRENT_DOMAIN}api${APP_LINKS.PLAY}/${game}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    return data
}
