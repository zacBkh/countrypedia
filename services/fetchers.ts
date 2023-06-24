import { FetchLinks } from '@/constants/urls'
const { ALL_COUNTRIES } = FetchLinks

export interface ReturnFxInterface {
    name: object
    flags: object
    capital: string[]
    region: string
    languages: string
    maps: object
    cca3: string
}

export const getAllCountries = async (): Promise<ReturnFxInterface[]> => {
    try {
        const res = await fetch(ALL_COUNTRIES)
        return res.json()
    } catch (error) {
        console.log('error [1]', error)
        throw error
    }
}
