import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../public/countrypedia-logo.png'
import { APP_LINKS } from '@/constants/urls'

import ThemeSwitcher from '../ui/theme-switcher'

import SearchBar from '../search-bar'

import NavLinks from './nav-links'
import HamburgerIcon from './hamburger-icon'
import HamburgerMenu from './hamburger-menu'

const Navbar = () => {
    return (
        <div className=" sticky top-0 z-[9999999]">
            <header className="shadow-lg dark:shadow-slate-50/5 shadow-slate-950/10 sticky top-0 z-[999] w-full text-lg bg-white dark:bg-[#232730] !text-[#404756] dark:!text-[#EBECF0]">
                <div className="flex gap-x-6 justify-between items-center py-2 px-4">
                    <div>
                        <Link href={APP_LINKS.HOME}>
                            <div
                                id="logo"
                                className="flex items-center gap-x-2 font-bold"
                            >
                                <Image
                                    className="!w-10 outline outline-offset-2 outline-[1.5px] outline-react-button-blue-light rounded-full"
                                    src={Logo}
                                    alt="CountryPedia logo"
                                />
                                <span>
                                    Country
                                    <span className="text-react-blue-txt-light&dark">
                                        Pedia
                                    </span>
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-x-6 w-[80%]">
                        <SearchBar />
                        <NavLinks />
                    </div>

                    <div className="flex justify-between items-center gap-x-2">
                        <ThemeSwitcher />
                        <HamburgerIcon />
                    </div>
                </div>
            </header>
            <HamburgerMenu />
        </div>
    )
}

export default Navbar
