import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'
import { ReturnFxProps } from '@/services/fetchers'

import { FiArrowRight } from 'react-icons/fi'
import { BiSolidCity, BiWorld, BiUserVoice } from 'react-icons/bi'
import { SiGooglemaps } from 'react-icons/si'

interface CountryCardProps {
    details: ReturnFxProps
}

const CountryCard: FC<CountryCardProps> = ({ details }) => {
    const { name, flags, capital, region, languages, maps, coatOfArms } = details
    return (
        <div className="w-[350px] bg-react-bg-light border border-[#d9dbe3] dark:border-gray-600 rounded-lg shadow dark:bg-[#16181D] overflow-hidden">
            <div className="w-full h-48 relative">
                <Image
                    fill={true}
                    className="object-cover "
                    src={flags.svg}
                    alt={flags.alt}
                />
            </div>

            <div className="py-2 px-5 flex flex-col gap-y-4">
                <div className="flex justify-between gap-x-2 items-center">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name.common}
                    </h5>
                    <div className="w-16 h-16 relative">
                        {coatOfArms.svg ? (
                            <Image
                                quality={50}
                                fill={true}
                                className="object-contain"
                                src={coatOfArms.png}
                                alt={`Coat of arms of ${name.common}`}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>

                <div className="flex justify-between text-gray-700 dark:text-gray-400">
                    {capital[0] ? (
                        <span className="flex items-center gap-x-2">
                            <BiSolidCity /> {capital[0]}
                        </span>
                    ) : (
                        ''
                    )}
                    {region ? (
                        <span className="flex items-center gap-x-2">
                            <BiWorld /> {region}
                        </span>
                    ) : (
                        ''
                    )}

                    {Object.values(languages)[0] ? (
                        <span className="flex items-center gap-x-2">
                            <BiUserVoice /> {Object.values(languages)[0]}
                        </span>
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex justify-between gap-x-8">
                    <Link
                        className="flex justify-between gap-x-3 items-center px-4 py-[10px] text-sm font-medium text-center  text-white
                        rounded-full
                        bg-react-button-blue-light
                        hover:bg-react-blue-txt-light&dark-hover
                        dark:bg-react-button-blue-dark
                        dark:hover:bg-react-blue-txt-light&dark-hover
                        "
                        href="/#"
                    >
                        Read more
                        <FiArrowRight className="text-xl" />
                    </Link>

                    <a
                        target="_blank"
                        className="
                        border dark:border-[#404756] dark:hover:bg-[#252932]
                        border-[#d9dbe3]
                        hover:bg-[#4e57690d] flex justify-between gap-x-3 items-center px-3 py-2 text-sm font-medium text-center rounded-full "
                        href={maps.googleMaps}
                    >
                        See on Maps
                        <SiGooglemaps className="text-base" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CountryCard
