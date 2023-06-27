import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
// import type {Database} from "@/lib/database.types"

/**
 * Todo: generate typescript types for database using supabase cli
 */
type DataBase = any

export default async function middleware(req: NextRequest) {
	const res = NextResponse.next()
	const supabase = createMiddlewareClient<DataBase>({ req, res })
	await supabase.auth.getSession()
	return res
}
