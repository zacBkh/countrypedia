'use client'

import { FC } from 'react'

import { useGlobalContext } from '@/app/context/store'

import NavLinks from './nav-links'

import sleep from '@/utils/sleep'

import { TradKeysType } from '@/types/internationalization'
import { Locale } from '@/i18n.config'

interface NavLinksProps {
    navItemsTrad: TradKeysType['navbarLang']['navItems']
    currentLang: Locale
}

const HamburgerMenu: FC<NavLinksProps> = ({ navItemsTrad, currentLang }) => {
    const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useGlobalContext()

    if (!isHamburgerMenuOpen) return

    const closeHamburgerMenuHandler = () => {
        sleep(150)
        setIsHamburgerMenuOpen(false)
    }
    return (
        <>
            <nav
                className={`z-[99999] py-8 md:hidden bg-white dark:bg-[#232730] w-screen absolute drop-shadow-2xl border-t-[#EBECF0] dark:border-t-[#343A46] border-t-[2px]}`}
            >
                <NavLinks
                    navItemsTrad={navItemsTrad}
                    isHamburgerMenu
                    isHamburgerMenuOpen={isHamburgerMenuOpen}
                    onHamburgerMenuClose={closeHamburgerMenuHandler}
                    currentLang={currentLang}
                />
            </nav>
        </>
    )
}

export default HamburgerMenu
