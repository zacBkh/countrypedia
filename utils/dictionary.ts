// import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then(module => module.default),
    fr: () => import('@/dictionaries/fr.json').then(module => module.default),
}

// export const getDictionary = async (locale: Locale) => {
//     return await dictionaries[locale]()
// }

export const getDictionary = async (locale: Locale) => {
    try {
        return await dictionaries[locale]()
    } catch (error) {
        console.error(`Error loading dictionary for locale "${locale}":`, error)
        return await dictionaries['en']()
    }
}
