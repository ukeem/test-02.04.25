import type { FC } from 'react';

interface SelectArrowProps {
	className?: string
	width?: number
	height?: number
}

const SelectArrow: FC<SelectArrowProps> = ({ className, width = 16, height = 16 }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g opacity="0.8">
				<path d="M5 7.5L10 12.5L15 7.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</g>
		</svg>
	);
}

export default SelectArrow;

