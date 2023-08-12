// API route fetchers

import { APP_LINKS } from '@/constants/urls'

import GameNames from '@/constants/game-names'

export const incrementLikeCountFetcher = async (game: GameNames) => {
    const response = await fetch(`/api/${APP_LINKS.PLAY}/${game}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
    const data = await response.json()
    return data
}
