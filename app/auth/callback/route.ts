import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/lib/database.types'

export async function GET(request: NextRequest) {
	const code = request.nextUrl.searchParams.get('code')
	if (code) {
		const supabase = createRouteHandlerClient<Database>({ cookies })
		supabase.auth.exchangeCodeForSession(code)
	}
	return NextResponse.redirect(new URL('/dashboard', request.url))
}
