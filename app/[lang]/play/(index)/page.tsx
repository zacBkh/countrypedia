import { APP_LINKS } from '@/constants/urls'
const { PLAY, COUNTRY_LOCATOR, CAPITAL_GUESSER } = APP_LINKS

import GameCard from '@/components/play/game-card'

import ScreenshotCtyLocator from '../../../public/screenshot-country-locator.png'
import ScreenshotCapitalGuesser from '../../../public/screenshot-capital-guesser-alt.png'

import GameNames from '@/constants/game-names'

const PlayPage = () => {
    return (
        <>
            <div className="flex items-center flex-wrap gap-y-6">
                <GameCard
                    id={GameNames.COUNTRY_LOCATOR_NAME}
                    title="Country Locator 📍"
                    desc={{
                        body: 'Locate randomly generated countries on an interactive map.',
                        teasing: 'Ready to be challenged? 🧠',
                    }}
                    img={ScreenshotCtyLocator}
                    link={`${PLAY}${COUNTRY_LOCATOR}`}
                />

                <GameCard
                    id={GameNames.CAPITAL_GUESSER_NAME}
                    objectCover
                    title="Capitals Quiz 😱"
                    desc={{
                        body: "Pick the right countries' capitals, from easy to hard! Don't goo too fast...",
                        teasing: 'How many of them do you know? 🤓',
                    }}
                    img={ScreenshotCapitalGuesser}
                    link={`${PLAY}${CAPITAL_GUESSER}`}
                />
            </div>
        </>
    )
}

export default PlayPage
