import TreeImg from '../../../public/pictures/tree.jpg'
import MeTeacher from '../../../public/pictures/me-at-school.jpg'
import Hiking from '../../../public/pictures/hiking.jpg'
import Pool from '../../../public/pictures/pool.jpg'
import Ski from '../../../public/pictures/ski.jpg'

import AboutSection from '@/components/about/section'

const AboutPage = ({}) => {
    const mediaObjSec1 = [
        {
            media: TreeImg,
            legendPic: '📍 Siargao, Philippines',
            alt: 'Picture of me on a Scooter in a sunny country',
        },
        {
            media: Hiking,
            legendPic: '📍 Hiking somewhere in the Alps, France',
            alt: 'Picture of me in a hiking trip',
        },
        {
            media: Pool,
            legendPic: '📍 Pretending to debug my code in Dubai 😂',
            alt: 'Picture of me pretending to code at the swiming pool',
        },
        {
            media: Ski,
            legendPic: '📍 Hitting the slopes, Courchevel',
            alt: 'Picture of zme on a Scooter in a sunny country',
        },
    ]
    const mediaObjSec2 = [
        {
            media: MeTeacher,
            legendPic:
                "📍 My sisters' school, the day she asked me to create CountryPedia 😂",
            alt: "Picture of me in my sisters' class, writing on the whiteboard",
        },
        {
            media: MeTeacher,
            legendPic:
                "📍 My sisters' school, the day she asked me to create CountryPedia 😂",
            alt: "Picture of me in my sisters' class, writing on the whiteboard",
        },
        {
            media: MeTeacher,
            legendPic:
                "📍 My sisters' school, the day she asked me to create CountryPedia 😂",
            alt: "Picture of me in my sisters' class, writing on the whiteboard",
        },
    ]
    return (
        <div className="flex flex-col gap-y-12">
            <AboutSection
                mediaObj={mediaObjSec1}
                title="Who am I? 😎"
                text1="Hello, I am Zach, a Web Developer, living between Paris and Dubai 📍"
                text2="I am passionnate about discovering the world and capture it through my camera lens! 📸"
                text3="When I was a kid I used to learn all world capitals by heart. I was craving travel and as soon as I could I went abroad to discover the world! 🌎"
                moreCSS="sm:text-right mt-16"
            />
            <AboutSection
                imgOnTheRight
                mediaObj={mediaObjSec2}
                title="Why CountryPedia? 🤓"
                text1="My sister is a teacher. She one day came to me complaining there is no good website where you can learn and test your knowledge about the world's countries 😱"
                text2="So guess what I did? I asked her exact needs and created it! 😎"
                text3="Today, the 12 classes at her school are using CountryPedia and I am very proud of that. I keep updating the app to introduce features requested by other teachers."
            />
        </div>
    )
}

export default AboutPage
