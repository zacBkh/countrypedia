import { FC } from 'react'

import Divider from '../ui/divider'

interface RegionFilterProps {
    region: string
    activeRegion: string
    onFilterCountry: (region: string) => void
    icon: any
}

const RegionFilter: FC<RegionFilterProps> = ({
    activeRegion,
    region,
    icon,
    onFilterCountry,
}) => {
    const isActiveRegion = activeRegion === region

    return (
        <div
            onClick={() => onFilterCountry(region)}
            className={`btnLike !bg-transparent select-none font-bold flex flex-col items-center cursor-pointer text-[#717171] dark:text-[#bdbbbb] sm:dark:hover:text-white group ${
                isActiveRegion ? '!text-white' : ''
            }`}
        >
            <label className="sr-only">Show only the countries in {region} </label>
            <input type="radio" className="sr-only peer" />
            {icon}
            <span>{region}</span>
            <Divider
                moreCSS={`invisible sm:group-hover:visible ${
                    isActiveRegion ? '!visible dark:border-white' : ''
                }  mt-2 w-full border-b-2 dark:border-[#bdbbbb] dark:group-hover:border-white`}
            />
        </div>
    )
}

export default RegionFilter
