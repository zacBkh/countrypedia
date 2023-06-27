'use client'
import { FC, useEffect, useRef, useState } from 'react'

import KeyBoardStroke from './ui/icons/os-icons'
import MagnifyingGlass from './ui/icons/magnifying-glass'
import CloseButton from './ui/icons/close-button'

import { useGlobalContext } from '@/app/context/store'

interface SearchBarProps {
    hello?: any
}

const SearchBar: FC<SearchBarProps> = ({}) => {
    const searchBarRef = useRef<HTMLInputElement>(null)

    const { searchQuery, setSearchQuery } = useGlobalContext()

    const searchHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const search = evt.target.value
        setSearchQuery(search) // send to global context
    }

    const [currentOS, setCurrentOS] = useState('')

    useEffect(() => {
        const navigator = (window.navigator as any).userAgentData.platform
        setCurrentOS(navigator)

        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault()
                searchBarRef.current?.focus()
            }
        }

        window.addEventListener('keydown', keyDownHandler)
        return () => {
            window.removeEventListener('keydown', keyDownHandler)
        }
    }, [])

    return (
        <>
            <div className="relative hidden md:flex flex-1 justify-center items-center w-full 3xl:w-auto 3xl:shrink-0 3xl:justify-center">
                <div className="z-50 absolute left-[3%] 2xl:left-[14px] top-auto flex justify-center items-center">
                    {searchQuery ? (
                        <CloseButton onDeleteSearch={() => setSearchQuery('')} />
                    ) : (
                        <MagnifyingGlass />
                    )}
                </div>

                <input
                    ref={searchBarRef}
                    onChange={searchHandler}
                    value={searchQuery}
                    placeholder="Search"
                    className="p-2 pl-10 flex 2xl:mx-0 relative pr-1 py-1 h-10 outline-none focus:outline-react-blue-txt-light&dark  items-center text-left text-gray-30 rounded-full align-middle text-base bg-[#EBECF0] dark:bg-[#333944] !w-full"
                />

                {currentOS ? (
                    <div className="z-50 absolute flex items-center right-[2%] top-auto">
                        {currentOS === 'Windows' ? (
                            <KeyBoardStroke
                                moreCSS="w-10 h-5"
                                data_platform="win"
                                text="Ctrl"
                            />
                        ) : (
                            <KeyBoardStroke
                                moreCSS="w-5 h-5 p-2"
                                data_platform="mac"
                                text="⌘"
                            />
                        )}
                        <KeyBoardStroke moreCSS="w-5 h-5" text="K" />
                    </div>
                ) : (
                    ''
                )}
            </div>
        </>
    )
}

export default SearchBar
