'use client'

import { useState, FC } from 'react'
import CountryCard from './country-card'

import { GetAllCountriesProps } from '@/services/fetchers'
import { FiArrowRight } from 'react-icons/fi'

import Button from './ui/buttons'

import { useGlobalContext } from '@/app/context/store'

import { RESPONSIVE_PADDING } from '@/constants/responsive-padding'

interface CountriesProps {
    allCountries: GetAllCountriesProps[]
}

const Countries: FC<CountriesProps> = ({ allCountries }) => {
    const { searchQuery, setSearchQuery } = useGlobalContext()

    const [qtyShowCountry, setQtyShowCountry] = useState(30) // default qty of countries shown

    const limitedCountries = allCountries.slice(0, qtyShowCountry)

    const loadMoreHandler = () => {
        setQtyShowCountry(prev => prev + 30)
    }

    // Filter countries
    const filteredCountries = allCountries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    const shoulSeeMoreBtnShow =
        qtyShowCountry <= allCountries.length && !searchQuery.length

    // Display filtered countries if filter, otherwise display all
    const whichView = searchQuery ? filteredCountries : limitedCountries

    return (
        <>
            {/* <Loading /> */}
            <div className={`${RESPONSIVE_PADDING} flex flex-col items-center`}>
                <div className="flex flex-wrap justify-between items-center gap-y-6 gap-x-4">
                    {whichView.map(cty => (
                        <CountryCard key={cty.cca3} details={cty} />
                    ))}
                </div>

                {shoulSeeMoreBtnShow ? (
                    <Button
                        ariaLabel="See more countries"
                        iconClass="text-xl"
                        icon={<FiArrowRight />}
                        moreStyle={'mt-8'}
                        onAction={loadMoreHandler}
                        text="See More"
                    />
                ) : (
                    ''
                )}
            </div>
        </>
    )
}

export default Countries
