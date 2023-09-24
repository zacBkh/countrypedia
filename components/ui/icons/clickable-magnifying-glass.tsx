'use client'

import { useGlobalContext } from '@/app/context/store'

import MagnifyingGlass from './magnifying-glass'

const ClickableMagnifyingGlass = () => {
    const { setIsMobileSearchBarActive } = useGlobalContext()

    const handler = () => {
        setIsMobileSearchBarActive(true)
    }

    return (
        <button onClick={handler}>
            <MagnifyingGlass moreCSSContainer="block md:hidden" />
        </button>
    )
}

export default ClickableMagnifyingGlass
