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

    const tempArray = [...arrayOfRandomCountries]
    const newResortedArray = tempArray.sort(() => Math.random() - 0.5)
    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-fit mx-auto text-center order-1 sm:order-2">
                {newResortedArray?.map((cty, index) => (
                    <RadioButton
                        onClickOption={clickRadioHandler}
                        name={'capital-guesser-choices'}
                        capital={cty.capital[0]}
                        cca3={cty.cca3}
                        key={cty.cca3 + index}
                    />
                ))}
            </div>
        </>
    )
}

export default CapitalGuesserOptions
