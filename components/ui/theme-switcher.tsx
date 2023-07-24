'use client'

import { useState, useEffect } from 'react'

import { useTheme } from 'next-themes'

import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

import Spinner from './spinner'

const ThemeSwitcher = () => {
    const [isMounted, setIsMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const handleToggleTheme = () => {
        const newTheme = theme !== 'dark' ? 'dark' : 'light'
        setTheme(newTheme)
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return (
            <div className="w-12 h-12 flex justify-center items-center">
                <Spinner moreCSS="opacity-75 border-t-react-blue-txt-light&dark" />
            </div>
        )
    }

    return (
        <button
            onClick={handleToggleTheme}
            aria-label="Dark mode switcher"
            className="p-2 sm:p-3 rounded-full sm:w-12 sm:h-12"
        >
            <div>
                {theme === 'light' ? (
                    <MdOutlineDarkMode className="text-xl sm:text-2xl" />
                ) : (
                    <MdOutlineLightMode className="text-xl sm:text-2xl" />
                )}
            </div>
        </button>
    )
}

export default ThemeSwitcher
