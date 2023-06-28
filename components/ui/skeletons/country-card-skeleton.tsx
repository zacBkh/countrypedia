import ImageSkeleton from './image-skeleton'
import TextSkeleton from './text-skeleton'

import { DETAILS_FONT_SIZE } from '@/constants/responsive-fonts'

const CountryCardSkeleton = ({}) => {
    return (
        <div
            className="
            mx-auto
            w-[280px] md:w-[350px] h-[370.67px] 
            bg-[#F7F7F9] dark:bg-[#16181D]
            border border-[#d9dbe3] dark:border-gray-600 
            rounded-lg shadow overflow-hidden"
        >
            <ImageSkeleton style={'h-36 md:h-48'} />

            <div id="bottomPartSkeleton" className="py-2 px-4 flex flex-col gap-y-5">
                <div id="name&Img" className="flex justify-between gap-x-2 items-center ">
                    <TextSkeleton style="h-2.5 w-24" />
                    <ImageSkeleton style={'w-16 h-16 rounded-full'} />
                </div>

                <div
                    id="iconsSkeleton"
                    className={`${DETAILS_FONT_SIZE} flex justify-between gap-x-2`}
                >
                    <span className="flex items-center gap-x-1 sm:gap-x-2">
                        <ImageSkeleton style={'w-3 h-3 rounded-full'} />
                        <TextSkeleton style="h-2.5 w-14 sm:w-20" />
                    </span>
                    <span className="flex items-center gap-x-1 sm:gap-x-2">
                        <ImageSkeleton style={'w-3 h-3 rounded-full'} />
                        <TextSkeleton style="h-2.5 w-12 sm:w-16" />
                    </span>
                    <span className="flex items-center gap-x-1 sm:gap-x-2">
                        <ImageSkeleton style={'w-3 h-3 rounded-full'} />
                        <TextSkeleton style="h-2.5 w-10 sm:w-14" />
                    </span>
                </div>

                <div className="flex justify-between gap-x-8">
                    <div className="mt-[2.2px] animate-pulse rounded-full w-[134px] h-[41px] skeletonBG"></div>
                    <div className="mt-[2.2px] animate-pulse rounded-full w-[144px] h-[41px] skeletonBG"></div>
                </div>
            </div>
        </div>
    )
}

export default CountryCardSkeleton
