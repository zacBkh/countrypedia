import { GetAllCountriesProps } from '@/services/fetchers'
import capitalize from './capitalize'
// Will add '-' to country names
export const slugCtyName = (ctyName: GetAllCountriesProps['name']['common']) => {
    const sluggedCtyName = ctyName.toLowerCase().replaceAll(' ', '-')
    return sluggedCtyName
}

// Will take 'peru_per' and return 'Peru'
export const unSlugCtyName = (ctyName: string) => {
    const unSluggedCtyName = ctyName.replace(/_.*/, '').toUpperCase()
    const capitalizedUnSluggedCtyName = capitalize(unSluggedCtyName)
    return capitalizedUnSluggedCtyName
}

// Will take 'peru_per' and return 'per'
export const removeSlug = (sluggedURL: string) => {
    const unSlugged = sluggedURL.replace(/^[^_]*_/, '')
    return unSlugged
}
