import Carousel from './carousel'

import { FC } from 'react'

import { CAROUSEL_SIZE_WIDTH } from '@/constants/carousel-arrow-style'

export interface MediaObjType {
    mediaObj: { media: any; legendPic: string; alt: string; id: number }[]
}

interface AboutSectionProps {
    title: string
    text1: string
    text2: string
    text3?: string
    imgOnTheRight?: boolean
    moreCSS?: string

    mediaObj: MediaObjType['mediaObj']

    tradImgLegend: TradKeysType['about_me']['section_1']['images_section_1']
}

import type { TradKeysType } from '@/types/internationalization'

const AboutSection: FC<AboutSectionProps> = ({
    mediaObj,

    title,
    text1,
    text2,
    text3,
    imgOnTheRight,
    moreCSS,

    tradImgLegend,
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
                <Carousel mediaObj={mediaObj} tradImgLegend={tradImgLegend} />
            </div>

            <div className={`sm:max-w-[50%]`}>
                <h2 className={`font-bold mb-4 text-2xl sm:text-3xl`}>{title}</h2>
                <div className="text-lg sm:text-xl font-semibold flex flex-col gap-y-3">
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
