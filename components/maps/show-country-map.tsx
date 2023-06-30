'use client'

import Map, { FullscreenControl, Source, Layer } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { FC } from 'react'

import { MAP_STYLES, MESSAGE_MAP_MAC, MESSAGE_MAP_PC } from '@/constants/map-styles'

import { useTheme } from 'next-themes'

import { GetOneCountryProps } from '@/services/fetchers'

import { RESPONSIVE_MAP_SIZE } from '@/constants/map-styles'
const { mapHeight, mapWidth } = RESPONSIVE_MAP_SIZE

interface MapShowCountryProps {
    latLng: GetOneCountryProps['latlng']
    ISOCtyName: string
}

const MapShowCountry: FC<MapShowCountryProps> = ({ ISOCtyName, latLng }) => {
    const { theme } = useTheme()

    const boundsSource = {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
    }

    const maxZoom = 6

    const boundsLayer = {
        maxZoom,
        id: 'country-boundaries',
        type: 'line',
        source: 'country-boundaries',
        'source-layer': 'country_boundaries',
        paint: {
            'line-color': theme === 'dark' ? '#149ECA' : '#087EA4',
            'line-width': 1,
        },
        filter: ['==', ['get', 'iso_3166_1_alpha_3'], ISOCtyName],
    } as any

    return (
        <>
            <div className={`${mapHeight} ${mapWidth}`}>
                <Map
                    // onIdle={() => setIsStyleLoaded(true)}
                    cooperativeGestures={true}
                    initialViewState={{
                        longitude: latLng[1],
                        latitude: latLng[0],
                        zoom: 4,
                    }}
                    maxZoom={maxZoom}
                    mapStyle={theme === 'dark' ? MAP_STYLES.dark : MAP_STYLES.light}
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                    attributionControl={false}
                    locale={{
                        'ScrollZoomBlocker.CtrlMessage': MESSAGE_MAP_PC,
                        'ScrollZoomBlocker.CmdMessage': MESSAGE_MAP_MAC,
                    }}
                >
                    <Source id="country-boundaries" type="vector" url={boundsSource.url}>
                        <Layer {...boundsLayer} />
                    </Source>

                    <FullscreenControl />
                </Map>
            </div>
        </>
    )
}

export default MapShowCountry
