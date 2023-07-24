import Link from 'next/link'

import { APP_LINKS } from '@/constants/urls'
const { PLAY, COUNTRY_LOCATOR } = APP_LINKS

const PlayPage = async () => {
    return (
        <>
            <Link href={`${PLAY}${COUNTRY_LOCATOR}`}> Play random country locator</Link>
        </>
    )
}

export default PlayPage
