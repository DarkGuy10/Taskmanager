import Image from 'next/image'
import styles from './SideNav.module.scss'
import SideNavItem from '@/components/SideNavItem/SideNavItem'

export default function SideNav() {
	return (
		<nav className={styles.sideNav}>
			<div className={styles.itemList}>
				<SideNavItem iconURL="/svg/dashboard.svg" alt="dashboard-icon" />
				<SideNavItem iconURL="/svg/pie-chart.svg" alt="pie-chart-icon" />
			</div>
		</nav>
	)
}
