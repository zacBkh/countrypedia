import { FC } from 'react'

interface KeyBoardStrokeProps {
    moreCSS: string
    data_platform?: 'win' | 'mac'
    text: string
}

const KeyBoardStroke: FC<KeyBoardStrokeProps> = ({ moreCSS, data_platform, text }) => {
    return (
        <kbd
            className={`${moreCSS} text-[#99A1B3] !font-code w-10 h-5 border border-transparent mr-1 bg-white dark:bg-[#23272F] align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md`}
            data-platform={data_platform}
        >
            {text}
        </kbd>
    )
}

export default KeyBoardStroke
