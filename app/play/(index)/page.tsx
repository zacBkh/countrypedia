import { APP_LINKS } from '@/constants/urls'
const { PLAY, COUNTRY_LOCATOR, CAPITAL_GUESSER } = APP_LINKS

import GameCard from '@/components/game-card'

import TestPic from '../../../public/test.jpg'

const PlayPage = async () => {
    return (
        <>
            <div className="p-3 md:p-6 flex items-center flex-wrap gap-2">
                <GameCard
                    title="Country Locator 📍"
                    desc={{
                        body: 'Locate randomly generated countries on an interactive map.',
                        teasing: 'Ready to be challenged? 🧠',
                    }}
                    img={TestPic}
                    link={`${PLAY}${COUNTRY_LOCATOR}`}
                    level={'Easy'}
                />

                <GameCard
                    title="Capitals Quiz 😱"
                    desc={{
                        body: "Pick the right countries' capitals.in a limited time.",
                        teasing: 'How many of them do you know? 🤓',
                    }}
                    img={TestPic}
                    link={`${PLAY}${CAPITAL_GUESSER}`}
                    level={'Easy'}
                />
            </div>
        </>
    )
}

export default PlayPage
