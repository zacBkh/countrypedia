'use client'

import { FC } from 'react'

import { KeyboardEvent } from 'react'

interface RadioButtonProps {
    cca3: string
    capital: string
    name: string
    onClickOption: Function
}

const RadioButton: FC<RadioButtonProps> = ({ cca3, capital, name, onClickOption }) => {
    const handleKeyPress = (e: KeyboardEvent<HTMLLabelElement>) => {
        if (e.key === 'Enter') {
            onClickOption(capital)
        }
    }
    return (
        <>
            <label
                onKeyDown={handleKeyPress}
                tabIndex={0}
                role="button"
                className="bg-[#f3f4f8] hover:bg-[#eaebf0] dark:bg-[#333A45] dark:hover:bg-[#333a45b2] cursor-pointer w-[35vw] py-3 sm:py-4 rounded-md sm:text-lg xl:text-xl"
                htmlFor={cca3}
            >
                <input
                    className="invisible w-0"
                    onChange={() => onClickOption(capital)}
                    type="radio"
                    id={cca3}
                    name={name}
                    value={capital}
                />

                {capital}
            </label>
        </>
    )
}

export default RadioButton
