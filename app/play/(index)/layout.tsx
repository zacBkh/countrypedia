import SEO_KEYWORDS from '@/constants/seo-keywords'

export const metadata = {
    title: 'Test your knowledge | CountryPedia',
    keywords: SEO_KEYWORDS,
    description:
        'Test your knowledge and challenge yourself with our range of interactive quiz games! Try to locate randomly generated countries on a map, find their capitals...',
}

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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                    dignissimos eos explicabo, natus quibusdam similique sed debitis fugit
                    illum deleniti obcaecati ipsam modi nemo quae voluptatibus aliquid
                    tempora error sapiente?
                </p>
                <Divider moreCSS="!border-[#EBECF0] dark:!border-[#343A46] mt-4" />
            </div>

            {children}
        </div>
    )
}
