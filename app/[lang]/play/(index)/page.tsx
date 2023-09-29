import { FC } from 'react'

import { APP_LINKS } from '@/constants/urls'
const { PLAY, COUNTRY_LOCATOR, CAPITAL_GUESSER } = APP_LINKS

import GameCard from '@/components/play/game-card'

import ScreenshotCtyLocator from '@images/screenshot-country-locator.png'
import ScreenshotCapitalGuesser from '@images/screenshot-capital-guesser.png'

import { GameNames } from '@/constants/game-names'

import { Locale } from '@/i18n.config'
import { getDictionary } from '@/utils/dictionary'

import { fetchReviews } from '@/services/prisma-queries'
import Reviews from '@/components/reviews/reviews'

import { Suspense } from 'react'

const PlayPage: FC<{ params: { lang: Locale } }> = async ({ params: { lang } }) => {
    // Deep destructuring of card_games
    const {
        play_lang: {
            card_games: { country_locator_description, capital_guesser_description },
        },
        button_lang,
    } = await getDictionary(lang)

    const { title, paragraph1, paragraph2 } = capital_guesser_description

    const {
        title: titleCL,
        paragraph1: paragraph1CL,
        paragraph2: paragraph2CL,
    } = country_locator_description

    const allReviews = await fetchReviews()

    return (
        <>
            <div className="flex items-start flex-wrap gap-y-6">
                <GameCard
                    id={GameNames.COUNTRY_LOCATOR_NAME}
                    title={`${titleCL} 📍`}
                    desc={{
                        body: paragraph1CL,
                        teasing: paragraph2CL,
                    }}
                    img={ScreenshotCtyLocator}
                    link={`${PLAY}${COUNTRY_LOCATOR}`}
                    btnTranslation={button_lang}
                />

                <GameCard
                    id={GameNames.CAPITAL_GUESSER_NAME}
                    objectCover
                    title={`${title} 😱`}
                    desc={{
                        body: paragraph1,
                        teasing: paragraph2,
                    }}
                    img={ScreenshotCapitalGuesser}
                    link={`${PLAY}${CAPITAL_GUESSER}`}
                    btnTranslation={button_lang}
                />
            </div>

            {/* <Suspense fallback={<div className="text-4xl">Loading...</div>}> */}
            <Reviews data={allReviews} />
            {/* </Suspense> */}
        </>
    )
}

export default PlayPage
