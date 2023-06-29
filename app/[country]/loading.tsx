import CountryCardSkeleton from '@/components/ui/skeletons/country-card-skeleton'
const Loading = () => {
    // let qtySkeletons = []
    // for (let step = 0; step < 15; step++) {
    //     qtySkeletons.push(1)
    // }
    return (
        <div className="flex flex-wrap justify-between items-center gap-4">
            <p>LOADING FROM [COUNTRY]</p>
            {/* {qtySkeletons.map((i, index) => (
                <CountryCardSkeleton key={index} />
            ))} */}
        </div>
    )
}

export default Loading
