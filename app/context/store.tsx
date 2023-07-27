'use client'

import {
    createContext,
    useContext,
    useState,
    SetStateAction,
    Dispatch,
    ReactNode,
} from 'react'

export const enum DifficultyLvl {
    EASY = 'easy',
    HARD = 'hard',
}

type SetDifficultyLevelFunction = (lvl: DifficultyLvl) => void

interface GlobalContextProps {
    searchQuery: string
    setSearchQuery: Dispatch<SetStateAction<string>>
    isHamburgerMenuOpen: boolean
    setIsHamburgerMenuOpen: Dispatch<SetStateAction<boolean>>
    modalsCtx: {
        countryLocatorRules: {
            isActive: boolean
            toggleModalState: Function
            difficultyLevel: DifficultyLvl
            setDifficultyLvl: SetDifficultyLevelFunction
        }
        capitalGuesserRules: {
            isActive: boolean
            toggleModalState: Function
            difficultyLevel: DifficultyLvl
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
    const [capitalGuesserModalIsOpen, setCapitalGuesserModalIsOpen] = useState(true)

    const [difficultyLvlCtyLocator, setDifficultyLvlCtyLocator] = useState<DifficultyLvl>(
        DifficultyLvl.EASY,
    )
    const [difficultyLvlCapitalGuesser, setDifficultyLvlCapitalGuesser] =
        useState<DifficultyLvl>(DifficultyLvl.EASY)

    const [searchQuery, setSearchQuery] = useState('')

    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

    const modalsCtx = {
        countryLocatorRules: {
            isActive: ctyLocatorModalIsOpen,
            toggleModalState: () => {
                setCtyLocatorModalIsOpen(prev => !prev)
            },
            difficultyLevel: difficultyLvlCtyLocator,
            setDifficultyLvl: (lvl: DifficultyLvl) => {
                setDifficultyLvlCtyLocator(lvl)
            },
        },

        capitalGuesserRules: {
            isActive: capitalGuesserModalIsOpen,
            toggleModalState: () => {
                setCapitalGuesserModalIsOpen(prev => !prev)
            },
            difficultyLevel: difficultyLvlCapitalGuesser,
            setDifficultyLvl: (lvl: DifficultyLvl) => {
                setDifficultyLvlCapitalGuesser(lvl)
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
