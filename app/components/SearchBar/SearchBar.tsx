'use client'
import { useState } from 'react'
import styles from './SearchBar.module.scss'
import InputField from '@/components/InputField/InputField'

export default function SearchBar() {
	const [value, setValue] = useState('')
	return (
		<div className={styles.wrapper}>
			<InputField
				type="text"
				iconUrl="/svg/search.svg"
				placeholder="Search project, name..."
				setState={setValue}
			/>
		</div>
	)
}
