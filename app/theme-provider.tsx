'use client'

import { useState, useEffect } from 'react'

import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

const ThemeProviderWrap: FC<{ children: ReactNode }> = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return <>{children}</>
    }

    return (
        <ThemeProvider defaultTheme="dark" attribute="class">
            {children}
        </ThemeProvider>
    )
}

export default ThemeProviderWrap
