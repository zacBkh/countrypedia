'use client'

import { useState, useEffect, FC } from 'react'
import CountryCard from './country-card'

import { GetAllCountriesProps } from '@/services/fetchers'
import { FiArrowRight } from 'react-icons/fi'

import Button from './ui/buttons'

import { useGlobalContext } from '@/app/context/store'

import { RESPONSIVE_PADDING } from '@/constants/responsive-padding'

import RegionFilter from './filters/region-filters'
import REGIONS_WITH_ICONS from '@/constants/regions'

import { TradKeysType } from '@/types/internationalization'

interface CountriesProps {
    allCountries: GetAllCountriesProps[]
    trad: Pick<TradKeysType, 'button_lang' | 'continentsLang'>
}

const Countries: FC<CountriesProps> = ({ allCountries, trad }) => {
    const { searchQuery, setSearchQuery } = useGlobalContext()

    const [qtyShowCountry, setQtyShowCountry] = useState(30) // default qty of countries shown

    const [filterRegion, setFilterRegion] = useState('')

    const limitedCountries = allCountries.slice(0, qtyShowCountry)

    const loadMoreHandler = () => {
        setQtyShowCountry(prev => prev + 30)
    }

    const filterLogic = () => {
        if (searchQuery) {
            return allCountries.filter(country =>
                country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
            )
        }

        if (filterRegion) {
            return allCountries.filter(country => country.region === filterRegion)
        }

        return limitedCountries
    }

    useEffect(() => {
        if (searchQuery) {
            setFilterRegion('')
        }
    }, [searchQuery])

    const shoulSeeMoreBtnShow =
        qtyShowCountry <= allCountries.length && !searchQuery.length && !filterRegion

    const handleFilterCountries = (regionClicked: string) => {
        setSearchQuery('')
        if (regionClicked === filterRegion) {
            setFilterRegion('')
        } else {
            setFilterRegion(regionClicked)
        }
    }

    const basicStyleGradients = 'absolute pointer-events-none w-[65%] h-[50px] z-[100]'

    return (
        <>
            <div className={`${RESPONSIVE_PADDING}`}>
                <div className={`gradientToRight ${basicStyleGradients}`}></div>

                <div className="flex flex-col items-center">
                    <div className="overflow-x-auto w-full absolute px-6">
                        <fieldset className="flex justify-center gap-x-7 md:gap-x-14 2xl:gap-x-20 w-full">
                            {REGIONS_WITH_ICONS.map(reg => (
                                <RegionFilter
                                    onFilterCountry={handleFilterCountries}
                                    activeRegion={filterRegion}
                                    key={reg.name}
                                    region={
                                        trad.continentsLang[
                                            reg.name as keyof typeof trad.continentsLang
                                        ]
                                    }
                                    icon={reg.icon}
                                />
                            ))}
                        </fieldset>
                    </div>
                    <div className={`gradientToLeft ${basicStyleGradients} `}></div>

                    <div className="flex flex-wrap justify-between items-center gap-y-6 gap-x-4 mt-16">
                        {filterLogic().map(cty => (
                            <CountryCard
                                key={cty.cca3}
                                details={cty}
                                trad={trad.button_lang}
                            />
                        ))}
                    </div>

                    {shoulSeeMoreBtnShow ? (
                        <Button
                            ariaLabel="See more countries"
                            iconClass="text-xl"
                            icon={<FiArrowRight />}
                            moreStyle={'mt-8'}
                            onAction={loadMoreHandler}
                            text={trad.button_lang.seeMore}
                        />
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </>
    )
}

export default Countries
