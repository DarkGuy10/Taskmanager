import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/lib/database.types'
import { noAuthPaths } from '@/utils'

export default async function middleware(request: NextRequest) {
	const response = NextResponse.next()
	const supabase = createMiddlewareClient<Database>({
		req: request,
		res: response,
	})

	const {
		data: { session },
	} = await supabase.auth.getSession()

	/*	TODO: rewrite all authenticated requets to subdomain "app" */

	if (session && noAuthPaths.includes(request.nextUrl.pathname))
		return NextResponse.redirect(new URL('/dashboard', request.url))

	if (!session && !noAuthPaths.includes(request.nextUrl.pathname))
		return NextResponse.redirect(new URL('/login', request.url))

	return response
}

export const config = {
	matcher: ['/((?!api|auth|_next/static|_next/image|favicon.ico|svg).*)'],
}
