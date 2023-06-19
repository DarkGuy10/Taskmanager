'use client'
import Image from 'next/image'
import styles from './NotificationBell.module.scss'

export default function NotificationBell() {
	return (
		<div className={styles.notificationBell}>
			<Image
				src={'/svg/bell.svg'}
				alt="notification-bell-icon"
				height={28}
				width={28}
				className="icon"
			/>
		</div>
	)
}
