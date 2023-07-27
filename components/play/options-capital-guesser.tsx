import { FC } from 'react'
import { GetRandomCountryResultCapitalGuesser } from '@/services/fetchers'

import RadioButton from '../ui/radio-button'

interface CapitalGuesserOptionsProps {
    arrayOfRandomCountries: GetRandomCountryResultCapitalGuesser[]
    onSelectCapital: Function
}

const CapitalGuesserOptions: FC<CapitalGuesserOptionsProps> = ({
    arrayOfRandomCountries,
    onSelectCapital,
}) => {
    const clickRadioHandler = (capitalChosen: string) => {
        onSelectCapital(capitalChosen)
    }

    return (
        <>
            {arrayOfRandomCountries?.map((cty, index) => (
                <RadioButton
                    onClickOption={clickRadioHandler}
                    name={'capital-guesser-choices'}
                    capital={cty.capital[0]}
                    cca3={cty.cca3}
                    key={cty.cca3 + index}
                />
            ))}
        </>
    )
}

export default CapitalGuesserOptions
