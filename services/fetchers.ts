import { FetchLinks } from '@/constants/urls'
const {
    ALL_COUNTRIES,
    ONE_COUNTRY_BASE,
    ALL_ISO,
    ALL_CAPITAL,
    ALL_COUNTRIES_SEARCH_BAR,
} = FetchLinks

import { EASY_COUNTRIES } from '@/utils/difficulty-countries'

import { DifficultyLvl } from '@/app/context/store'

// Get all countries
export interface GetAllCountriesProps {
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

export const getAllCountries = async (): Promise<GetAllCountriesProps[]> => {
    try {
        const res = await fetch(ALL_COUNTRIES)
        return res.json()
    } catch (error) {
        console.log('error [1]', error)
        throw error
    }
}

// Get all countries with limited properties
export interface getAllCountriesSearchBarProps {
    name: { common: string; official: string; nativeName: object }
    flags: { png: string; svg: string; alt: string }
    cca3: string
    region: string
}

export const getAllCountriesSearchBar = async (): Promise<
    getAllCountriesSearchBarProps[]
> => {
    try {
        const res = await fetch(ALL_COUNTRIES_SEARCH_BAR)
        return res.json()
    } catch (error) {
        console.log('error [6]', error)
        throw error
    }
}

// Get one country
export interface GetOneCountryProps extends GetAllCountriesProps {
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

export const getOneCountry = async (code: string): Promise<GetOneCountryProps[]> => {
    try {
        const res = await fetch(`${ONE_COUNTRY_BASE}/${code}`)
        console.log('`${ONE_COUNTRY_BASE}/${code}`', `${ONE_COUNTRY_BASE}/${code}`)
        return res.json()
    } catch (error) {
        console.log('error [2]', error)
        throw error
    }
}

// Get random country for Map country locator
export interface GetRandomCountryResultCountryLocator {
    name: { common: string; official: string; nativeName: object }
    cca3: string
    cca2: string
}

export interface GetRandomCountryTypes {
    (lvl: DifficultyLvl): Promise<GetRandomCountryResultCountryLocator>
}

export const getRandomCountry: GetRandomCountryTypes = async (
    lvl,
): Promise<GetRandomCountryResultCountryLocator> => {
    try {
        const res = await fetch(ALL_ISO)
        const allCountries = await res.json()

        if (lvl === DifficultyLvl.EASY) {
            const easyCountries = allCountries.filter(
                (cty: GetRandomCountryResultCountryLocator) =>
                    EASY_COUNTRIES.includes(cty.cca3),
            )
            const randomIndex = Math.floor(Math.random() * easyCountries.length + 1)
            const randomlySelectedEasyCty = easyCountries[randomIndex]
            return randomlySelectedEasyCty
        } else {
            const randomIndex = Math.floor(Math.random() * allCountries.length + 1)
            const randomlySelectedCty = allCountries[randomIndex]
            return randomlySelectedCty
        }
    } catch (error) {
        console.log('error [3]', error)
        throw error
    }
}

// Capital guesser
export interface GetRandomCountryResultCapitalGuesser {
    name: { common: string }
    cca3: string
    capital: string[]
}

export const getRandomCountries = (
    nbOfCtyToReturn: number,
    maxArray: [],
): GetRandomCountryResultCapitalGuesser[] => {
    const objectOutput: GetRandomCountryResultCapitalGuesser[] = []
    for (let i = nbOfCtyToReturn; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * maxArray.length + 1)
        objectOutput.push(maxArray[randomIndex - 1])
    }

    return objectOutput
}

export interface GetRandomCountryTypesCapitalGuesser {
    (lvl: DifficultyLvl, nbOfCty: number): Promise<GetRandomCountryResultCapitalGuesser[]>
}

export const getSeveralRandomCountries: GetRandomCountryTypesCapitalGuesser = async (
    lvl,
    nbOfCty,
) => {
    try {
        const res = await fetch(ALL_CAPITAL)
        const allCountries = await res.json()

        const allCountriesWithCapital = allCountries.filter(
            (cty: GetRandomCountryResultCapitalGuesser) => cty.capital.length,
        )

        if (lvl === DifficultyLvl.EASY) {
            const easyCountries = allCountriesWithCapital.filter(
                (cty: GetRandomCountryResultCapitalGuesser) =>
                    EASY_COUNTRIES.includes(cty.cca3),
            )
            const arrayOfRandomCountries = getRandomCountries(nbOfCty, easyCountries)

            return arrayOfRandomCountries
        } else {
            const arrayOfRandomCountries = getRandomCountries(
                nbOfCty,
                allCountriesWithCapital,
            )

            return arrayOfRandomCountries
        }
    } catch (error) {
        console.log('error [4]', error)
        throw error
    }
}
