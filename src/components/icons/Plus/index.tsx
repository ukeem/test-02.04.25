import type { FC } from 'react';

interface PlusProps {
	className?: string
	width?: number
	height?: number
}

const Plus: FC<PlusProps> = ({ className, width = 16, height = 16 }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g opacity="0.9">
				<path fillRule="evenodd" clipRule="evenodd" d="M1.8999 7.99999C1.8999 7.66862 2.16853 7.39999 2.4999 7.39999H13.4999C13.8313 7.39999 14.0999 7.66862 14.0999 7.99999C14.0999 8.33136 13.8313 8.59999 13.4999 8.59999H2.4999C2.16853 8.59999 1.8999 8.33136 1.8999 7.99999Z" fill="white" />
				<path fillRule="evenodd" clipRule="evenodd" d="M7.9999 1.89999C8.33127 1.89999 8.5999 2.16862 8.5999 2.49999V13.5C8.5999 13.8314 8.33127 14.1 7.9999 14.1C7.66853 14.1 7.3999 13.8314 7.3999 13.5V2.49999C7.3999 2.16862 7.66853 1.89999 7.9999 1.89999Z" fill="white" />
			</g>
		</svg>
	);
}

export default Plus;

