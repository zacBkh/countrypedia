import { FC } from 'react'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import { reviewGame } from '@/services/dynamic-fetchers'

import { GameNames } from '@/constants/game-names'

import Button from '../ui/buttons'

import ErrorFeedback from './error-feedback'

import { mutate } from 'swr'
import useSWRImmutable from 'swr/immutable'

import SWR_KEYS from '@/constants/SWR-keys'

interface FormGameReviewProps {
    gameName: GameNames
    onReviewSent: () => void
    form_translation: string
}

type InputsReviewForm = {
    COMMENT: string
    AUTHOR_NAME: string
}

const FormGameReview: FC<FormGameReviewProps> = ({
    gameName,
    onReviewSent,
    form_translation,
}) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<InputsReviewForm>()

    const onSubmit: SubmitHandler<InputsReviewForm> = async data => {
        const { COMMENT, AUTHOR_NAME } = data

        // Optimistically update the UI
        mutate('/api/reviews', { ...data }, false)

        const addReviewHandler = await reviewGame(gameName, COMMENT, AUTHOR_NAME)

        if (!addReviewHandler.success) {
            console.log('error happened in review send')
        } else {
            onReviewSent()
            reset()
            // had to add a timeout here otherwise update not showing on UI
            setTimeout(() => {
                mutate(SWR_KEYS.REVIEWS_GAME)
            }, 1000)
        }
    }

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
                    placeholder="John Doe"
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
                <ErrorFeedback errorForField={errors.AUTHOR_NAME?.message} />
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
                <ErrorFeedback errorForField={errors.COMMENT?.message} />
            </div>

            <Button
                moreStyle="mx-auto !px-3 !py-[5px] !text-sm"
                text={form_translation}
                ariaLabel="Click to submit your review"
            ></Button>
        </form>
    )
}

export default FormGameReview
