import { FC } from 'react'

import TreeImg from '@images/pictures/tree.jpg'
import MeTeacher from '@images/pictures/me-at-school.jpg'
import Hiking from '@images/pictures/hiking.jpg'
import Pool from '@images/pictures/pool.jpg'
import Ski from '@images/pictures/ski.jpg'

import AboutSection from '@/components/about/section'

import { Locale } from '@/i18n.config'
import { getDictionary } from '@/utils/dictionary'

interface PageProps {
    params: {
        lang: Locale
    }
}

const AboutPage: FC<PageProps> = async ({ params: { lang } }) => {
    const {
        about_me: { section_1, section_2 },
    } = await getDictionary(lang)

    const {
        title__section_1,
        text_1__section_1,
        text_2__section_1,
        text_3__section_1,
        images_section_1,
    } = section_1

    const {
        title__section_2,
        text_1__section_2,
        text_2__section_2,
        text_3__section_2,
        images_section_2,
    } = section_2

    const mediaObjSec1 = [
        {
            id: 0,
            media: TreeImg,
            legendPic: '📍 Siargao, Philippines',
            alt: 'Picture of me on a Scooter in a sunny country',
        },
        {
            id: 1,
            media: Hiking,
            legendPic: '📍 Hiking somewhere in the Alps, France',
            alt: 'Picture of me in a hiking trip',
        },
        {
            id: 2,
            media: Pool,
            legendPic: '📍 Pretending to debug my code in Dubai 😂',
            alt: 'Picture of me pretending to code at the swiming pool',
        },
        {
            id: 3,
            media: Ski,
            legendPic: '📍 Hitting the slopes, Courchevel',
            alt: 'Picture of zme on a Scooter in a sunny country',
        },
    ]
    const mediaObjSec2 = [
        {
            id: 0,
            media: MeTeacher,
            legendPic:
                "📍 My sisters' school, the day she asked me to create CountryPedia 😂",
            alt: "Picture of me in my sisters' class, writing on the whiteboard",
        },
        {
            id: 1,
            media: MeTeacher,
            legendPic:
                "📍 My sisters' school, the day she asked me to create CountryPedia 😂",
            alt: "Picture of me in my sisters' class, writing on the whiteboard",
        },
        {
            id: 2,
            media: MeTeacher,
            legendPic:
                "📍 My sisters' school, the day she asked me to create CountryPedia 😂",
            alt: "Picture of me in my sisters' class, writing on the whiteboard",
        },
    ]
    return (
        <div className="flex flex-col gap-y-12">
            <AboutSection
                tradImgLegend={images_section_1}
                mediaObj={mediaObjSec1}
                title={title__section_1}
                text1={text_1__section_1}
                text2={text_2__section_1}
                text3={text_3__section_1}
                moreCSS="sm:text-right mt-16"
            />
            <AboutSection
                tradImgLegend={images_section_2}
                imgOnTheRight
                mediaObj={mediaObjSec2}
                title={title__section_2}
                text1={text_1__section_2}
                text2={text_2__section_2}
                text3={text_3__section_2}
            />
        </div>
    )
}

export default AboutPage
