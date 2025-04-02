import clsx from 'clsx';
import s from './index.module.scss';
import type { FC, ReactNode } from 'react';

interface ContainerProps {
	className?: string
	children: ReactNode
}

const Container: FC<ContainerProps> = ({ className, children }) => {
	return (
		<div
			className={clsx(s.main, className)}
		>
			{children}
		</div>
	);
}

export default Container;