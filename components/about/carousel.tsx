'use client'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import { FC, useState } from 'react'
import Image from 'next/image'

import { MediaObjType } from './section'

interface CarouselProps {
    mediaObj: MediaObjType['mediaObj']
}

const Carousel: FC<CarouselProps> = ({ mediaObj }) => {
    const [activeImg, setActiveImg] = useState(0)

    const [areArrowBtnDisabled, setareArrowBtnDisabled] = useState(false)

    const arrowStyle =
        'dark:bg-[#23272F] dark:hover:!bg-[#23272F] bg-[#E5E7EC] hover:bg-[#E5E7EC] bg-opacity-90 active:bg-opacity-100 text-sm p-2 rounded-full transition-opacity duration-[0.5s] absolute z-50 active:transform-none hover:!bg- '

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

    const width = 'w-[65vw] sm:w-[22vw]'
    const height = 'h-[86vw] sm:h-[29vw]'
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
                        className={`cursor-pointer ${arrowStyle}
                        ${activeImg === 0 ? 'invisible' : 'alignBtnCarrPopUpLeft'}`}
                    >
                        <IoIosArrowBack className="text-lg sm:text-base" />
                    </button>
                    {mediaObj.map((media, index) => (
                        <div
                            key={media.legendPic}
                            className={`${width} ${height}  transition-transform duration-500 shrink-0 grow absolute ${getImgQueue(
                                index,
                            )}`}
                        >
                            <Image
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
                        className={`cursor-pointer ${arrowStyle}
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
                <div className="flex items-center relative h-8 w-full mt-5">
                    {mediaObj.map((media, index) => (
                        <p
                            key={media.legendPic}
                            className={` ${getImgQueue(index)}
                            transition-transform duration-500
                            w-full absolute text-center mb-4 px-1
                            text-sm 2xl:text-base italic
                            `}
                        >
                            {media.legendPic}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Carousel
