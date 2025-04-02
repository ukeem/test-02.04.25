import type { FC, ReactNode } from 'react';
import Logo from '../../icons/Logo';
import s from './index.module.scss'
import Flex from '../../ui/Flex';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
	children: ReactNode
}

const Header: FC<HeaderProps> = ({ children }) => {
	return (
		<>
			<header className={s.main}>
				<Flex gap={20}>
					<NavLink
						to="/"
						end
					>
						<Logo />
					</NavLink>
					{children}
				</Flex>
			</header>
		</>
	);
}

export default Header;



