import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/countrypedia-logo.png'
import { WebsiteLinks } from '@/constants/urls'

import ThemeSwitcher from './ui/theme-switcher'

const { HOME, ABOUT, TEAM } = WebsiteLinks
const Navbar = () => {
    return (
        <header className="flex gap-x-6 justify-between items-center w-full text-lg">
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
