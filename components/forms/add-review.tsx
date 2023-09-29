import { FC } from 'react'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { reviewGame } from '@/services/dynamic-fetchers'

import { GameNames } from '@/constants/game-names'

interface FormGameReviewProps {
    gameName: GameNames
    onReviewSent: () => void
}

type Inputs = {
    COMMENT: string
    AUTHOR_NAME: string
}

const FormGameReview: FC<FormGameReviewProps> = ({ gameName, onReviewSent }) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async data => {
        const { COMMENT, AUTHOR_NAME } = data
        const addReviewHandler = await reviewGame(gameName, COMMENT, AUTHOR_NAME)

        if (!addReviewHandler.success) {
            console.log('error happened in review send')
        } else {
            console.log('success')
            onReviewSent()
            reset()
        }
    }

    // console.log('LIVE DATA -->', watch('AUTHOR_NAME'))

    const inputCSS =
        ' outline-none block p-2.5 w-full text-sm text-gray-900 bg-[#EBECF0] rounded-lg border border-gray-300 dark:bg-[#333944] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-react-blue-txt-light&dark'

    return (
        <form className="flex flex-col gap-y-2 mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="USERNAME" className="sr-only">
                    Your name
                </label>

                <input
                    className={inputCSS}
                    type="text"
                    placeholder="What's your name?"
                    {...register('AUTHOR_NAME', {
                        required: 'Your name is required.',
                        minLength: {
                            value: 2,
                            message: 'Minimum length is 2 characters',
                        },
                        maxLength: {
                            value: 300,
                            message: 'Maximum length is 300 characters',
                        },
                    })}
                />
                {errors.AUTHOR_NAME && (
                    <p className="text-sm text-red-600 mt-1">
                        {errors.AUTHOR_NAME.message}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="COMMENT" className="sr-only">
                    Your comment
                </label>
                <textarea
                    className={inputCSS}
                    placeholder="Thank you for this instructive game!"
                    rows={4}
                    id="COMMENT"
                    {...register('COMMENT', {
                        required: 'Your comment is required.',
                        minLength: {
                            value: 5,
                            message: 'Minimum length is 5 characters',
                        },
                    })}
                />
                {errors.COMMENT && (
                    <p className="text-sm text-red-600 mt-1">{errors.COMMENT.message}</p>
                )}
            </div>

            <button>Submit</button>
        </form>
    )
}

export default FormGameReview
