'use client'

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

import { FC, useState } from 'react'
import Image from 'next/image'

import { MediaObjType } from './section'

interface CarouselProps {
    img1: string
    desc1: string
    img2: string
    desc2: string
    mediaObj: MediaObjType['mediaObj']
}

const Carousel: FC<CarouselProps> = ({ mediaObj }) => {
    const [activeImg, setActiveImg] = useState(0)

    const arrowStyle =
        'dark:bg-[#23272F] dark:hover:!bg-[#23272F] bg-[#E5E7EC] hover:bg-[#E5E7EC] bg-opacity-90 active:bg-opacity-100 text-sm p-1 md:p-2 rounded-full  transition-opacity duration-[0.5s] absolute z-50 active:transform-none hover:!bg- '

    const switchPicHandler = (operator: '+' | '-') => {
        if (operator === '+' && activeImg < mediaObj.length - 1) {
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
                    className={`bg-[#EEEFF2] dark:bg-[#16181D] rounded-lg flex relative overflow-hidden ${height} border-2 border-[#EBECF0]`}
                >
                    <button
                        aria-label="Previous picture"
                        onClick={() => switchPicHandler('-')}
                        className={`${arrowStyle}
                        ${activeImg === 0 ? 'invisible' : 'alignBtnCarrPopUpLeft'}`}
                    >
                        <IoIosArrowBack />
                    </button>
                    {mediaObj.map((media, index) => (
                        <div
                            key={media.name}
                            className={`${width} ${height}  transition-transform duration-500 shrink-0 grow absolute ${getImgQueue(
                                index,
                            )}`}
                        >
                            <Image
                                loading="eager"
                                fill
                                src={media.media}
                                alt={`${media.name}`}
                                className={` rounded-lg object-cover `}
                            />
                        </div>
                    ))}
                    <button
                        aria-label="Next picture"
                        onClick={() => switchPicHandler('+')}
                        className={`${arrowStyle}
                        ${
                            activeImg === mediaObj.length - 1
                                ? 'invisible'
                                : 'alignBtnCarrPopUpRight'
                        }
                        `}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
                <div className="flex items-center relative h-8 w-full mt-5">
                    {mediaObj.map((media, index) => (
                        <span
                            key={media.name}
                            className={` ${getImgQueue(index)}
                            transition-transform duration-500
                            w-full absolute text-center whitespace-nowrap mb-4
                            text-sm 2xl:text-base italic
                            `}
                        >
                            {media.name}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Carousel
