import Carousel from './carousel'

import { FC } from 'react'
import Image from 'next/image'
import { TITLE_SEC_FONT_SIZE } from '@/constants/responsive-fonts'

export interface MediaObjType {
    mediaObj: { name: string; media: any }[]
}

interface AboutSectionProps {
    img1: any
    desc1: string

    img2: any
    desc2: string

    alt: string
    title: string
    text1: string
    text2: string
    text3?: string
    imgOnTheRight?: boolean
    moreCSS?: string

    mediaObj: MediaObjType['mediaObj']
}

const AboutSection: FC<AboutSectionProps> = ({
    img1,
    desc1,
    img2,
    desc2,
    title,
    text1,
    text2,
    text3,
    imgOnTheRight,
    moreCSS,
    alt,
    mediaObj,
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
                } w-[65vw] sm:w-[22vw] flex flex-col items-center gap-y-2`}
            >
                <Carousel
                    mediaObj={mediaObj}
                    desc1={desc1}
                    img1={img1}
                    desc2={desc2}
                    img2={img2}
                />
            </div>

            <div className={`sm:max-w-[50%]`}>
                <h2 className={`font-semibold mb-4 ${TITLE_SEC_FONT_SIZE} 2xl:text-2xl`}>
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
