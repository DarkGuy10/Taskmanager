'use client'

import Image from 'next/image'
import styles from './UserSection.module.scss'

interface UserSectionProps {
	username: string
	displayName: string
	avatarURL: string
}

export default function UserSection({
	username,
	displayName,
	avatarURL,
}: UserSectionProps) {
	return (
		<div className={styles.userSection}>
			<Image
				src={avatarURL}
				alt={`${username}'s avatar`}
				height={50}
				width={50}
				className={styles.avatarImage}
			/>
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
