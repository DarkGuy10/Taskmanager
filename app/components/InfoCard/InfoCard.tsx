import { Status } from '@/typings'
import { labelText } from '@/utils'
import styles from './InfoCard.module.scss'

interface InfoCardProps {
	status: Status
	value: number
}

export default function InfoCard({ status, value }: InfoCardProps) {
	return (
		<div className={styles.wrapper} data-status={status}>
			<div className={styles.label}>{labelText(status)}</div>
			<div className={styles.value}>{value}</div>
		</div>
	)
}
