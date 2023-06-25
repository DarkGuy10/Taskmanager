import InfoCard from '@/components/InfoCard/InfoCard'
import styles from './Information.module.scss'

export default function Information() {
	return (
		<div className={styles.wrapper}>
			<h4 className={styles.header}>Information</h4>
			<div className={styles.cardWrapper}>
				<InfoCard type={'backlog'} value={6} />
				<InfoCard type={'in-progress'} value={6} />
				<InfoCard type={'completed'} value={6} />
			</div>
		</div>
	)
}
