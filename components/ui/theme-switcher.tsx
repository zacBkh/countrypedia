'use client'

import { useState, useEffect } from 'react'

import { useTheme } from 'next-themes'

import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'

enum Theme {
    Light = 'light',
    Dark = 'dark',
}
const ThemeSwitcher = () => {
    const [isMounted, setIsMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const handleToggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return <div className="w-12 h-12"></div>
    }

    return (
        <>
            <button
                onClick={handleToggleTheme}
                aria-label="Dark mode switcher"
                className="  p-3 rounded-full"
            >
                <div>
                    {theme === 'light' ? (
                        <MdOutlineDarkMode className="text-2xl" />
                    ) : (
                        <MdOutlineLightMode className="text-2xl" />
                    )}
                </div>
            </button>
        </>
    )
}

export default ThemeSwitcher
