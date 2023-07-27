'use client'

import { FC } from 'react'

import { ChangeEventHandler } from 'react'

interface RadioButtonProps {
    cca3: string
    capital: string
    name: string
    onClickOption: Function
}

const RadioButton: FC<RadioButtonProps> = ({ cca3, capital, name, onClickOption }) => {
    return (
        <>
            <input
                onChange={() => onClickOption(capital)}
                type="radio"
                id={cca3}
                name={name}
                value={capital}
            />

            <label htmlFor={cca3}>{capital}</label>
        </>
    )
}

export default RadioButton
