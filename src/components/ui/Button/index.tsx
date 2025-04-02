import { ReactNode, type FC } from 'react';
import clsx from "clsx";
import s from './index.module.scss'

interface ButtonProps {
	text?: string
	type: 'filled' | 'outline' | 'flattened' | 'icon' | 'side'
	children?: ReactNode
	onClick?: () => void
	className?: string
}

const Button: FC<ButtonProps> = ({ text, type, children = '', onClick, className }) => {

	return (
		<button
			className={clsx(s.main, s[type], className, { [s.withoutText]: !text })}
			onClick={onClick}
		>
			{children}
			{text && type !== 'icon' && <span>{text}</span>}
		</button>
	);
}

export default Button;
