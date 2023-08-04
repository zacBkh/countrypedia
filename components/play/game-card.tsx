import Image from 'next/image'

import { FC } from 'react'

import Button from '../ui/buttons'

import { TITLE_FONT_SIZE, DETAILS_FONT_SIZE } from '@/constants/responsive-fonts'

interface GameCardProps {
    title: string
    desc: { body: string; teasing: string }
    img: any
    level: string
    link: string
    objectCover?: boolean
}

const GameCard: FC<GameCardProps> = ({ title, desc, img, level, link, objectCover }) => {
    const displaySuspensionPoints =
        'text-ellipsis whitespace-nowrap overflow-hidden text-start'

    return (
        <div
            className={`w-[320px] h-[320px] md:w-[420px] md:h-[402px] bg-[#F7F7F9] border shadow dark:shadow-none rounded-lg  shadowCardsHov dark:bg-[#16181D] overflow-hidden mx-auto`}
        >
            <div className="w-full h-36 md:h-48 relative">
                <Image
                    fill
                    className={objectCover ? 'object-cover' : ''}
                    src={img}
                    alt={'Preview of the game'}
                />
            </div>

            <div className="py-2 px-3 sm:px-4 flex flex-col gap-y-4">
                <h5
                    className={`${TITLE_FONT_SIZE} text-center font-bold tracking-tight text-gray-900 dark:text-white`}
                >
                    {title}
                </h5>

                <div
                    className={`${DETAILS_FONT_SIZE} flex flex-col text-gray-700 dark:text-gray-400 text-center sm:text-start`}
                >
                    <p>{desc.body}</p>
                    <p>{desc.teasing}</p>
                </div>
                <div className="flex justify-center gap-x-8">
                    <Button
                        ariaLabel={`Click to play the game`}
                        text="Play the game! 💪🏼"
                        isNextLink
                        link={link}
                    />
                </div>
            </div>
        </div>
    )
}

export default GameCard
