import type { FC } from 'react';

interface SaveChangesProps {
	className?: string
	width?: number
	height?: number
}

const SaveChanges: FC<SaveChangesProps> = ({ className, width = 16, height = 16 }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13.5 4.50031L6.5 11.5L3 8.00031" stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default SaveChanges;

