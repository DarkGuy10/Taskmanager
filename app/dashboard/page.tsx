import SideNav from '@/components/SideNav/SideNav'
import StickyHeader from '@/components/StickyHeader/StickyHeader'
import styles from '@/styles/dashboard.module.scss'

export default function Dashboard() {
	return (
		<div className={styles.wrapper}>
			<SideNav />
			<div className={styles.layerContainer}>
				<StickyHeader />
				<main className={styles.content}></main>
			</div>
		</div>
	)
}
