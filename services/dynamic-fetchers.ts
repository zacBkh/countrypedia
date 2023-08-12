import { FetchLinksOwnAPI } from '@/constants/urls'
const { GET_LIKE_COUNT } = FetchLinksOwnAPI

export interface GetLikeCountTypes {
    success: boolean
    count: { country_locator: number; capital_guesser: number }
}

export const getLikeCount = async (duration: number): Promise<GetLikeCountTypes> => {
    const res = { success: true, count: { country_locator: 6, capital_guesser: 54 } }

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(res)
        }, duration)
    })
}
