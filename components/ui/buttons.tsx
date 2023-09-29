import { FC } from 'react'
import Link from 'next/link'
import { BUTTON_FONT_SIZE } from '@/constants/responsive-fonts'

import { MouseEventHandler } from 'react'

interface ButtonProps {
    text: string
    ariaLabel: string

    link?: any
    isNextLink?: boolean
    isExternalLink?: boolean

    onAction?: MouseEventHandler
    textSm?: string
    secondary?: boolean
    moreStyle?: string

    icon?: any
    iconClass?: string

    title?: string
}

const Button: FC<ButtonProps> = ({
    text,
    ariaLabel,
    textSm,
    onAction,
    secondary,
    isNextLink,
    isExternalLink,
    link,
    moreStyle,
    icon,
    iconClass,
    title,
}) => {
    const style = `flex justify-between gap-x-3 items-center px-4 py-[5px] md:py-[10px] ${BUTTON_FONT_SIZE} text-center rounded-full font-bold
    ${moreStyle}
    ${
        secondary
            ? 'border dark:border-[#404756] dark:hover:bg-[#252932] border-[#d9dbe3] hover:bg-[#4e57690d]'
            : 'text-white bg-react-button-blue-light hover:bg-react-blue-txt-light&dark-hover dark:bg-react-button-blue-dark dark:hover:bg-react-blue-txt-light&dark-hover'
    }`

    if (isNextLink) {
        return (
            <Link href={link} className={style}>
                <span className="md:hidden">{textSm ?? text}</span>
                <span className="hidden md:inline">{text}</span>
                {icon ? <span className={iconClass}>{icon}</span> : ''}
            </Link>
        )
    }

    if (isExternalLink) {
        return (
            <a target="_blank" className={style} href={link}>
                <span className="md:hidden">{textSm ?? text}</span>
                <span className="hidden md:inline">{text}</span>
                <span className={iconClass}>{icon}</span>
            </a>
        )
    }

    return (
        <button title={title} aria-label={ariaLabel} onClick={onAction} className={style}>
            {textSm ? <span className="md:hidden">{textSm ?? text}</span> : ''}
            <span className="hidden md:inline">{text}</span>
            {icon ? <span className={iconClass}>{icon}</span> : ''}
        </button>
    )
}

export default Button
