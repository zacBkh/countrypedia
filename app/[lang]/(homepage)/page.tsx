import { FC } from 'react'

import { getAllCountries } from '@/services/fetchers'
import Countries from '@/components/countries'

import { Locale } from '@/i18n.config'
import { getDictionary } from '@/utils/dictionary'

interface HomeProps {
    params: {
        lang: Locale
    }
}

const HomePage: FC<HomeProps> = async ({ params }) => {
    const { btnLang, page, continentsLang } = await getDictionary(params.lang)

    const allCountries = await getAllCountries()

    return (
        <Countries allCountries={allCountries} trad={{ btnLang, page, continentsLang }} />
    )
}

export default HomePage
