import { NextResponse } from 'next/server'

import { fetchReviews } from '@/services/prisma-queries'

export async function GET() {
    try {
        const allReviews = await fetchReviews()
        console.log('allReviews', allReviews)
        return NextResponse.json(
            {
                success: true,
                result: allReviews,
            },
            { status: 201 },
        )
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                result: `There has been an error getting the reviews [GET_REVIEWS]`,
            },
            { status: 404 },
        )
    }
}
