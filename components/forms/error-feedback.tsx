import { FC } from 'react'

import type { FieldError } from 'react-hook-form'

interface ErrorFeedbackProps {
    errorForField: string | undefined
}

const ErrorFeedback: FC<ErrorFeedbackProps> = ({ errorForField }) => {
    if (!errorForField) return

    return <p className="text-sm text-red-600 mt-1">{errorForField}</p>
}

export default ErrorFeedback
