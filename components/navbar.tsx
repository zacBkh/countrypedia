import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/countrypedia-logo.png'
import { WebsiteLinks } from '@/constants/urls'

import ThemeSwitcher from './ui/theme-switcher'

const { HOME, ABOUT, TEAM } = WebsiteLinks
const Navbar = () => {
    return (
        <header className="shadow-lg dark:shadow-slate-50/5 shadow-slate-950/10 sticky z-50 top-0 flex gap-x-6 justify-between items-center w-full text-lg bg-white dark:bg-[#232730] py-2 px-4 !text-[#404756] dark:!text-[#EBECF0]">
            <div>
                <Link href={HOME}>
                    <div className="flex items-center gap-x-2 font-bold">
                        <Image className="!w-10" src={Logo} alt="CountryPedia logo" />
                        <span>CountryPedia</span>
                    </div>
                </Link>
            </div>
            <div className="flex gap-x-6">
                <button className="py-[6px] px-[18px] rounded-full">
                    <Link href={HOME}>Home</Link>
                </button>
                <button className="py-[6px] px-[18px] rounded-full">
                    <Link href={ABOUT}>Why CountryPedia?</Link>
                </button>
                <button className="py-[6px] px-[18px] rounded-full">
                    <Link href={TEAM}>Team</Link>
                </button>
            </div>
            <ThemeSwitcher />
        </header>
    )
}

export default Navbar
