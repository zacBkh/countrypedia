import { FC } from 'react'
import Link from 'next/link'

interface ButtonProps {
    link?: any
    isNextLink?: boolean
    isExternalLink?: boolean

    onAction?: any
    text: string
    secondary?: boolean
    moreStyle?: string

    icon?: any
    iconClass?: string
}

const Button: FC<ButtonProps> = ({
    text,
    onAction,
    secondary,
    isNextLink,
    isExternalLink,
    link,
    moreStyle,
    icon,
    iconClass,
}) => {
    const style = `flex justify-between gap-x-3 items-center px-4 py-[10px] text-sm text-center rounded-full font-bold
    ${moreStyle}
    ${
        secondary
            ? 'border dark:border-[#404756] dark:hover:bg-[#252932] border-[#d9dbe3] hover:bg-[#4e57690d]'
            : 'text-white bg-react-button-blue-light hover:bg-react-blue-txt-light&dark-hover  dark:bg-react-button-blue-dark dark:hover:bg-react-blue-txt-light&dark-hover'
    }`

    if (isNextLink) {
        return (
            <Link href={link} className={style}>
                {text}
                <span className={iconClass}>{icon}</span>
            </Link>
        )
    }

    if (isExternalLink) {
        return (
            <a target="_blank" className={style} href={link}>
                See on Maps
                <span className={iconClass}>{icon}</span>
            </a>
        )
    }

    return (
        <button onClick={onAction} className={style}>
            {text}
            <span className={iconClass}>{icon}</span>
        </button>
    )
}

export default Button
