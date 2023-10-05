// import 'server-only'
import type { Locale } from '@/i18n.config'
import { FaViacoin } from 'react-icons/fa'

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then(module => module.default),
    fr: () => import('@/dictionaries/fr.json').then(module => module.default),
}

// export const getDictionary = async (locale: Locale) => {
//     return await dictionaries[locale]()
// }

export const getDictionary = async (locale: Locale) => {
    if (locale !== 'fr' || 'en') return await dictionaries.en()

    try {
        return await dictionaries[locale]()
    } catch (error) {
        console.error(`Error loading dictionary for locale "${locale}":`, error)
        return await dictionaries.en()
    }
}
