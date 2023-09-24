'use client'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import { FC, useState } from 'react'
import Image from 'next/image'

import { MediaObjType } from './section'

import { ARROW_CAROUSEL_CSS } from '@/constants/carousel-arrow-style'

import {
    CAROUSEL_SIZE_WIDTH,
    CAROUSEL_SIZE_HEIGHT,
} from '@/constants/carousel-arrow-style'

import type { TradKeysType } from '@/types/internationalization'

interface CarouselProps {
    mediaObj: MediaObjType['mediaObj']

    tradImgLegend: {
        [key: string]: string
    }
}

const Carousel: FC<CarouselProps> = ({ mediaObj, tradImgLegend }) => {
    const [activeImg, setActiveImg] = useState(0)

    const [areArrowBtnDisabled, setareArrowBtnDisabled] = useState(false)

    const switchPicHandler = (operator: '+' | '-') => {
        setareArrowBtnDisabled(true)
        setTimeout(() => {
            setareArrowBtnDisabled(false)
        }, 200)

        if (operator === '+' && activeImg < mediaObj.length - 1) {
            setActiveImg(prev => prev + 1)
            return
        }
        if (operator === '-' && activeImg > 0) {
            setActiveImg(prev => prev - 1)
        }
    }

    // Algo à optimiser
    const getImgQueue = (index: number) => {
        if (index < activeImg) {
            return 'prev'
        }

        if (index === activeImg) {
            return 'active'
        }
        if (index === activeImg - 1) {
            return 'prev'
        }

        if (index === 0) {
            return 'prev'
        }

        if (
            index === activeImg + 1 ||
            (activeImg === mediaObj.length - 1 && index === 0)
        ) {
            return 'next'
        }
        return 'next'
    }

    const width = CAROUSEL_SIZE_WIDTH
    const height = CAROUSEL_SIZE_HEIGHT
    return (
        <>
            <div className={`${width} overflow-hidden`}>
                <div
                    className={`bg-[#EEEFF2] dark:bg-[#16181D] rounded-lg flex relative overflow-hidden ${height} border border-gray-300`}
                >
                    <button
                        disabled={areArrowBtnDisabled}
                        aria-label="Previous picture"
                        onClick={() => switchPicHandler('-')}
                        className={`cursor-pointer ${ARROW_CAROUSEL_CSS}
                        ${activeImg === 0 ? 'invisible' : 'alignBtnCarrPopUpLeft'}`}
                    >
                        <IoIosArrowBack className="text-lg sm:text-base" />
                    </button>
                    {mediaObj.map((media, index) => (
                        <div
                            key={media.id}
                            className={`${width} ${height}  transition-transform duration-500 shrink-0 grow absolute ${getImgQueue(
                                index,
                            )}`}
                        >
                            <Image
                                sizes="max-width: 640px) 85vw, (max-width: 768px) 35vw, (max-width: 1280px) 29vw, (max-width: 1536px) 22vw"
                                loading="eager"
                                fill
                                src={media.media}
                                alt={`${media.alt}`}
                                className={` rounded-lg object-cover `}
                            />
                        </div>
                    ))}
                    <button
                        disabled={areArrowBtnDisabled}
                        aria-label="Next picture"
                        onClick={() => switchPicHandler('+')}
                        className={`cursor-pointer ${ARROW_CAROUSEL_CSS}
                        ${
                            activeImg === mediaObj.length - 1
                                ? 'invisible'
                                : 'alignBtnCarrPopUpRight'
                        }
                        `}
                    >
                        <IoIosArrowForward className="text-lg sm:text-base" />
                    </button>
                </div>
                <div className="flex items-center relative h-12 w-full mt-5">
                    {mediaObj.map((media, index) => (
                        <p
                            key={media.id}
                            className={` ${getImgQueue(index)}
                            transition-transform duration-500
                            w-full absolute text-center mb-4 px-1
                            text-sm 2xl:text-base italic
                            `}
                        >
                            {tradImgLegend[media.id]}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Carousel
