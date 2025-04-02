import clsx from 'clsx';
import s from './index.module.scss';
import type { ChangeEvent, FC } from 'react';

interface InputProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	type?: 'text' | 'tel' | 'date' //Другие типы
	className?: string
}

const Input: FC<InputProps> = ({ value, onChange, placeholder = '', type = 'text', className }) => {

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<input
			type={type}
			className={clsx(s.main, className)}
			value={value}
			onChange={handleChange}
			placeholder={placeholder}
		/>
	);
}

export default Input;
