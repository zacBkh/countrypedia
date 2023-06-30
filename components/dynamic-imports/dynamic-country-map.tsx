'use client'

import dynamic from 'next/dynamic'
import MapShowCountrySkeleton from '../ui/skeletons/map-show-country-skeleton'

const DynamicMapShowCountry = dynamic(
    () =>
        import(
            /* webpackChunkName: 'lazy-loaded-map-show-country' */
            '../../components/maps/show-country-map'
        ),
    {
        ssr: false,
        loading: () => <MapShowCountrySkeleton />,
    },
)

export default DynamicMapShowCountry
