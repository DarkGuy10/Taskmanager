'use client'
import { useState, type Dispatch, type SetStateAction } from 'react'
import styles from './InputField.module.scss'
import Image from 'next/image'

interface InputFieldProps {
	type: 'text' | 'password' | 'email'
	setState?: Dispatch<SetStateAction<string>>
	label?: string
	placeholder?: string
	validator?: (value: string) => boolean
	errorMessage?: string
	iconUrl?: string
}

export default function InputField({
	type = 'text',
	setState,
	label,
	placeholder,
	validator,
	errorMessage,
	iconUrl,
}: InputFieldProps) {
	const [valid, setValidity] = useState(true)

	return (
		<div className={styles.wrapper}>
			<div className={styles.textWrapper}>
				{label && <div className={styles.label}>{label}</div>}

				{validator && (
					<div className={styles.errorMessage}>
						{!valid && (errorMessage ?? 'Invalid input')}
					</div>
				)}
			</div>

			<div
				className={`${styles.fieldContainer} ${!valid ? styles.invalid : ''}`}
			>
				{iconUrl && (
					<div className={styles.iconContainer}>
						<Image
							src={iconUrl}
							alt="field-icon"
							height={24}
							width={24}
							className={styles.icon}
						/>
					</div>
				)}

				<input
					type={type}
					data-icon={!!iconUrl}
					className={styles.field}
					placeholder={placeholder}
					onChange={event => {
						if (setState) setState(event.target.value)
						if (validator) setValidity(validator(event.target.value))
					}}
				/>
			</div>
		</div>
	)
}
