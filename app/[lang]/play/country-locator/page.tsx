import { FC } from 'react'

import CountryLocatorWrapper from '@/components/maps/play/country-locator/country-locator-wrapper'

import { getDictionary } from '@/utils/dictionary'
import { Locale } from '@/i18n.config'

const CountryMapLocator: FC<{ params: { lang: Locale } }> = async ({ params }) => {
    const {
        play_lang: { modals, game_dashboard },
    } = await getDictionary(params.lang)

    return (
        <>
            <CountryLocatorWrapper tradModals={modals} tradDashboard={game_dashboard} />
        </>
    )
}

export default CountryMapLocator
