import clsx from 'clsx';
import s from './index.module.scss';
import type { FC } from 'react';

interface TextProps {
	value: string
	fontSize?: number
	fontWeight?: number
	color?: string
	className?: string;
}

const Text: FC<TextProps> = ({ value, fontSize = 16, fontWeight = 400, color = 'rgba(0, 0, 0, 0.8)', className }) => {
	return (
		<span
			className={clsx(s.main, className)}
			style={{ fontSize, fontWeight, color }}
		>
			{value}
		</span>
	);
}

export default Text;


