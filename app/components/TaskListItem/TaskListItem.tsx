import { Task } from '@/typings'
import styles from './TaskListItem.module.scss'
import Avatar from '@/components/Avatar/Avatar'
import Image from 'next/image'

export default function TaskListItem({ task }: { task: Task }) {
	const { id, title, description, creater, status, labels } = task
	return (
		<div className={styles.wrapper} data-id={id} data-status={status}>
			<div className={styles.labelContainer}>
				{labels.map((label, index) => (
					<span key={index} className={styles.label}>
						{label}
					</span>
				))}
			</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.description}>{description}</div>
			<div className={styles.timestamp}>
				<Image
					src={'/svg/calendar-alt.svg'}
					alt="calendar-icon"
					height={14}
					width={14}
				/>
				<span> - </span>
			</div>
			<div className={styles.avatarContainer}>
				<Avatar user={creater} size={24} />
			</div>
		</div>
	)
}
