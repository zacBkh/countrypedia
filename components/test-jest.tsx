'use client'

import { useState, FC } from 'react'

const TestJest: FC = () => {
    const [changed, setChanged] = useState(false)
    return (
        <div>
            <button data-testid="btn" onClick={() => setChanged(true)}>
                Click to change the text
            </button>
            <p data-testid="paragraph">{changed ? 'Changed!' : 'Hello world'}</p>
        </div>
    )
}

export default TestJest
