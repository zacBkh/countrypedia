export const countryFillLayer = {
    beforeId: 'waterway-label',
    id: 'countries-fill',
    source: 'country_boundaries',
    'source-layer': 'country_boundaries',
    type: 'fill',
    paint: {
        'fill-opacity': 0.8,
        'fill-outline-color': 'black',
        'fill-color': '#149ECA',
    },
} as any

// const countryFillLayer = {
//     maxZoom,
//     id: 'country-fill',
//     type: 'fill',
//     source: 'country-boundaries',
//     'source-layer': 'country_boundaries',
//     paint: {
//         'fill-color': '#149ECA',
//         'fill-opacity': 0.8,
//     },
//     filter: ['==', ['get', 'iso_3166_1_alpha_3'], ISOCtyName],
// } as any
