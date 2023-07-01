import CountryCardSkeleton from '@/components/ui/skeletons/country-card-skeleton'
import { RESPONSIVE_PADDING } from '@/constants/responsive-padding'

const Loading = () => {
    let qtySkeletons = []
    for (let step = 0; step < 15; step++) {
        qtySkeletons.push(1)
    }
    return (
        <div
            className={`${RESPONSIVE_PADDING} flex flex-wrap justify-between items-center gap-4`}
        >
            {qtySkeletons.map((i, index) => (
                <CountryCardSkeleton key={index} />
            ))}
        </div>
    )
}

export default Loading
