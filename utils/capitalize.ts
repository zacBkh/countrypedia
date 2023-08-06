// Lowercase everything and apply capitalization on first letter of each words

export const capitalize = (string: string) => {
    if (!string) {
        return
    } else {
        return string
            .toLowerCase()
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.slice(1))
            .join(' ')
    }
}
export default capitalize

export const capitalizeWithDash = (string: string) => {
    if (!string) {
        return ''
    } else {
        const words = string.split(/\s|-/)
        const capitalizedWords = words.map(
            word => word.charAt(0).toUpperCase() + word.slice(1),
        )
        return capitalizedWords.join(' ')
    }
}
