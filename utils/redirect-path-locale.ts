// For language toggler
export const changeLocale = (locale: string, pathName: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
}
