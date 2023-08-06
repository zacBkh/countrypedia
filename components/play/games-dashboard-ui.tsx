import { FC } from 'react'

import { FeedbackUserAnswerTypes } from '@/app/play/capital-guesser/page'

export const FeedbackUserAnswerCapitalGuesser: FC<FeedbackUserAnswerTypes> = ({
    isUserCorrect,
    selectedCapital,
    correctAnswer,
}) => {
    const styleText = 'text-[#087da4] dark:text-[#149eca] font-bold'

    return (
        <p className="basis-1/3">
            {isUserCorrect === null ? (
                ''
            ) : isUserCorrect ? (
                <>{`✅ Correct!`}</>
            ) : (
                <>
                    {`❌ Wrong! `}
                    <span className={`${styleText}`}>{selectedCapital}</span>
                    {` is the capital of `}
                    <span className={`${styleText}`}>{correctAnswer}</span>{' '}
                </>
            )}
        </p>
    )
}

interface HelpMsgType {
    openModal: () => void
}

export const HelpMessage: FC<HelpMsgType> = ({ openModal }) => {
    const styleText = 'text-[#087da4] dark:text-[#149eca] font-bold'

    return (
        <p className="basis-1/3 xl:text-lg">
            Feeling lost?{' '}
            <button
                onClick={openModal}
                className={`${styleText} hover:underline hover:!bg-transparent active:transform-none"`}
            >
                See instructions or change level
            </button>
        </p>
    )
}

interface ScoreDisplayerTypes {
    score: number
    countClick: number
}

export const ScoreDisplayer: FC<ScoreDisplayerTypes> = ({ score, countClick }) => {
    const styleText = 'text-[#087da4] dark:text-[#149eca] font-bold'

    return (
        <p className="basis-1/3 rounded-md py-2 xl:text-lg">
            🎯 Your score:{' '}
            <span className={`${styleText}`}>
                {score}/{countClick}
            </span>
        </p>
    )
}
