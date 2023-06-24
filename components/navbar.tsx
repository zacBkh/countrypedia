import Link from 'next/link'
import { WebsiteLinks } from '@/constants/urls'
const { HOME, ABOUT, TEAM } = WebsiteLinks
const Navbar = () => {
  return (
    <header className="flex gap-x-6 justify-center">
      <div>LOGO</div>
      <div>COUNTRYPEDIA</div>
      <div className="flex gap-x-6">
        <Link href={HOME}>HOME</Link>
        <Link href={ABOUT}>ABOUT</Link>
        <Link href={TEAM}>ABOUT/TEAMS</Link>
      </div>
    </header>
  )
}

export default Navbar
