import { type FC, type ReactNode } from 'react';
import Item from '../../ui/Item';
import Flex from '../../ui/Flex';
import s from './index.module.scss'

interface CardProps {
	children: ReactNode
}

const Card: FC<CardProps> = ({ children }) => {

	return (
		<Item className={s.main}>
			<Flex>
				{children}
			</Flex>
		</Item>
	);
}

export default Card;


