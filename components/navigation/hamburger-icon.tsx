import { FC } from 'react'

interface HamburgerIconProps {
    isOpen: boolean
}

const HamburgerIcon: FC<HamburgerIconProps> = ({ isOpen }) => {
    return (
        <button
            aria-label="Show hamburger menu"
            // onClick={onHamburgerIconClick}
            className={`${
                isOpen ? 'open' : ''
            } hamburger block md:hidden focus:outline-none h-fit`}
        >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
        </button>
    )
}

export default HamburgerIcon
