import styles from './InfoCard.module.scss'

interface InfoCardProps {
	type: 'backlog' | 'in-progress' | 'completed'
	value: number
}

export default function InfoCard({ type, value }: InfoCardProps) {
	const labelText = () => {
		switch (type) {
			case 'backlog':
				return 'Backlog'
			case 'in-progress':
				return 'In Progress'
			case 'completed':
				return 'Completed'
		}
	}
	return (
		<div className={styles.wrapper} data-type={type}>
			<div className={styles.label}>{labelText()}</div>
			<div className={styles.value}>{value}</div>
		</div>
	)
}
