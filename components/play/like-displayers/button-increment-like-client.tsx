'use client'

import { FC } from 'react'

interface LikeDisplayerGamesProps {
    children?: React.ReactNode
}

const IncrementLikeButtonClient: FC<LikeDisplayerGamesProps> = ({ children }) => {
    const handleIncrementLikeCount = () => {
        console.log('You clicked on the button')
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
