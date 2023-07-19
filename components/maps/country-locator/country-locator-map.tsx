'use client'

import Map, { Source, Layer } from 'react-map-gl'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN // Set your mapbox token here

const CountryLocator = ({}) => {
    const onHover = (event: any) => {
        console.log('event.features', event.features[0]?.properties?.name_en) // is undefined 8 out of 10 times
    }

    return (
        <div className={`relative w-full`}>
            <Map
                initialViewState={{
                    latitude: 0,
                    longitude: 0,
                    zoom: 1,
                }}
                mapStyle="mapbox://styles/mapbox/light-v9"
                mapboxAccessToken={MAPBOX_TOKEN}
                onMouseMove={onHover}
                interactiveLayerIds={['country-boundaries-layer']}
            >
                <Source type="vector" url="mapbox://mapbox.country-boundaries-v1">
                    <Layer
                        id="country-boundaries-layer"
                        source="country_boundaries"
                        source-layer="country_boundaries"
                        type="fill"
                    />
                </Source>
            </Map>
        </div>
    )
}

export default CountryLocator
