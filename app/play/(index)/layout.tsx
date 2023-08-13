import SEO_KEYWORDS from '@/constants/seo-keywords'

export const metadata = {
    title: 'Test your knowledge | CountryPedia',
    keywords: SEO_KEYWORDS,
    description:
        'Test your knowledge and challenge yourself with our range of interactive quiz games! Try to locate randomly generated countries on a map, find their capitals...',
}

import Link from 'next/link'

import { styleTxtBlued } from '@/components/play/games-dashboard-ui'

import { SUPER_TITLE_FONT_SIZE } from '@/constants/responsive-fonts'

import Divider from '@/components/ui/divider'

export default function PlayLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-y-10 py-4 px-2 md:px-6 sm:py-6">
            <h1 className={`${SUPER_TITLE_FONT_SIZE} font-bold`}>
                Pick one of the game and test yourself!
            </h1>
            <div>
                <p className="text-lg sm:text-xl sm:w-1/2 font-semibold">
                    Time to test your skills! 🧠 <br />
                    We have created those games for you to have fun, practice and get
                    better. 💪🏼 <br />
                    If you have any idea to improve a game, or create a new one, please{' '}
                    <Link
                        className={`${styleTxtBlued} hover:underline`}
                        href={'https://twitter.com/zacFullStack'}
                    >
                        contact me
                    </Link>{' '}
                    to discuss it. 💬
                    <br />
                    There is also a like button, if you enjoyed the game, please smash it!
                    ❤️
                </p>
                <Divider moreCSS="!border-[#EBECF0] dark:!border-[#343A46] mt-4" />
            </div>

            {children}
        </div>
    )
}
