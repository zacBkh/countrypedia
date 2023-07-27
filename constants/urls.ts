export enum FetchLinks {
    ALL_COUNTRIES = 'https://restcountries.com/v3.1/all?fields=name,flags,region,languages,capital,maps,cca3,cca2,coatOfArms',
    ONE_COUNTRY_BASE = 'https://restcountries.com/v3.1/name',
    ALL_ISO = 'https://restcountries.com/v3.1/all?fields=,cca2,cca3,name',
}

export enum APP_LINKS {
    HOME = '/',
    ABOUT = '/about',
    TEAM = '/about/team',
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
        item: 'About',
        link: APP_LINKS.ABOUT,
        id: 'Links-2',
    },
    {
        item: 'Play',
        link: APP_LINKS.PLAY,
        id: 'Links-3',
    },
]
