'use client'
import Image from 'next/image'
import styles from './SearchBar.module.scss'

export default function SearchBar() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.iconContainer}>
				<Image
					src={'/svg/search.svg'}
					alt="search-icon"
					height={24}
					width={24}
					className={styles.searchIcon}
				/>
			</div>
			<input
				type="text"
				className={styles.searchField}
				placeholder="Search project, name..."
			/>
		</div>
	)
}
