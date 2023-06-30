import { FetchLinks } from '@/constants/urls'
const { ALL_COUNTRIES, ONE_COUNTRY_BASE } = FetchLinks

export interface getAllCountriesProps {
    name: { common: string; official: string; nativeName: object }
    flags: { png: string; svg: string; alt: string }
    coatOfArms: { png: string; svg: string }
    capital: string[]
    region: string
    languages: object
    maps: { googleMaps: string; openStreetMaps: string }
    cca3: string
}

export const getAllCountries = async (): Promise<getAllCountriesProps[]> => {
    try {
        const res = await fetch(ALL_COUNTRIES)
        // await new Promise(resolve => setTimeout(resolve, 3000))
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
    demonyms: {}
    latlng: [number, number]
    population: number
    timezones: string
    startOfWeek: string
}

export const getOneCountry = async (
    countryName: string,
): Promise<GetOneCountryProps[]> => {
    try {
        const res = await fetch(`${ONE_COUNTRY_BASE}/${countryName}`)
        // await new Promise(resolve => setTimeout(resolve, 3000))
        return res.json()
    } catch (error) {
        console.log('error [2]', error)
        throw error
    }
}

// const calculateTax = (income: number, year = 2022): number => {
//     if (year < 2022) {
//       return income * 0.3
//     } else {
//       return income * 0.4
//     }
//   }
