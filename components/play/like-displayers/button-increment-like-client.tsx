'use client'

import { FC } from 'react'

import { incrementLikeCountFetcher } from '@/services/dynamic-fetchers'

import GameNames from '@/constants/game-names'

interface LikeDisplayerGamesProps {
    children?: React.ReactNode
    gameID: GameNames
}

const IncrementLikeButtonClient: FC<LikeDisplayerGamesProps> = ({ children, gameID }) => {
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
                {children}
            </button>
        </>
    )
}

export default IncrementLikeButtonClient
