import { FetchLinks } from '@/constants/urls'
const { ALL_COUNTRIES, ONE_COUNTRY_BASE, ALL_ISO } = FetchLinks

export interface getAllCountriesProps {
    name: { common: string; official: string; nativeName: object }
    flags: { png: string; svg: string; alt: string }
    coatOfArms: { png: string; svg: string }
    capital: string[]
    region: string
    languages: object
    maps: { googleMaps: string; openStreetMaps: string }
    cca3: string
    cca2: string
}

export const getAllCountries = async (): Promise<getAllCountriesProps[]> => {
    try {
        const res = await fetch(ALL_COUNTRIES)
        return res.json()
    } catch (error) {
        console.log('error [1]', error)
        throw error
    }
}

export interface GetOneCountryProps extends getAllCountriesProps {
    independent: boolean
    unMember: boolean
    currencies: { string: { name: string; symbol: string } }
    subregion: string
    area: number
    demonyms: { eng: { f: string; m: string }; fra: { f: string; m: string } }
    latlng: [number, number]
    population: number
    startOfWeek: string
}

export const getOneCountry = async (
    countryName: string,
): Promise<GetOneCountryProps[]> => {
    try {
        const res = await fetch(`${ONE_COUNTRY_BASE}/${countryName}`)
        return res.json()
    } catch (error) {
        console.log('error [2]', error)
        throw error
    }
}

export interface getRandomCountryTypes {
    name: { common: string; official: string; nativeName: object }
    cca3: string
    cca2: string
}

export const getRandomCountry = async (): Promise<getRandomCountryTypes> => {
    try {
        const res = await fetch(ALL_ISO)
        const allCountries = await res.json()

        const randomIndex = Math.floor(Math.random() * allCountries.length)

        const randomlySelectedCty = allCountries[randomIndex]

        return randomlySelectedCty
    } catch (error) {
        console.log('error [3]', error)
        throw error
    }
}
