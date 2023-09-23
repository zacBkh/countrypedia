import TradData from '../dictionaries/en.json' // TypeScript infers the type of jsonData

export type TradKeysType = {
    btnLang: (typeof TradData)['btnLang']
    page: (typeof TradData)['page']
    navigation: (typeof TradData)['navigation']
    continentsLang: (typeof TradData)['continentsLang']
    navbarLang: (typeof TradData)['navbarLang']
}
