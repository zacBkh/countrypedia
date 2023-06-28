'use client'

import {
    createContext,
    useContext,
    useState,
    SetStateAction,
    Dispatch,
    ReactNode,
} from 'react'

interface GlobalContextProps {
    searchQuery: string
    setSearchQuery: Dispatch<SetStateAction<string>>
    isHamburgerMenuOpen: boolean
    setIsHamburgerMenuOpen: Dispatch<SetStateAction<boolean>>
}

export const GlobalContext = createContext<GlobalContextProps>({
    searchQuery: '',
    setSearchQuery: (): string => '',
    isHamburgerMenuOpen: false,
    setIsHamburgerMenuOpen: (): string => '',
})

// Glboal context provider component
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

    return (
        <GlobalContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                isHamburgerMenuOpen,
                setIsHamburgerMenuOpen,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

// Will use this to hook into context
export const useGlobalContext = () => useContext(GlobalContext)
