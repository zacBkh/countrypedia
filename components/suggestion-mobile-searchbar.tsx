import { FC } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { AiOutlineStar } from 'react-icons/ai'
import CloseButton from './ui/icons/close-button'

import { getAllCountriesSearchBarProps } from '@/services/fetchers'

import { MouseEventHandler } from 'react'

import { slugCtyName } from '@/utils/slug-url'

interface SuggestionMobileSearchBarProps
    extends Pick<getAllCountriesSearchBarProps, 'name' | 'flags' | 'region' | 'cca3'> {
    onClickCountry: MouseEventHandler<HTMLAnchorElement>
}

const handlertest = () => {
    console.log('5', 5)
}

const SuggestionMobileSearchBar: FC<SuggestionMobileSearchBarProps> = ({
    name,
    flags,
    region,
    cca3,
    onClickCountry,
}) => {
    return (
        <ul>
            <li className="resultSearchBar rounded-lg">
                <Link
                    onClick={onClickCountry}
                    href={`/${slugCtyName(name.common)}_${cca3.toLowerCase()}`}
                >
                    <div className="py-1 px-2 flex justify-between items-center">
                        <div className="flex justify-between gap-x-2 items-center">
                            <Image
                                width={50}
                                height={40}
                                className="object-cover"
                                src={flags.svg}
                                alt={flags.alt}
                            />
                            <div className="flex flex-col">
                                <p className="font-semibold">{name.common}</p>
                                <p className="text-sm italic">{region}</p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-x-2 items-center">
                            <AiOutlineStar className="text-[#99A1B3] text-lg" />
                            <CloseButton onButtonClick={handlertest} />
                        </div>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default SuggestionMobileSearchBar
