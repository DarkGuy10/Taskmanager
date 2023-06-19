import Image from 'next/image'
import styles from './SideNavItem.module.scss'

interface SideNavItemProps {
	iconURL: string
	alt: string
}

export default function SideNavItem({ iconURL, alt }: SideNavItemProps) {
	return (
		<div className={styles.wrapper}>
			<Image
				src={iconURL}
				alt={alt}
				height={28}
				width={28}
				className={styles.icon}
			/>
		</div>
	)
}
