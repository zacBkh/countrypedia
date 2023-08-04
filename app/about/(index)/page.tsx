import TreeImg from '../../../public/pictures/tree.jpg'
import MeTeacher from '../../../public/pictures/me-at-school.jpg'

import AboutSection from '@/components/about/section'

const AboutPage = ({}) => {
    const mediaObjSec1 = [
        { name: '11111111', media: TreeImg },
        { name: '222222222', media: TreeImg },
        { name: '3333333', media: TreeImg },
    ]
    const mediaObjSec2 = [
        { name: '11111111', media: MeTeacher },
        { name: '222222222', media: MeTeacher },
        { name: '3333333', media: MeTeacher },
    ]
    return (
        <>
            <div className="flex flex-col gap-y-12">
                <AboutSection
                    mediaObj={mediaObjSec1}
                    img1={TreeImg}
                    desc1="📍 Siargao, Philippines"
                    img2={TreeImg}
                    desc2="📍 Siargao, Philippines"
                    alt="Picture of me on a Scooter in a sunny country "
                    title="Who am I? 🤓"
                    text1="Hello, I am Zach, a Web Developer, living between Paris and Dubai 📍"
                    text2="I am passionnate about discovering the world and capture it through my camera lens! 📸"
                    text3="When I was a kid I used to learn all world capitals by heart. I was craving travel and as soon as I could I went abroad to discover the world! 🌎"
                    moreCSS="sm:text-right mt-16"
                />
                <AboutSection
                    mediaObj={mediaObjSec2}
                    imgOnTheRight
                    img1={MeTeacher}
                    desc1="📍 My sisters' school, the day she asked me to create CountryPedia 😂"
                    img2={MeTeacher}
                    desc2="📍 My sisters' school, the day she asked me to create CountryPedia 😂"
                    alt="Picture of me on a Scooter in a sunny country "
                    title="Who am I? 🤓"
                    text1="My sister is a teacher. She one day came to me complaining there is no good website you can learn and test your knowledge about the world's countries 😱"
                    text2="So guess what I did? I asked her exact needs and created it! 😎"
                    text3="Today, the 12 class at her school are using CountryPedia and I am very proud of that. I keep updating the app to introduce features requested by other teachers."
                />
            </div>
        </>
    )
}

export default AboutPage
