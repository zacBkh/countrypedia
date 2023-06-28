'use client'

import { useGlobalContext } from '@/app/context/store'

const HamburgerIcon = () => {
    const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useGlobalContext()

    return (
        <button
            onClick={() => setIsHamburgerMenuOpen(prev => !prev)}
            aria-label="Show hamburger menu"
            className={`${
                isHamburgerMenuOpen ? 'open' : ''
            } hamburger block md:hidden focus:outline-none h-fit hover:!bg-transparent `}
        >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
        </button>
    )
}

export default HamburgerIcon
