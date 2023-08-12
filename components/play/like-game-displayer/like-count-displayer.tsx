'use client'

import useSWR from 'swr'

import { FC, useEffect } from 'react'

import { fetchGameFetcher } from '@/services/dynamic-fetchers'

import { BsFillHeartFill } from 'react-icons/bs'

import GameNames from '@/constants/game-names'

import Spinner from '@/components/ui/spinner'

import SWR_KEYS from '@/constants/SWR-keys'

interface LikeDisplayerGamesProps {
    gameID: GameNames
}

const LikeDisplayerGamesServer: FC<LikeDisplayerGamesProps> = ({ gameID }) => {
    const {
        data: response,
        error,
        isLoading,
    } = useSWR(SWR_KEYS.FETCH_COUNT_LIKE_GAME + gameID, () => fetchGameFetcher(gameID))

    let parsedBoolean
    useEffect(() => {
        const hasLikedBefore = localStorage.getItem(gameID)
        parsedBoolean = hasLikedBefore && JSON.parse(hasLikedBefore)
    }, [])

    return (
        <>
            <div className="px-2 py-1 flex gap-x-2 items-center">
                <BsFillHeartFill
                    className={`${parsedBoolean ? 'text-red-500' : 'text-white '} `}
                />
                {isLoading ? (
                    <Spinner moreCSS="border-t-black" />
                ) : (
                    response?.result[0].likeCount
                )}
            </div>
        </>
    )
}

export default LikeDisplayerGamesServer
