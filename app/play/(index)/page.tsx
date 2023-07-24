import { APP_LINKS } from '@/constants/urls'
const { PLAY, COUNTRY_LOCATOR } = APP_LINKS

import GameCard from '@/components/game-card'

import TestPic from '../../../public/test.jpg'

const PlayPage = async () => {
    return (
        <>
            <GameCard
                title="Country Locator"
                desc={{
                    body: 'Locate randomly generated countries on an interactive map.',
                    teasing: 'Ready to be challenged? 🧠',
                }}
                img={TestPic}
                link={`${PLAY}/${COUNTRY_LOCATOR}`}
                level={'Easy'}
            />
        </>
    )
}

export default PlayPage
