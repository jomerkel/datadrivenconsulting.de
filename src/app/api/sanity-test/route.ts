// src/app/api/sanity-test/route.ts
import { NextResponse } from 'next/server'
import { client } from '../../../sanity/lib/client'
import { allPostsQuery } from '../../../sanity/lib/queries'

export async function GET() {
  try {
    const posts = await client.fetch(allPostsQuery)
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Sanity API error:', error)
    return NextResponse.json({ error: 'Sanity fetch failed' }, { status: 500 })
  }
}
