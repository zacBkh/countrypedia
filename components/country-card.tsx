import { FC } from 'react'
import { ReturnFxInterface } from '@/services/fetchers'

interface CountryCardProps {
    details: ReturnFxInterface
}

const CountryCard: FC<CountryCardProps> = ({ details }) => {
    return (
        <>
            <p>{details.capital}</p>
        </>
    )
}

export default CountryCard
