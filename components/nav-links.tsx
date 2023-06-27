'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { NAV_LINKS } from '@/constants/urls'

const NavLinks = ({}) => {
    const pathname = usePathname()

    return (
        <div className="flex gap-x-6">
            {NAV_LINKS.map(link => (
                <Link
                    key={link.id}
                    className={`${pathname === link.link ? 'activeLink' : ''}
                     btnLike py-[6px] px-[18px] rounded-full`}
                    href={link.link}
                >
                    {link.item}
                </Link>
            ))}
        </div>
    )
}

export default NavLinks
