'use client'

import { useGlobalContext } from '@/app/context/store'

import NavLinks from './nav-links'

const HamburgerMenu = () => {
    const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useGlobalContext()

    if (!isHamburgerMenuOpen) return
    return (
        <>
            <nav
                className={`z-[99999] py-8 md:hidden bg-white dark:bg-[#232730] w-screen absolute drop-shadow-2xl border-t-[#EBECF0] dark:border-t-[#343A46] border-t-[2px]}`}
            >
                <NavLinks isHamburgerMenu isHamburgerMenuOpen={isHamburgerMenuOpen} />
            </nav>
        </>
    )
}

export default HamburgerMenu
