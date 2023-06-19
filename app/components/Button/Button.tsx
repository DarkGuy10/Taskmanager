'use client'

import { MouseEventHandler } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
	children: React.ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, onClick }: ButtonProps) {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	)
}
