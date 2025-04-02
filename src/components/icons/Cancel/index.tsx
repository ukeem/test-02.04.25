import type { FC } from 'react';

interface CancelProps {
	className?: string
	width?: number
	height?: number
}

const Cancel: FC<CancelProps> = ({ className, width = 16, height = 16 }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M12.5 3.5L3.5 12.5" stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M12.5 12.5L3.5 3.5" stroke="#3B3B3B" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default Cancel;

