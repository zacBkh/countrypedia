import { FC } from 'react'

import CountryLocatorWrapper from '@/components/maps/play/country-locator/country-locator-wrapper'

import { getDictionary } from '@/utils/dictionary'
import { LayoutPlayProps } from '@/types/internationalization'

const CountryMapLocator: FC<LayoutPlayProps> = async ({ params }) => {
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
