'use client'

import { useGlobalContext } from '@/app/context/store'

const Overlay = ({}) => {
    const { isHamburgerMenuOpen, setIsHamburgerMenuOpen } = useGlobalContext()
    if (!isHamburgerMenuOpen) return null
    return (
        <div
            onClick={() => setIsHamburgerMenuOpen(false)}
            className={`${isHamburgerMenuOpen ? 'overlayDarkener' : ''}`}
        ></div>
    )
}

export default Overlay
