export enum FetchLinks {
    ALL_COUNTRIES = 'https://restcountries.com/v3.1/all?fields=name,flags,region,languages,capital,maps,cca3,cca2,coatOfArms',
    ALL_COUNTRIES_SEARCH_BAR = 'https://restcountries.com/v3.1/all?fields=name,flags,cca3,region',
    ONE_COUNTRY_BASE = 'https://restcountries.com/v3.1/alpha',
    ALL_ISO = 'https://restcountries.com/v3.1/all?fields=cca2,cca3,name',
    ALL_CAPITAL = 'https://restcountries.com/v3.1/all?fields=cca3,name,capital',
}

export enum APP_LINKS {
    HOME = '/',
    ABOUT = '/about',
    PLAY = '/play',
    COUNTRY_LOCATOR = '/country-locator',
    CAPITAL_GUESSER = '/capital-guesser',
}

export const NAV_LINKS = [
    {
        item: 'Home',
        link: APP_LINKS.HOME,
        id: 'Links-1',
    },

    {
        item: 'Play',
        link: APP_LINKS.PLAY,
        id: 'Links-3',
    },
    {
        item: 'About Me',
        link: APP_LINKS.ABOUT,
        id: 'Links-2',
    },
]
