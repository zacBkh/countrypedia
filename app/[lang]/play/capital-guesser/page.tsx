import CapitalGuesser from '@/components/play/capital-guesser'

import { FC } from 'react'

import { getDictionary } from '@/utils/dictionary'
import { LayoutPlayProps } from '@/types/internationalization'

const CapitalGuesserWrapper: FC<LayoutPlayProps> = async ({ params }) => {
    const {
        play_lang: { modals, game_dashboard },
    } = await getDictionary(params.lang)

    return <CapitalGuesser tradModals={modals} tradDashboard={game_dashboard} />
}

export default CapitalGuesserWrapper
