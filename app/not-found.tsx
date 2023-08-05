import Link from 'next/link'
import Button from '@/components/ui/buttons'

import { APP_LINKS } from '@/constants/urls'
const { HOME, PLAY } = APP_LINKS

const NotFound404 = () => {
    return (
        <div className="text-center h-[80vh] flex flex-col justify-center">
            <p className="text-base font-semibold">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">
                Page not found
            </h1>
            <p className="mt-6 text-base leading-7 ">
                Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                    isNextLink
                    link={HOME}
                    text="Go back Home"
                    ariaLabel="Click to go back to the home page"
                />
                <Button
                    secondary
                    link={PLAY}
                    isNextLink
                    text="Test your knowledge"
                    ariaLabel="Click to go to the games"
                />
            </div>
        </div>
    )
}

export default NotFound404
