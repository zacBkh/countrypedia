import SEO_KEYWORDS from '@/constants/seo-keywords'

export const metadata = {
    title: 'Test your knowledge | CountryPedia',
    keywords: SEO_KEYWORDS,
    description:
        'Test your knowledge and challenge yourself with our range of interactive quiz games! Try to locate randomly generated countries on a map, find their capitals...',
}

import { TITLE_FONT_SIZE } from '@/constants/responsive-fonts'

export default function PlayLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-y-10 py-4 sm:py-6">
            <h1 className={`${TITLE_FONT_SIZE} text-center font-bold w-[60%] mx-auto`}>
                Pick one of the game and test yourself!
            </h1>
            {children}
        </div>
    )
}
