import clsx from 'clsx';
import s from './index.module.scss';
import type { FC, ReactNode } from 'react';

interface SectionProps {
	className?: string
	children: ReactNode
}

const Section: FC<SectionProps> = ({ className, children }) => {
	return (
		<section
			className={clsx(s.main, className)}
		>
			{children}
		</section>
	);
}

export default Section;


