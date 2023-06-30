'use client'

import Map from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { FC } from 'react'

import { MAP_STYLES, MESSAGE_MAP_MAC, MESSAGE_MAP_PC } from '@/constants/map-styles'

import { useTheme } from 'next-themes'

interface MapShowCountryProps {
    a?: any
}

const MapShowCountry: FC<MapShowCountryProps> = ({ a }) => {
    const { theme, setTheme } = useTheme()
    console.log('theme from map', theme)
    console.log('hello from map')

    return (
        <>
            <div className={`w-96 h-96`}>
                <Map
                    // onIdle={() => setIsStyleLoaded(true)}
                    cooperativeGestures={true}
                    // id={markerCoordinates}
                    initialViewState={{
                        longitude: -100,
                        latitude: 40,
                        zoom: 3.5,
                    }}
                    style={{ width: 600, height: 400 }}
                    mapStyle={MAP_STYLES[0].link}
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                    attributionControl={false}
                    minZoom={2}
                    maxZoom={18}
                    locale={{
                        'ScrollZoomBlocker.CtrlMessage': MESSAGE_MAP_PC,
                        'ScrollZoomBlocker.CmdMessage': MESSAGE_MAP_MAC,
                    }}
                >
                    {/* <FullscreenControl /> */}
                    {/* <GeolocateControl /> */}
                    {/* <NavigationControl /> */}
                    {/* <ScaleControl /> */}
                </Map>
            </div>
        </>
    )
}

export default MapShowCountry
