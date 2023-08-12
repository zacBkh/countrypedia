'use client'

import useSWR, { useSWRConfig } from 'swr'

import { FC, useEffect, useState } from 'react'

import { fetchGameFetcher } from '@/services/dynamic-fetchers'

import { BsFillHeartFill } from 'react-icons/bs'

import GameNames from '@/constants/game-names'

import Spinner from '@/components/ui/spinner'

import SWR_KEYS from '@/constants/SWR-keys'

import { incrementLikeCountFetcher } from '@/services/dynamic-fetchers'

interface LikeDisplayerGamesProps {
    gameID: GameNames
}

const LikeDisplayerGames: FC<LikeDisplayerGamesProps> = ({ gameID }) => {
    const [hasLikedGameBefore, setHasLikedGameBefore] = useState(false)

    const { mutate } = useSWRConfig()

    const {
        data: response,
        error,
        isLoading,
    } = useSWR(SWR_KEYS.FETCH_COUNT_LIKE_GAME + gameID, () => fetchGameFetcher(gameID))

    // onMount check LS
    useEffect(() => {
        const hasLikedBefore = localStorage.getItem(gameID)
        const parsedBoolean = hasLikedBefore && JSON.parse(hasLikedBefore)
        if (parsedBoolean === null) {
            setHasLikedGameBefore(false)
            return
        }
        setHasLikedGameBefore(parsedBoolean)
    }, [])

    const handleIncrementLikeCount = async () => {
        if (hasLikedGameBefore) {
            localStorage.setItem(gameID, JSON.stringify(false))
            setHasLikedGameBefore(false)
        } else {
            localStorage.setItem(gameID, JSON.stringify(true))
            setHasLikedGameBefore(true)
        }

        await incrementLikeCountFetcher(gameID, hasLikedGameBefore)
        mutate(SWR_KEYS.FETCH_COUNT_LIKE_GAME + gameID)
    }

    return (
        <>
            <button
                onClick={handleIncrementLikeCount}
                className="bg-[#232730] !text-[#F6F7F9] w-fit rounded-xl 
                  text-center sm:text-start text-sm mx-auto sm:mx-0"
                title="Click to show your love!"
            >
                <div className="px-2 py-1 flex gap-x-2 items-center">
                    <BsFillHeartFill
                        className={`${
                            hasLikedGameBefore ? 'text-red-500' : 'text-white '
                        } `}
                    />
                    {isLoading ? (
                        <Spinner moreCSS="border-t-black" />
                    ) : (
                        response?.result[0].likeCount
                    )}
                </div>
            </button>
        </>
    )
}

export default LikeDisplayerGames
