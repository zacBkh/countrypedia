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
}

export const GlobalContext = createContext<GlobalContextProps>({
    searchQuery: '',
    setSearchQuery: (): string => '',
})

// Glboal context provider component
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <GlobalContext.Provider value={{ searchQuery, setSearchQuery }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Will use this to hook into context
export const useGlobalContext = () => useContext(GlobalContext)
