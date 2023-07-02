import styles from './StickyHeader.module.scss'
import Image from 'next/image'
import { NotificationBell, Button, UserSection, SearchBar } from '@/components'
import { mockUser } from '@/utils'

export default function StickyHeader() {
	return (
		<div className={styles.stickyHeader}>
			<div className={styles.layerContainer}>
				<div className={`${styles.headerText} ${styles.active}`}>
					My Projects
				</div>
				<div className={styles.headerText}>Schedule</div>
				<div className={styles.headerText}>Team</div>
				<SearchBar />
			</div>
			<NotificationBell />
			<Button>
				Add Task
				<Image
					src={'/svg/plus.svg'}
					alt={'icon-plus'}
					height={16}
					width={16}
					style={{ marginLeft: '10px' }}
				/>
			</Button>
			<UserSection user={mockUser()} />
		</div>
	)
}
