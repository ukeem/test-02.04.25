import clsx from 'clsx';
import s from './index.module.scss';
import type { FC, ReactNode } from 'react';

interface ItemProps {
	className?: string
	children: ReactNode
}

const Item: FC<ItemProps> = ({ className, children }) => {
	return (
		<div className={clsx(s.main, className)}>
			{children}
		</div>
	);
}

export default Item;

