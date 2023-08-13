// A SUPPRIMER !!!!

import { NextRequest, NextResponse } from 'next/server'

import { fetchLikesCount } from '@/services/prisma-queries'

export async function GET() {
    console.log('fetch all like count', 999999999)

    const likesCount = await fetchLikesCount()
    return NextResponse.json({
        success: true,
        result: likesCount,
    })
}
