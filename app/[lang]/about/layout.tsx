import SEO_KEYWORDS from '@/constants/seo-keywords'

export const metadata = {
    title: 'About Me | CountryPedia',
    keywords: SEO_KEYWORDS,
    description:
        'Find informations about Zach, the programmer behind CountryPedia. Why did I create CountryPedia? Who am I?',
}

import Link from 'next/link'

import { BsGithub, BsTwitter } from 'react-icons/bs'

import { TITLE_FONT_SIZE } from '@/constants/responsive-fonts'

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    const cssBtn = 'group rounded-full p-2 sm:p-3 sm:w-12 sm:h-12'

    const cssIcon =
        'group-hover:!text-[#087EA4] text-[#23272F] dark:text-white text-base sm:text-xl'

    return (
        <div className="flex flex-col items-center sm:items-start pb-4 sm:pb-6 px-8 sm:px-12 2xl:px-16 relative overflow-auto min-h-screen z-[150]">
            <div className="bg-white dark:bg-[#232730] fixed z-10 w-full flex justify-center gap-x-2 items-center py-2">
                <h1 className={`${TITLE_FONT_SIZE} font-bold`}>
                    About Me, <span className="text-react-blue-txt-light&dark">Zach</span>
                </h1>

                <Link href={'https://github.com/zacBkh'}>
                    <button className={cssBtn}>
                        <BsGithub className={cssIcon} />
                    </button>
                </Link>
                <Link href={'https://twitter.com/zacFullStack'}>
                    <button className={cssBtn}>
                        <BsTwitter className={cssIcon} />
                    </button>
                </Link>
            </div>

            {children}
        </div>
    )
}
