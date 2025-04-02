import clsx from 'clsx';
import s from './index.module.scss';
import type { FC } from 'react';

interface HeadingProps {
	type: 'h1' | 'h2' | 'h3'
	value: string
	fontSize: number
	className?: string
}

const Heading: FC<HeadingProps> = ({ className, value, type, fontSize }) => {

	switch (type) {
		case 'h1':
			return <h1
				className={clsx(s.main, className)}
				style={{ fontSize }}
			>
				{value}
			</h1>
		case 'h2':
			return <h2
				className={clsx(s.main, className)}
				style={{ fontSize }}
			>
				{value}
			</h2>
		case 'h3':
			return <h3
				className={clsx(s.main, className)}
				style={{ fontSize }}
			>
				{value}
			</h3>
		default:
			return <h4
				className={clsx(s.main, className)}
				style={{ fontSize }}
			>
				{value}
			</h4>
	}
}

export default Heading;

