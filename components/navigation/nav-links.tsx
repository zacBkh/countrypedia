'use client'

import { FC, useEffect } from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/constants/urls'

import { TradKeysType } from '@/types/internationalization'
import { Locale } from '@/i18n.config'

interface NavLinksProps {
    isHamburgerMenu?: boolean
    isHamburgerMenuOpen?: boolean
    onHamburgerMenuClose?: Function
    navItemsTrad: TradKeysType['navbarLang']['navItems']

    currentLang: Locale
}

const NavLinks: FC<NavLinksProps> = ({
    isHamburgerMenu,
    isHamburgerMenuOpen,
    onHamburgerMenuClose,

    navItemsTrad,

    currentLang,
}) => {
    const currentPathname = usePathname()

    useEffect(() => {
        if (isHamburgerMenuOpen) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isHamburgerMenuOpen])

    const isCurrentLinkActiveLink = (currentPathname: string, targetLink: string) => {
        const segments = currentPathname.split('/')
        if (segments.length < 3) {
            // if we are on homepage
            if (targetLink === '/') {
                return 'activeLink'
            }
        }

        const isActive = segments[2] === targetLink.replace('/', '')
        if (isActive) {
            return 'activeLink'
        }
    }

    return (
        <div className="h-full select-none">
            <ul
                className={`${
                    isHamburgerMenu
                        ? 'flex flex-col items-center justify-center md:hidden h-full gap-y-4 text-lg'
                        : 'hidden md:flex'
                } gap-x-6`}
            >
                {NAV_LINKS.map(link => (
                    <li key={link.id}>
                        <Link
                            onClick={() => onHamburgerMenuClose && onHamburgerMenuClose()}
                            className={`${isCurrentLinkActiveLink(
                                currentPathname,
                                link.link,
                            )} py-[6px] px-[18px] rounded-full font-semibold btnLike
                             `}
                            href={`/${currentLang}${link.link}`}
                        >
                            {navItemsTrad[link.item as keyof typeof navItemsTrad]}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavLinks
