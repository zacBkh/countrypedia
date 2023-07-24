'use client'

import {
    createContext,
    useContext,
    useState,
    SetStateAction,
    Dispatch,
    ReactNode,
} from 'react'

export const enum DifficultyLvlCountrySelector {
    easy = 'EASY',
    hard = 'HARD',
}

type SetDifficultyLevelFunction = (lvl: DifficultyLvlCountrySelector) => void

interface GlobalContextProps {
    searchQuery: string
    setSearchQuery: Dispatch<SetStateAction<string>>
    isHamburgerMenuOpen: boolean
    setIsHamburgerMenuOpen: Dispatch<SetStateAction<boolean>>
    modalsCtx: {
        countryLocatorRules: {
            isActive: boolean
            toggleModalState: Function
            difficultyLevel: DifficultyLvlCountrySelector
            setDifficultyLvl: SetDifficultyLevelFunction
        }
    }
}

export const GlobalContext = createContext<GlobalContextProps>({
    searchQuery: '',
    setSearchQuery: (): string => '',
    isHamburgerMenuOpen: false,
    setIsHamburgerMenuOpen: (): string => '',
    modalsCtx: {} as GlobalContextProps['modalsCtx'],
})

// Glboal context provider component
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [ctyLocatorModalIsOpen, setCtyLocatorModalIsOpen] = useState(true)
    const [difficultyLvl, setDifficultyLvl] = useState<DifficultyLvlCountrySelector>(
        DifficultyLvlCountrySelector.easy,
    )
    const [searchQuery, setSearchQuery] = useState('')
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

    const modalsCtx = {
        countryLocatorRules: {
            isActive: ctyLocatorModalIsOpen,
            toggleModalState: () => {
                setCtyLocatorModalIsOpen(prev => !prev)
            },
            difficultyLevel: difficultyLvl,
            setDifficultyLvl: (lvl: DifficultyLvlCountrySelector) => {
                setDifficultyLvl(lvl)
            },
        },
    }

    return (
        <GlobalContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                isHamburgerMenuOpen,
                setIsHamburgerMenuOpen,
                modalsCtx,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

// Will use this to hook into context
export const useGlobalContext = () => useContext(GlobalContext)
