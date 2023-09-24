import CapitalGuesser from '@/components/play/capital-guesser'

import { FC } from 'react'

import { getDictionary } from '@/utils/dictionary'
import { Locale } from '@/i18n.config'

const CapitalGuesserWrapper: FC<{ params: { lang: Locale } }> = async ({ params }) => {
    const {
        play_lang: { modals, game_dashboard },
    } = await getDictionary(params.lang)

    return <CapitalGuesser tradModals={modals} tradDashboard={game_dashboard} />
}

export default CapitalGuesserWrapper
