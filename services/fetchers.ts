import { FetchLinks } from '@/constants/urls'
const { ALL_COUNTRIES } = FetchLinks

export interface ReturnFxProps {
    name: { common: string; official: string; nativeName: object }
    flags: { png: string; svg: string; alt: string }
    coatOfArms: { png: string; svg: string }
    capital: string[]
    region: string
    languages: string
    maps: { googleMaps: string; openStreetMaps: string }
    cca3: string
}

export const getAllCountries = async (): Promise<ReturnFxProps[]> => {
    try {
        const res = await fetch(ALL_COUNTRIES)
        await new Promise(resolve => setTimeout(resolve, 3000))
        return res.json()
    } catch (error) {
        console.log('error [1]', error)
        throw error
    }
}
