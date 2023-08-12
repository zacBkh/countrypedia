import { FC } from 'react'

// import { getLikeCount } from '@/services/dynamic-fetchers'

import { BsFillHeartFill } from 'react-icons/bs'

import { fetchLikesCount } from '@/services/prisma-queries'

import GameNames from '@/constants/game-names'

interface LikeDisplayerGamesProps {
    gameID: GameNames
}

const LikeDisplayerGamesServer: FC<LikeDisplayerGamesProps> = async ({ gameID }) => {
    const likesCount = await fetchLikesCount()
    const ctyLoc = likesCount.find(elem => elem.name === GameNames.COUNTRY_LOCATOR_NAME)
    const capGuess = likesCount.find(elem => elem.name === GameNames.CAPITAL_GUESSER_NAME)

    let likeCount
    if (gameID === GameNames.COUNTRY_LOCATOR_NAME) {
        likeCount = ctyLoc?.likeCount
    } else {
        likeCount = capGuess?.likeCount
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
