import Carousel from './carousel'

import { FC } from 'react'
import { TITLE_SEC_FONT_SIZE } from '@/constants/responsive-fonts'

import { CAROUSEL_SIZE_WIDTH } from '@/constants/carousel-arrow-style'

export interface MediaObjType {
    mediaObj: { media: any; legendPic: string; alt: string }[]
}

interface AboutSectionProps {
    title: string
    text1: string
    text2: string
    text3?: string
    imgOnTheRight?: boolean
    moreCSS?: string

    mediaObj: MediaObjType['mediaObj']
}

const AboutSection: FC<AboutSectionProps> = ({
    mediaObj,

    title,
    text1,
    text2,
    text3,
    imgOnTheRight,
    moreCSS,
}) => {
    return (
        <div
            className={`${
                moreCSS ?? ''
            } text-center sm:text-left flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 justify-between items-center w-full`}
        >
            <div
                className={`${
                    imgOnTheRight ? 'order-2' : ''
                } ${CAROUSEL_SIZE_WIDTH} flex flex-col items-center gap-y-2`}
            >
                <Carousel mediaObj={mediaObj} />
            </div>

            <div className={`sm:max-w-[50%]`}>
                <h2 className={`font-bold mb-4 ${TITLE_SEC_FONT_SIZE} xl:text-2xl`}>
                    {title}
                </h2>
                <div className="2xl:text-lg">
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p className="mt-4">{text3}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
