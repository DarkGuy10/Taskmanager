import { InfoCard } from '@/components'
import styles from './Information.module.scss'

export default function Information() {
	return (
		<div className={styles.wrapper}>
			<h4 className={styles.header}>Information</h4>
			<div className={styles.cardWrapper}>
				<InfoCard status={'backlog'} value={6} />
				<InfoCard status={'in-progress'} value={6} />
				<InfoCard status={'completed'} value={6} />
			</div>
		</div>
	)
}
