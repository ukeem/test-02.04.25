import clsx from 'clsx';
import s from './index.module.scss';
import type { FC, ReactNode } from 'react';

interface ModalProps {
	isOpen?: boolean
	className?: string
	children: ReactNode
}

const Modal: FC<ModalProps> = ({ className, children, isOpen = false }) => {
	return (
		isOpen &&
		<div className={clsx(s.main, className)}>
			<div className={s.modal}>
				{children}
			</div>
		</div>
	);
}

export default Modal;