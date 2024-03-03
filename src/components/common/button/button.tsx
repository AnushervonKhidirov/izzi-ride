import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import Link from 'next/link'

import type { Url } from 'next/dist/shared/lib/router/router'

import styles from './button.module.css'

const Button: FC<ButtonType> = ({ children, href, type, title, className }) => {
	return href ? (
		<Link href={href} title={title} className={`${styles.button} ${className}`}>
			{children || title}
		</Link>
	) : (
		<button type={type} className={`${styles.button} ${className}`}>
			{children || title}
		</button>
	)
}

type ButtonType = {
	href?: Url
	title: string
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
	children?: ReactNode
	className?: string
}

export default Button
