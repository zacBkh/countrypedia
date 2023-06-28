'use client'

import { FC, useEffect } from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/constants/urls'

interface NavLinksProps {
    isHamburgerMenu?: boolean
    isHamburgerMenuOpen?: boolean
}

const NavLinks: FC<NavLinksProps> = ({ isHamburgerMenu, isHamburgerMenuOpen }) => {
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
        <nav className="h-full">
            <ul
                className={`${
                    isHamburgerMenu
                        ? 'flex flex-col items-center justify-center md:hidden h-full gap-y-4 text-lg'
                        : 'hidden md:flex '
                } gap-x-6`}
            >
                {NAV_LINKS.map(link => (
                    <li>
                        <Link
                            key={link.id}
                            className={`${pathname === link.link ? 'activeLink' : ''}
                            btnLike py-[6px] px-[18px] rounded-full`}
                            href={link.link}
                        >
                            {link.item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavLinks
