import { FC } from 'react'

interface ImageSkeletonProps {
    style?: string
}

const ImageSkeleton: FC<ImageSkeletonProps> = ({ style }) => {
    return (
        <div
            className={`animate-pulse flex items-center justify-center skeletonBG ${style}`}
        ></div>
    )
}

export default ImageSkeleton
