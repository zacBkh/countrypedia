export enum FetchLinks {
    ALL_COUNTRIES = 'https://restcountries.com/v3.1/all?fields=name,flags,region,languages,capital,maps,cca3,coatOfArms',
    ONE_COUNTRY_BASE = 'https://restcountries.com/v3.1/name',
}

export enum APP_LINKS {
    HOME = '/',
    ABOUT = '/about',
    TEAM = '/about/team',
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
        item: 'Team',
        link: APP_LINKS.TEAM,
        id: 'Links-3',
    },
]
