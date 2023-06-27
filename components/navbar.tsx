import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/countrypedia-logo.png'
import { APP_LINKS } from '@/constants/urls'

import ThemeSwitcher from './ui/theme-switcher'

import SearchBar from './search-bar'

import NavLinks from './nav-links'

const Navbar = () => {
    return (
        <header className="shadow-lg dark:shadow-slate-50/5 shadow-slate-950/10 sticky z-50 top-0 flex gap-x-6 justify-between items-center w-full text-lg bg-white dark:bg-[#232730] py-2 px-4 !text-[#404756] dark:!text-[#EBECF0]">
            <div>
                <Link href={APP_LINKS.HOME}>
                    <div className="flex items-center gap-x-2 font-bold">
                        <Image
                            className="!w-10 outline outline-offset-2 outline-[1.5px] outline-react-button-blue-light rounded-full"
                            src={Logo}
                            alt="CountryPedia logo"
                        />
                        <span>
                            Country
                            <span className="text-react-blue-txt-light&dark">Pedia</span>
                        </span>
                    </div>
                </Link>
            </div>
            <SearchBar />
            <NavLinks />
            <ThemeSwitcher />
        </header>
    )
}

export default Navbar
