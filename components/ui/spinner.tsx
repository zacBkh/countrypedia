// color should be "border-t-[color]"

import { FC } from 'react'

interface SpinnerProps {
    moreCSS: string
}

const Spinner: FC<SpinnerProps> = ({ moreCSS }) => {
    return (
        <div
            className={`${moreCSS} bg-white-700 inline-block w-5 h-5 border-[2px] rounded-[50%] animate-spin ease-in-out`}
        ></div>
    )
}

export default Spinner
