'use client'

import { FC, useEffect } from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/constants/urls'

interface NavLinksProps {
    isHamburgerMenu?: boolean
    isHamburgerMenuOpen?: boolean
    onHamburgerMenuClose?: any
}

const NavLinks: FC<NavLinksProps> = ({
    isHamburgerMenu,
    isHamburgerMenuOpen,
    onHamburgerMenuClose,
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

    const linkClickedHandler = () => {
        console.log('8', 8)
        onHamburgerMenuClose()
    }

    return (
        <div className="h-full">
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
                            onClick={linkClickedHandler}
                            className={`${pathname === link.link ? 'activeLink' : ''}
                            btnLike py-[6px] px-[18px] rounded-full`}
                            href={link.link}
                        >
                            {link.item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavLinks
