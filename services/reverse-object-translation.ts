const reverseKeyValue = (objectToReverse: { [key: string]: string }) => {
    const reversedObject: { [key: string]: string } = {}
    for (const key in objectToReverse) {
        if (objectToReverse.hasOwnProperty(key)) {
            const value = objectToReverse[key]
            reversedObject[value] = key
        }
    }
    return reversedObject
}

export default reverseKeyValue
