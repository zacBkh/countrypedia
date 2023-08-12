'use client'

import { FC } from 'react'

import { incrementLikeCountFetcher } from '@/services/dynamic-fetchers'

import GameNames from '@/constants/game-names'

interface LikeDisplayerGamesProps {
    gameID: GameNames
    children: React.ReactNode
}

const LikeGameButton: FC<LikeDisplayerGamesProps> = ({ gameID, children }) => {
    const handleIncrementLikeCount = async () => {
        const incrementation = await incrementLikeCountFetcher(gameID)
        console.log('incrementation', incrementation)
    }

    return (
        <>
            <button
                onClick={handleIncrementLikeCount}
                className="bg-[#A6423A] !text-[#F6F7F9] w-fit rounded-xl 
                  text-center sm:text-start text-sm"
            >
                <div className="px-2 py-1 flex gap-x-2 items-center">{children}</div>
            </button>
        </>
    )
}

export default LikeGameButton
