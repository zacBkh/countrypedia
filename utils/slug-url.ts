import { GetAllCountriesProps } from '@/services/fetchers'

export const slugCtyName = (ctyName: GetAllCountriesProps['name']['common']) => {
    const sluggedCtyName = ctyName.toLowerCase().replaceAll(' ', '-')
    return sluggedCtyName
}

export const unSlugCtyName = (ctyName: GetAllCountriesProps['name']['common']) => {
    const unSluggedCtyName = ctyName.toLowerCase().replaceAll('-', ' ')
    return unSluggedCtyName
}
