'use client'

import { FC, useEffect } from 'react'

import ReactCanvasConfetti from 'react-canvas-confetti'

import useConfetti from '@/hooks/useConfetti'

interface ConfettiWrapperProps {
    isUserCorrect: boolean | null
    countClick: number
}

const ConfettiWrapper: FC<ConfettiWrapperProps> = ({ isUserCorrect, countClick }) => {
    const { getInstance, fire } = useConfetti()

    const canvasStyles = {
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    } as React.CSSProperties

    useEffect(() => {
        if (isUserCorrect) {
            fire()
        }
    }, [countClick])

    return (
        <>
            <ReactCanvasConfetti
                particleCount={40}
                ticks={80}
                gravity={1.6}
                startVelocity={55}
                refConfetti={getInstance}
                style={canvasStyles}
            />
        </>
    )
}

export default ConfettiWrapper
