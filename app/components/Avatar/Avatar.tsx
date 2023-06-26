import Image from 'next/image'
import styles from './Avatar.module.scss'
import { User } from '@/typings'

interface AvatarProps {
	user: User
	size: number
}

export default function Avatar({ user, size }: AvatarProps) {
	return (
		<Image
			src={user.avatarURL}
			alt={`${user.username}'s avatar`}
			height={size}
			width={size}
			className={styles.avatar}
		/>
	)
}
