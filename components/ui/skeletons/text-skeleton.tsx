import { FC } from 'react'

interface TextSkeletonProps {
    style: string
}

const TextSkeleton: FC<TextSkeletonProps> = ({ style }) => {
    return <div className={` ${style} animate-pulse skeletonBG rounded-full`}></div>
}

export default TextSkeleton
