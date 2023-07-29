'use client'

import { FC, useState, useMemo, useCallback, useEffect } from 'react'

import Map, { Source, Layer } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { useTheme } from 'next-themes'

import { highlightedCountryLayerHover, countriesLayer } from './layers'

import { CUSTOM_MAP_STYLES } from '@/constants/map-styles'
const { dark: darkMapStyle, light: lightMapStyle } = CUSTOM_MAP_STYLES

interface CountryLocatorMapProps {
    onCtySelection: any
}

const CountryLocatorMap: FC<CountryLocatorMapProps> = ({ onCtySelection }) => {
    const [hoverInfo, setHoverInfo] = useState('')

    const [isDragging, setIsDragging] = useState(false)

    const { theme } = useTheme()

    const clickMapHandler = (event: any) => {
        if (isDragging) {
            return
        }
        const selectedCty = event.features[0]?.properties
        if (!selectedCty) {
            return
        }
        const { iso_3166_1_alpha_3: code, name_en: name } = selectedCty
        onCtySelection({ code, name })
    }

    const hoverMapHandler = useCallback((event: any) => {
        const activeCty = event.features[0]?.properties?.name_en ?? ''
        if (activeCty) {
            setHoverInfo(activeCty)
        } else {
            setHoverInfo('')
        }
    }, [])

    const leaveMapHandler = () => {
        setHoverInfo('')
    }

    const filterHoveredCty = useMemo(
        () => ['in', 'name_en', hoverInfo],
        [hoverInfo],
    ) as any

    const handleDragStart = () => {
        setIsDragging(true)
    }

    const handleDragEnd = () => {
        setIsDragging(false)
    }

    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 0

    // Calculate navbar && above map height & set map height to fill viewport
    const [mapHeight, setMapHeight] = useState('')
    useEffect(() => {
        const heightDashboard = document.querySelector(
            '#dashboard-country-locator',
        )?.clientHeight

        const heightNavbar = document.querySelector('#navbar')?.clientHeight

        const viewportHeight = window.innerHeight

        const mapHeight = viewportHeight - (heightDashboard! + heightNavbar!) - 5

        setMapHeight(`${mapHeight}px`)
    }, [])

    return (
        <div style={{ height: mapHeight }} className={`relative w-full`}>
            {mapHeight !== '' && (
                <Map
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    cursor={hoverInfo ? 'pointer' : 'auto'}
                    onMouseMove={hoverMapHandler}
                    onMouseLeave={leaveMapHandler}
                    onMouseUp={clickMapHandler}
                    renderWorldCopies={false}
                    cooperativeGestures={viewportWidth < 768 ? false : true}
                    initialViewState={{
                        longitude: 0,
                        latitude: 66.919,
                        zoom: 1,
                    }}
                    mapStyle={theme === 'dark' ? darkMapStyle : lightMapStyle}
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                    interactiveLayerIds={['countries-fill']}
                    doubleClickZoom={false}
                    attributionControl={false}
                    dragRotate={false}
                >
                    <Source type="vector" url="mapbox://mapbox.country-boundaries-v1">
                        <Layer
                            {...countriesLayer}
                            beforeId="waterway-label"
                            paint={{
                                'fill-outline-color':
                                    theme === 'dark' ? '#666666' : '#EBECF0',
                                'fill-color': theme === 'dark' ? '#363636' : '#FDFDFD',
                            }}
                        />

                        <Layer
                            {...highlightedCountryLayerHover}
                            beforeId="waterway-label"
                            filter={filterHoveredCty}
                        />
                    </Source>
                </Map>
            )}
        </div>
    )
}

export default CountryLocatorMap
