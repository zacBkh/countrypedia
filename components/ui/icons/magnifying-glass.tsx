import { FC } from 'react'

interface MagnifyingGlassProps {
    moreCSSContainer?: string
    moreCSSSvg?: string
}

const MagnifyingGlass: FC<MagnifyingGlassProps> = ({ moreCSSContainer, moreCSSSvg }) => {
    return (
        <div className={moreCSSContainer}>
            <span className="sr-only">Search icon</span>

            <svg
                width="15px"
                height="15px"
                viewBox="0 0 20 20"
                className={`${moreCSSSvg}`}
            >
                <path
                    d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>
            </svg>
        </div>
    )
}

export default MagnifyingGlass
