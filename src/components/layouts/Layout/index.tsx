import type { FC, ReactNode } from 'react';
import s from './index.module.scss';
import Header from '../Header';
import Main from '../Main';
import Nav from '../Nav';
import Aside from '../Aside';

interface LayoutProps {
	children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header>
				<Nav />
			</Header>
			<Aside />
			<Main className={s.main}>
				{children}
			</Main>
		</>
	);
}

export default Layout;



