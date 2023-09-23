'use client'

import { FC, useEffect } from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/constants/urls'

import { TradKeysType } from '@/types/key-translations'

interface NavLinksProps {
    isHamburgerMenu?: boolean
    isHamburgerMenuOpen?: boolean
    onHamburgerMenuClose?: Function
    navItemsTrad: TradKeysType['navbarLang']['navItems']
}

const NavLinks: FC<NavLinksProps> = ({
    isHamburgerMenu,
    isHamburgerMenuOpen,
    onHamburgerMenuClose,

    navItemsTrad,
}) => {
    const pathname = usePathname()

    useEffect(() => {
        if (isHamburgerMenuOpen) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isHamburgerMenuOpen])

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
                            className={`${
                                pathname === link.link ? 'activeLink' : ''
                            } py-[6px] px-[18px] rounded-full font-semibold btnLike
                             `}
                            href={link.link}
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
