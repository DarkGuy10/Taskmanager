import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@/lib/database.types'

export default async function GET(request: NextRequest) {
	const requestUrl = new URL(request.url)
	const code = requestUrl.searchParams.get('code')

	if (code) {
		const supabase = createRouteHandlerClient({ cookies })
		supabase.auth.exchangeCodeForSession(code)
	}

	NextResponse.redirect(requestUrl.origin)
}
