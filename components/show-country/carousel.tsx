'use client'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import { FC, useState } from 'react'
import Image from 'next/image'

import { TITLE_SEC_FONT_SIZE } from '@/constants/responsive-fonts'

import { ARROW_CAROUSEL_CSS } from '@/constants/carousel-arrow-style'

interface CarouselProps {
    countryName: string
    flag: string
    coa: string
}

const Carousel: FC<CarouselProps> = ({ countryName, flag, coa }) => {
    const mediaObject = [
        { name: `The flag of ${countryName}`, media: flag },
        { name: `The Coat of Arms of ${countryName}`, media: coa },
    ]

    const [activeImg, setActiveImg] = useState(0)

    const switchPicHandler = (operator: '+' | '-') => {
        if (operator === '+' && activeImg < mediaObject.length - 1) {
            setActiveImg(prev => prev + 1)
            return
        }
        if (operator === '-' && activeImg > 0) {
            setActiveImg(prev => prev - 1)
        }
    }

    const getImgQueue = (index: number) => {
        if (index === activeImg) {
            return 'active'
        }
        if (index === activeImg - 1) {
            return 'prev'
        }

        if (
            index === activeImg + 1 ||
            (activeImg === mediaObject.length - 1 && index === 0)
        ) {
            return 'next'
        }
        return 'next'
    }

    const width = 'w-[269px] sm:w-[384px] 2xl:w-[461px]'
    const height = 'h-[143px] sm:h-[256px] 2xl:h-[307px]'
    return (
        <>
            <div className={`${width} overflow-hidden`}>
                <div className="flex items-center relative h-8 w-full">
                    {mediaObject.map((media, index) => (
                        <p
                            key={media.name}
                            className={` ${getImgQueue(index)}
                            ${TITLE_SEC_FONT_SIZE}
                            transition-transform duration-700
                            w-full absolute text-center h-10 mb-4`}
                        >
                            {media.name}
                        </p>
                    ))}
                </div>
                <div
                    className={`bg-[#EEEFF2] dark:bg-[#16181D] rounded-lg flex relative overflow-hidden ${height} border-2 border-[#EBECF0]`}
                >
                    <button
                        aria-label="Previous picture"
                        onClick={() => switchPicHandler('-')}
                        className={`${ARROW_CAROUSEL_CSS}
                        ${activeImg === 0 ? 'invisible' : 'alignBtnCarrPopUpLeft'}`}
                    >
                        <IoIosArrowBack />
                    </button>
                    {mediaObject.map((media, index) => (
                        <div
                            key={media.name}
                            className={`${width}  ${height}  transition-transform duration-700 shrink-0 grow absolute ${getImgQueue(
                                index,
                            )}`}
                        >
                            <Image
                                loading="eager"
                                fill
                                src={media.media}
                                alt={`${media.name}`}
                                className={` rounded-lg ${
                                    index === 0 ? 'object-cover' : 'object-contain'
                                } `}
                            />
                        </div>
                    ))}
                    <button
                        aria-label="Next picture"
                        onClick={() => switchPicHandler('+')}
                        className={`${ARROW_CAROUSEL_CSS}
                        ${
                            activeImg === mediaObject.length - 1
                                ? 'invisible'
                                : 'alignBtnCarrPopUpRight'
                        }
                        `}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Carousel
