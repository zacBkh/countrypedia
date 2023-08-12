import { FC } from 'react'

import { getLikeCount } from '@/services/dynamic-fetchers'

import { BsFillHeartFill } from 'react-icons/bs'

interface LikeDisplayerGamesProps {
    gameID: string
}

const LikeDisplayerGamesServer: FC<LikeDisplayerGamesProps> = async ({ gameID }) => {
    const res = await getLikeCount(2000)
    const { country_locator, capital_guesser } = res.count

    let likeCount
    if (gameID === 'ctyLocator') {
        likeCount = country_locator
    } else {
        likeCount = capital_guesser
    }

    return (
        <>
            <div className="px-2 py-1 flex gap-x-2 items-center">
                <BsFillHeartFill /> {likeCount}
            </div>
        </>
    )
}

export default LikeDisplayerGamesServer
