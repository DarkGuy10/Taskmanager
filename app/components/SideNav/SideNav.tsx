import Image from 'next/image'
import styles from './SideNav.module.scss'
import { SideNavItem } from '@/components'

export default function SideNav() {
	return (
		<nav className={styles.sideNav}>
			<div className={styles.itemList}>
				<SideNavItem iconURL="/svg/dashboard.svg" alt="dashboard-icon" />
				<SideNavItem iconURL="/svg/pie-chart.svg" alt="pie-chart-icon" />
				<SideNavItem iconURL="/svg/folder.svg" alt="folder-icon" />
				<SideNavItem iconURL="/svg/clock.svg" alt="clock-icon" />
				<SideNavItem iconURL="/svg/calendar.svg" alt="calendar-icon" />
				<SideNavItem iconURL="/svg/team.svg" alt="team-icon" />
			</div>
		</nav>
	)
}
