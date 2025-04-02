import clsx from 'clsx';
import SelectArrow from '../../icons/SelectArrow';
import s from './index.module.scss';
import { useState, type FC } from 'react';
import CheckedLabel from '../../icons/CheckedLabel';

interface SelectProps {
	type: 'radio' | 'checkbox';
	defaultValue: string | string[];
	options: string[];
	className?: string;
	onChange?: (value: string) => void;
	onMultiChange?: (value: string[]) => void;
}

const Select: FC<SelectProps> = ({ type, defaultValue, options = [], className, onChange, onMultiChange }) => {
	const [selected, setSelected] = useState(defaultValue);
	const [multiSelected, setMultiSelected] = useState<string[]>([]);
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	const handleSelect = (option: string) => {
		setSelected(option);
		setTimeout(() => {
			onChange?.(option);
			setIsOpen(false);
		}, 0);
	};


	const toggleOption = (option: string) => {
		setMultiSelected((prev) => {
			const newSelection = prev.includes(option)
				? prev.filter((item) => item !== option)
				: [...prev, option];

			setTimeout(() => {
				onMultiChange?.(newSelection);
			}, 0);

			return newSelection;
		});
	};

	return (
		<div
			className={clsx(s.main, className)}
		>
			<div
				onClick={handleToggleDropdown}
				className={clsx(s.select, { [s.open]: isOpen })}
			>
				<span>{type === 'radio' ? selected : [...multiSelected].join(',  ') || [defaultValue].join(',  ')}</span>
				<SelectArrow />
			</div>
			<div className={clsx(s.dropdown, s[type], { [s.open]: isOpen })}>
				{options.map((option, index) =>
					type === 'radio' ? (
						<div
							key={`${index}_${option}`}
							className={s.option}
							onClick={() => handleSelect(option)}
						>
							{option}
						</div>
					) : (
						<div key={`${index}_${option}`} className={clsx(s.option, s.checkbox, { [s.checked]: multiSelected.includes(option) })}>
							<input
								type="checkbox"
								id={option}
								checked={multiSelected.includes(option)}
								onChange={() => toggleOption(option)}
							/>
							<label htmlFor={option}>
								<span className={clsx({ [s.checked]: multiSelected.includes(option) })}><CheckedLabel /></span>
								<span>{option}</span>
							</label>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default Select;
