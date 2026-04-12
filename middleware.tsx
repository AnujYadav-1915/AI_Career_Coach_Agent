import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { isClerkConfigured } from './lib/clerk-config'

const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/',
    '/api/inngest'
])

const clerkHandler = clerkMiddleware(async (auth, req) => {
    if (!isPublicRoute(req)) {
        await auth.protect()
    }
})

export default function middleware(req: NextRequest, event: NextFetchEvent) {
    if (!isClerkConfigured()) {
        if (isPublicRoute(req)) {
            return NextResponse.next()
        }

        if (req.nextUrl.pathname.startsWith('/api/')) {
            return NextResponse.json(
                { error: 'Authentication is not configured for this deployment.' },
                { status: 503 }
            )
        }

        return NextResponse.redirect(new URL('/', req.url))
    }

    return clerkHandler(req, event)
}

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}