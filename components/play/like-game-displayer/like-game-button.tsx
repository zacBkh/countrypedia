'use client'

import { useSWRConfig } from 'swr'

import { FC } from 'react'

import { incrementLikeCountFetcher } from '@/services/dynamic-fetchers'

import GameNames from '@/constants/game-names'

import SWR_KEYS from '@/constants/SWR-keys'

interface LikeDisplayerGamesProps {
    gameID: GameNames
    children: React.ReactNode
}

const LikeGameButton: FC<LikeDisplayerGamesProps> = ({ gameID, children }) => {
    const { mutate } = useSWRConfig()

    const handleIncrementLikeCount = async () => {
        const incrementation = await incrementLikeCountFetcher(gameID)
        mutate(SWR_KEYS.FETCH_COUNT_LIKE_GAME + gameID)

        const hasLikedBefore = localStorage.getItem(gameID)

        if (hasLikedBefore === 'true') {
            localStorage.setItem(gameID, JSON.stringify(false))
        } else {
            localStorage.setItem(gameID, JSON.stringify(true))
        }
    }

    return (
        <>
            <button
                onClick={handleIncrementLikeCount}
                className="bg-[#232730] !text-[#F6F7F9] w-fit rounded-xl 
                  text-center sm:text-start text-sm"
            >
                <div className="px-2 py-1 flex gap-x-2 items-center">{children}</div>
            </button>
        </>
    )
}

export default LikeGameButton
