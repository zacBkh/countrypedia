'use client'

import Map, { Source, Layer } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { RESPONSIVE_MAP_SIZE } from '@/constants/map-styles'
const { countryLocatorMap } = RESPONSIVE_MAP_SIZE

import { useTheme } from 'next-themes'

const CountryLocator = ({}) => {
    const { theme } = useTheme()

    const onHover = (event: any) => {
        console.log('event.features', event.features[0]?.properties?.name_en) // is undefined 8 out of 10 times
    }

    return (
        <div className={`${countryLocatorMap} relative w-full`}>
            <Map
                renderWorldCopies={false}
                cooperativeGestures={true}
                initialViewState={{
                    longitude: -122.4,
                    latitude: 37.8,
                    zoom: 1,
                }}
                mapStyle={
                    theme === 'dark'
                        ? 'mapbox://styles/zacharie123dxb/clkbd8uln00v101pe5jdj3unh'
                        : 'mapbox://styles/zacharie123dxb/clkbbqlih00uu01pe35f4fkh7'
                }
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                onMouseDown={onHover}
                interactiveLayerIds={['countries-fill']}
                attributionControl={false}
            >
                <Source type="vector" url="mapbox://mapbox.country-boundaries-v1">
                    <Layer
                        beforeId="waterway-label"
                        id="countries-fill"
                        source="country_boundaries"
                        source-layer="country_boundaries"
                        type="fill"
                        paint={{
                            'fill-outline-color':
                                theme === 'dark' ? '#666666' : '#EBECF0',
                            'fill-color': theme === 'dark' ? '#363636' : '#FDFDFD',
                        }}
                    />
                </Source>
            </Map>
        </div>
    )
}

export default CountryLocator
