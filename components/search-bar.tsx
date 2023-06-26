'use client'
import { FC } from 'react'

interface SearchBarProps {
    hello?: any
}

const SearchBar: FC<SearchBarProps> = ({}) => {
    return (
        <>
            <div className="hidden md:flex flex-1 justify-center items-center w-full 3xl:w-auto 3xl:shrink-0 3xl:justify-center">
                <button
                    type="button"
                    className="active:transform-none flex 3xl:w-[56rem] 3xl:mx-0 relative pl-4 pr-1 py-1 h-10 bg-gray-30/20 dark:bg-gray-40/20 outline-none focus:outline-link betterhover:hover:bg-opacity-80 pointer items-center text-left w-full text-gray-30 rounded-full align-middle text-base bg-[#EBECF0] dark:bg-[#333944]"
                >
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 20 20"
                        className="mr-3 align-middle text-gray-30 shrink-0 group-betterhover:hover:text-gray-70"
                    >
                        <path
                            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            fill-rule="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                    Search
                    <span className="ml-auto hidden sm:flex item-center mr-1">
                        <kbd
                            className="w-5 h-5 border border-transparent mr-1 bg-wash dark:bg-[#333944] text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md"
                            data-platform="mac"
                        >
                            ⌘
                        </kbd>
                        <kbd
                            className="w-10 h-5 border border-transparent mr-1 bg-wash dark:bg-[#333944] text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md"
                            data-platform="win"
                        >
                            Ctrl
                        </kbd>
                        <kbd className="w-5 h-5 border border-transparent mr-1 bg-wash dark:bg-[#333944] text-gray-30 align-middle p-0 inline-flex justify-center items-center text-xs text-center rounded-md">
                            K
                        </kbd>
                    </span>
                </button>
            </div>
        </>
    )
}

export default SearchBar
