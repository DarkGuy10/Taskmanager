import Information from '@/components/Information/Information'
import SideNav from '@/components/SideNav/SideNav'
import StickyHeader from '@/components/StickyHeader/StickyHeader'
import styles from '@/styles/dashboard.module.scss'

export default function Dashboard() {
	return (
		<div className={styles.wrapper}>
			<SideNav />
			<div className={styles.layerContainer}>
				<StickyHeader />
				<div className={styles.content}>
					<main className={styles.main}>
						<Information />
					</main>
					<aside className={styles.aside}></aside>
				</div>
			</div>
		</div>
	)
}
