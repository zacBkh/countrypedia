import {
    FaGlobeAfrica,
    FaGlobeEurope,
    FaGlobeAmericas,
    FaGlobeAsia,
} from 'react-icons/fa'
import { GiEarthAsiaOceania } from 'react-icons/gi'

const REGIONS_WITH_ICONS = [
    { name: 'Africa', icon: <FaGlobeAfrica /> },
    { name: 'Europe', icon: <FaGlobeEurope /> },
    { name: 'Oceania', icon: <GiEarthAsiaOceania /> },
    { name: 'Americas', icon: <FaGlobeAmericas /> },
    { name: 'Asia', icon: <FaGlobeAsia /> },
    { name: 'Antarctic', icon: <GiEarthAsiaOceania /> },
]

export default REGIONS_WITH_ICONS
