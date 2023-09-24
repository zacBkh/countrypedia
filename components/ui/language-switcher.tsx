'use client'

import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { Locale } from '@/i18n.config'

import { changeLocale } from '@/utils/redirect-path-locale'

const LanguageSwitcher: FC<{ lang: Locale }> = ({ lang }) => {
    const pathName = usePathname()

    const userTip = lang === 'fr' ? 'Switch to English' : 'Passez en Français'

    return (
        <Link href={changeLocale(lang === 'fr' ? 'en' : 'fr', pathName)}>
            <button
                title={userTip}
                aria-label={userTip}
                className="p-2 rounded-full w-12 h-12 mx-auto"
            >
                <Image
                    width={105}
                    height={70}
                    src={`${
                        lang === 'fr'
                            ? 'https://flagcdn.com/fr.svg'
                            : 'https://flagcdn.com/gb.svg'
                    }`}
                    alt={`{Current language: ${lang}`}
                />
            </button>
        </Link>
    )
}

export default LanguageSwitcher
