import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'
import { getAllCountriesProps } from '@/services/fetchers'

import { StaticImageData } from 'next/image'

// import { BiSolidCity, BiWorld, BiUserVoice } from 'react-icons/bi'
// import { SiGooglemaps } from 'react-icons/si'
// import { FiArrowRight } from 'react-icons/fi'

import Button from '../ui/buttons'

import { TITLE_FONT_SIZE, DETAILS_FONT_SIZE } from '@/constants/responsive-fonts'

interface GameCardProps {
    title: string
    desc: { body: string; teasing: string }
    img: any
    level: string
    link: string
}

const GameCard: FC<GameCardProps> = ({ title, desc, img, level, link }) => {
    const displaySuspensionPoints =
        'text-ellipsis whitespace-nowrap overflow-hidden text-start'

    return (
        <div
            className={`w-[300px] h-[320px] md:w-[350px] md:h-[402px] bg-[#F7F7F9] border border-[#d9dbe3] dark:border-gray-600 rounded-lg dark:shadow shadowCardsHov dark:bg-[#16181D] overflow-hidden mx-auto`}
        >
            <div className="w-full h-36 md:h-48 relative">
                <Image fill className="object-cover" src={img} alt={'This is an alt'} />
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
                    {/* {capital[0] ? (
                        <div className="flex justify-center items-center gap-x-1 sm:gap-x-2 min-w-[33%]">
                            <BiSolidCity className="min-w-[16px] min-h-[16px]" />
                            <p className={displaySuspensionPoints}> {capital[0]}</p>
                        </div>
                    ) : (
                        ''
                    )}
                    {region ? (
                        <div className="flex justify-center items-center gap-x-1 sm:gap-x-2 min-w-[33%]">
                            <BiWorld className="min-w-[16px] min-h-[16px]" />
                            <p className={displaySuspensionPoints}>{region}</p>
                        </div>
                    ) : (
                        ''
                    )}

                    {Object.values(languages)[0] ? (
                        <div className="flex justify-center items-center gap-x-1 sm:gap-x-2 min-w-[33%]">
                            <BiUserVoice className="min-w-[16px] min-h-[16px]" />
                            <p className={displaySuspensionPoints}>
                                {Object.values(languages)[0]}
                            </p>
                        </div>
                    ) : (
                        ''
                    )} */}
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