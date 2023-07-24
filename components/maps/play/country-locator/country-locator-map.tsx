'use client'

import { FC, useState, useMemo, useCallback } from 'react'

import Map, { Source, Layer } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { RESPONSIVE_MAP_SIZE } from '@/constants/map-styles'
const { countryLocatorMap } = RESPONSIVE_MAP_SIZE

import { useTheme } from 'next-themes'

import { highlightedCountryLayerHover, countriesLayer } from './layers'

import { CUSTOM_MAP_STYLES } from '@/constants/map-styles'
const { dark: darkMapStyle, light: lightMapStyle } = CUSTOM_MAP_STYLES

interface CountryLocatorMapProps {
    onCtySelection: any
}

const CountryLocatorMap: FC<CountryLocatorMapProps> = ({ onCtySelection }) => {
    const [hoverInfo, setHoverInfo] = useState('')

    const { theme } = useTheme()

    const clickMapHandler = (event: any) => {
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
        console.log('hoverInfo', hoverInfo)
    }, [])

    const leaveMapHandler = () => {
        setHoverInfo('')
    }

    const filterHoveredCty = useMemo(
        () => ['in', 'name_en', hoverInfo],
        [hoverInfo],
    ) as any

    return (
        <div className={`${countryLocatorMap} relative w-full my-2`}>
            <Map
                cursor={hoverInfo ? 'pointer' : 'auto'}
                onMouseMove={hoverMapHandler}
                onMouseLeave={leaveMapHandler}
                onMouseDown={clickMapHandler}
                renderWorldCopies={false}
                cooperativeGestures={true}
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
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
        </div>
    )
}

export default CountryLocatorMap
