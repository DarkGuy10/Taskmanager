'use client'

import { useState } from 'react'
import styles from './RegisterModal.module.scss'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { InputField, Button } from '@/components'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import type { Database } from '@/lib/database.types'

export default function RegisterModal() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [displayName, setDisplayName] = useState('')
	const supabase = createClientComponentClient<Database>()
	const router = useRouter()

	const handleSignUp = async () => {
		/* TODO: use JOI to first validate schema */

		supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					username,
					displayName,
				},
			},
		})
		router.push('/dashboard')
	}

	return (
		<div className={styles.modal}>
			<div className={styles.header}>Register</div>
			<div className={styles.subHeader}>Create an account to get started</div>

			<div className={styles.fieldWrapper}>
				<InputField
					type="email"
					iconUrl="/svg/at-the-rate.svg"
					label="Email address"
					placeholder="InumakiToge@jjk.jp"
					setState={setEmail}
				/>
			</div>

			<div className={styles.fieldWrapper}>
				<InputField
					type="password"
					iconUrl="/svg/key.svg"
					label="Password"
					placeholder="••••••••••••"
					setState={setPassword}
				/>
			</div>

			<div className={styles.fieldWrapper}>
				<InputField
					type="text"
					iconUrl="/svg/at-the-rate.svg"
					label="Username"
					placeholder="Onigiri"
					setState={setUsername}
				/>
			</div>

			<div className={styles.fieldWrapper}>
				<InputField
					type="text"
					iconUrl="/svg/at-the-rate.svg"
					label="Display Name"
					placeholder="Inumaki Toge"
					setState={setDisplayName}
				/>
			</div>

			<Button onClick={handleSignUp}>
				Sign In{' '}
				<Image
					src={'/svg/signin.svg'}
					height={24}
					width={24}
					alt="signin-icon"
					style={{ marginLeft: '10px' }}
				/>
			</Button>
		</div>
	)
}
