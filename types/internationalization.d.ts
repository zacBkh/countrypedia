import TradData from '../dictionaries/en.json' // TypeScript infers the type of jsonData

export type TradKeysType = {
    button_lang: (typeof TradData)['button_lang']
    page: (typeof TradData)['page']
    navigation: (typeof TradData)['navigation']
    continentsLang: (typeof TradData)['continentsLang']
    navbarLang: (typeof TradData)['navbarLang']
    play_lang: (typeof TradData)['play_lang']
    about_me: (typeof TradData)['about_me']
}

import { Locale } from '@/i18n.config'

export interface LayoutPlayProps {
    children: React.ReactNode
    params: { lang: Locale }
}
