import { FC } from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

interface ButtonProps {
    onLoadMore: any
    text: string
    type?: 'primary' | 'secondary'
    isExternal?: boolean
}

const Button: FC<ButtonProps> = ({ text, onLoadMore }) => {
    return (
        <div>
            <button
                onClick={onLoadMore}
                className="flex justify-between mt-8
            gap-x-3 items-center px-4 py-[10px]
            text-sm font-medium text-center text-white rounded-full
            bg-react-button-blue-light hover:bg-react-blue-txt-light&dark-hover
            dark:bg-react-button-blue-dark
            dark:hover:bg-react-blue-txt-light&dark-hover
            "
            >
                {text}
                <FiArrowRight className="text-xl" />
            </button>
        </div>
    )
}

export default Button
