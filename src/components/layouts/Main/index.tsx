import type { FC, ReactNode } from 'react';
import s from './index.module.scss'
import Container from '../../ui/Container';
import clsx from 'clsx';
import Section from '../../ui/Section';

interface MainProps {
	children: ReactNode
	className?: string
}

const Main: FC<MainProps> = ({ children, className }) => {
	return (
		<main className={clsx(s.main, className)}>
			<Section>
				<Container>
					{children}
				</Container>
			</Section>
		</main>
	);
}

export default Main;



