import type { FC } from 'react';

interface CheckedLabelProps {
	className?: string
	width?: number
	height?: number
}

const CheckedLabel: FC<CheckedLabelProps> = ({ className, width = 16, height = 16 }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_13712_478)">
				<path fillRule="evenodd" clipRule="evenodd" d="M13.9242 4.07608C14.1585 4.31039 14.1585 4.69029 13.9242 4.9246L6.92416 11.9243C6.68985 12.1586 6.30997 12.1586 6.07566 11.9243L2.57566 8.42461C2.34133 8.19031 2.34132 7.81041 2.57562 7.57608C2.80992 7.34176 3.18982 7.34174 3.42415 7.57605L6.49989 10.6515L13.0756 4.07606C13.31 3.84175 13.6899 3.84176 13.9242 4.07608Z" fill="black" fillOpacity="0.8" />
			</g>
		</svg>
	);
}

export default CheckedLabel;

