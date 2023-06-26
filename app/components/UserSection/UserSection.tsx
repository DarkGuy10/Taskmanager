'use client'

import Image from 'next/image'
import styles from './UserSection.module.scss'
import { User } from '@/typings'
import Avatar from '@/components/Avatar/Avatar'

export default function UserSection({ user }: { user: User }) {
	const { username, displayName } = user

	return (
		<div className={styles.userSection}>
			<Avatar user={user} size={50} />
			<div className={styles.wrapper}>
				<div className={styles.displayName}>{displayName}</div>
				<div className={styles.username}>@{username}</div>
			</div>
			<Image
				src={'/svg/settings.svg'}
				alt="settings-icon"
				height={24}
				width={24}
				className={'icon'}
			/>
		</div>
	)
}
