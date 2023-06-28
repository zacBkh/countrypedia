import Image from 'next/image'
import Link from 'next/link'

import { FC } from 'react'
import { ReturnFxProps } from '@/services/fetchers'

import { BiSolidCity, BiWorld, BiUserVoice } from 'react-icons/bi'
import { SiGooglemaps } from 'react-icons/si'
import { FiArrowRight } from 'react-icons/fi'

import Button from './ui/buttons'

import { TITLE_FONT_SIZE, DETAILS_FONT_SIZE } from '@/constants/responsive-fonts'

interface CountryCardProps {
    details: ReturnFxProps
}

const CountryCard: FC<CountryCardProps> = ({ details }) => {
    const { name, flags, capital, region, languages, maps, coatOfArms } = details
    return (
        <div
            className={`w-[300px] md:w-[350px] bg-[#F7F7F9] border border-[#d9dbe3] dark:border-gray-600 rounded-lg shadow dark:bg-[#16181D] overflow-hidden mx-auto`}
        >
            <div className="w-full h-36 md:h-48 relative">
                <Image fill className="object-cover" src={flags.svg} alt={flags.alt} />
            </div>

            <div className="py-2 px-3 sm:px-4 flex flex-col gap-y-4">
                <div className="flex justify-between gap-x-2 items-center">
                    <h5
                        className={`${TITLE_FONT_SIZE} font-bold tracking-tight text-gray-900 dark:text-white`}
                    >
                        {name.common}
                    </h5>
                    <div className="w-16 h-16 flex justify-center">
                        {coatOfArms.png ? (
                            <Image
                                width={40}
                                height={40}
                                quality={50}
                                className="object-contain"
                                src={coatOfArms.png}
                                alt={`Coat of arms of ${name.common}`}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>

                <div
                    className={`${DETAILS_FONT_SIZE} flex justify-between gap-x-2 text-gray-700 dark:text-gray-400`}
                >
                    {capital[0] ? (
                        <div className="flex items-center gap-x-1 sm:gap-x-2">
                            <BiSolidCity /> {capital[0]}
                        </div>
                    ) : (
                        ''
                    )}
                    {region ? (
                        <div className="flex items-center gap-x-1 sm:gap-x-2">
                            <BiWorld /> {region}
                        </div>
                    ) : (
                        ''
                    )}

                    {Object.values(languages)[0] ? (
                        <div className="flex items-center gap-x-1 sm:gap-x-2">
                            <BiUserVoice /> {Object.values(languages)[0]}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div className="flex justify-between gap-x-8">
                    <Button
                        iconClass="text-xl"
                        icon={<FiArrowRight />}
                        text="Read more"
                        textSm="More"
                        isNextLink
                        link={'/'}
                    />

                    <Button
                        iconClass="text-base"
                        icon={<SiGooglemaps />}
                        secondary
                        isExternalLink
                        link={maps.googleMaps}
                        textSm="Maps"
                        text="See on Maps"
                    />
                </div>
            </div>
        </div>
    )
}

export default CountryCard
