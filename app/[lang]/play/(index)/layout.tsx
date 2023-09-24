import { FC } from 'react'

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

import { Locale } from '@/i18n.config'
import { getDictionary } from '@/utils/dictionary'

import { LayoutPlayProps } from '@/types/internationalization'

const PlayLayout: FC<LayoutPlayProps> = async ({ children, params }) => {
    const { play_lang } = await getDictionary(params.lang)

    const {
        header: {
            title,
            paragraph1,
            paragraph2,
            paragraph3,
            paragraph3_bis_action,
            paragraph3_ter,
            paragraph4,
        },
    } = play_lang

    return (
        <div className="flex flex-col gap-y-10 p-4 md:px-6 sm:py-6">
            <h1 className={`${SUPER_TITLE_FONT_SIZE} font-bold`}>{title}</h1>
            <div>
                <p className="text-lg sm:text-xl lg:w-2/3 font-semibold">
                    {paragraph1} <br />
                    {paragraph2} <br />
                    {paragraph3}
                    <Link
                        className={`${styleTxtBlued} hover:underline`}
                        href={'https://twitter.com/zacFullStack'}
                    >
                        {paragraph3_bis_action}
                    </Link>
                    {paragraph3_ter}
                    <br />
                    {paragraph4}
                </p>
                <Divider moreCSS="!border-[#EBECF0] dark:!border-[#343A46] mt-4" />
            </div>

            {children}
        </div>
    )
}

export default PlayLayout
