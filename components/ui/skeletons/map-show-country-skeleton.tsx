'use client'

import { FC } from 'react'

import { RESPONSIVE_MAP_SIZE } from '@/constants/map-styles'

import { useTheme } from 'next-themes'

interface MapShowCountrySkeletonProps {
    style?: string
}

import MapSkeletonSVG from '../icons/map-skeleton-svg'

const MapShowCountrySkeleton: FC<MapShowCountrySkeletonProps> = ({ style }) => {
    const { theme } = useTheme()

    return (
        <div
            className={`${RESPONSIVE_MAP_SIZE.mapHeight} overflow-hidden animate-pulse !bg-[#DBDBDC] dark:!bg-[#1F1F1F] w-full ${style}`}
        >
            <MapSkeletonSVG
                strokeColor={theme === 'dark' ? '#676767' : '#B4B4B3'}
                fillColor={theme === 'dark' ? '#292929' : '#FCFCFD'}
            />
        </div>
    )
}

export default MapShowCountrySkeleton
