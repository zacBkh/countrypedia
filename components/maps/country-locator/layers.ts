import type { FillLayer } from 'react-map-gl'

export const countriesLayer: FillLayer = {
    id: 'countries-fill',
    type: 'fill',
    source: 'country_boundaries',
    'source-layer': 'country_boundaries',
}
export const highlightedCountryLayerHover: FillLayer = {
    id: 'countries-hover',
    type: 'fill',
    source: 'country_boundaries',
    'source-layer': 'country_boundaries',
    paint: {
        'fill-color': '#149ECA',
    },
}
