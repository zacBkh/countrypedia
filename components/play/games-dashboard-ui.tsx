import { FC } from 'react'

import { FeedbackUserAnswerTypes } from './capital-guesser'

export const styleTxtBlued = 'text-[#087da4] dark:text-[#149eca] font-bold'

export const FeedbackUserAnswerCapitalGuesser: FC<FeedbackUserAnswerTypes> = ({
    isUserCorrect,
    selectedCapital,
    correctAnswer,
}) => {
    return (
        <p className="basis-1/3">
            {isUserCorrect === null ? (
                ''
            ) : isUserCorrect ? (
                <>{`✅ Correct!`}</>
            ) : (
                <>
                    {`❌ Wrong! `}
                    <span className={`${styleTxtBlued}`}>{selectedCapital}</span>
                    {` is the capital of `}
                    <span className={`${styleTxtBlued}`}>{correctAnswer}</span>{' '}
                </>
            )}
        </p>
    )
}

import { TradGameTypes } from './capital-guesser'

interface HelpMsgType {
    openModal: () => void
    trad: TradGameTypes['tradModals']
}

export const HelpMessage: FC<HelpMsgType> = ({ openModal, trad }) => {
    return (
        <p className="basis-1/3 xl:text-lg">
            Feeling lost?{' '}
            <div
                onClick={openModal}
                className={`${styleTxtBlued} hover:underline hover:!bg-transparent active:transform-none cursor-pointer"`}
            >
                See instructions or change level
            </div>
        </p>
    )
}

interface ScoreDisplayerTypes {
    score: number
    countClick: number
}

export const ScoreDisplayer: FC<ScoreDisplayerTypes> = ({ score, countClick }) => {
    return (
        <p className="basis-1/3 rounded-md py-2 xl:text-lg">
            🎯 Your score:{' '}
            <span className={`${styleTxtBlued}`}>
                {score}/{countClick}
            </span>
        </p>
    )
}
