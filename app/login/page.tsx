import Button from '@/components/Button/Button'
import InputField from '@/components/InputField/InputField'
import styles from '@/styles/login.module.scss'
import Image from 'next/image'

export default function Login() {
	return (
		<div className={styles.modal}>
			<div className={styles.header}>Login</div>
			<div className={styles.subHeader}>
				Sign in to your account to get continue
			</div>

			<div className={styles.fieldWrapper}>
				<InputField
					type="email"
					iconUrl="/svg/at-the-rate.svg"
					label="Email address"
					placeholder="InumakiToge@jjk.jp"
				/>
			</div>

			<div className={styles.fieldWrapper}>
				<InputField type="password" iconUrl="/svg/key.svg" label="Password" />{' '}
			</div>

			<div className={styles.forgotPassword}>Forgot password?</div>

			<Button>
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
