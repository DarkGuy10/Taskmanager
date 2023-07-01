'use client'

import Button from '@/components/Button/Button'
import InputField from '@/components/InputField/InputField'
import styles from './LoginModal.module.scss'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { useState } from 'react'

import type { Database } from '@/lib/database.types'
import { useRouter } from 'next/navigation'

export default function LoginModal() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const supabase = createClientComponentClient<Database>()
	const router = useRouter()

	const handleSignin = async () => {
		await supabase.auth.signInWithPassword({
			email,
			password,
		})
		router.push('/dashboard')
	}

	return (
		<div className={styles.modal}>
			<div className={styles.header}>Login</div>
			<div className={styles.subHeader}>
				Sign in to your account to continue
			</div>

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

			<div className={styles.forgotPassword}>Forgot password?</div>

			<Button onClick={handleSignin}>
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
