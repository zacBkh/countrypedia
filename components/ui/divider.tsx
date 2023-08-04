import { FC } from 'react'

interface DividerProps {
    moreCSS?: string
    vertical?: boolean
}

const Divider: FC<DividerProps> = ({ moreCSS, vertical }) => {
    return (
        <div
            className={`${vertical ? 'border-r h-16' : 'border-b'}  border-[#e4e4e4] ${
                moreCSS ?? ''
            }`}
        ></div>
    )
}

export default Divider
