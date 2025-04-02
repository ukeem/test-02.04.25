import clsx from 'clsx';
import s from './index.module.scss';
import type { FC, ReactNode } from 'react';

interface FlexProps {
	flexDirection?: 'row' | 'column'
	justifyContent?: 'start' | 'center' | 'end' | 'space-between'
	alignItems?: 'start' | 'center' | 'end'
	gap?: number
	className?: string
	width?: string
	children: ReactNode
}

const Flex: FC<FlexProps> = ({ className, children, flexDirection = 'column', gap = 16, justifyContent = 'start', alignItems = 'start', width = 'auto' }) => {
	return (
		<div
			style={{ flexDirection, gap, justifyContent, alignItems, width }}
			className={clsx(s.main, className)}
		>
			{children}
		</div>
	);
}

export default Flex;

