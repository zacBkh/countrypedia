'use client'

import dynamic from 'next/dynamic'

const DynamicMapShowCountry = dynamic(
    () =>
        import(
            /* webpackChunkName: 'lazy-loaded-map-show-country' */
            '../../components/maps/show-country-map'
        ),
    {
        ssr: false,
        loading: () => <p className="text-white">Loading COUNTRY Map...</p>,
    },
)

export default DynamicMapShowCountry
