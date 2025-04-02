import type { FC } from 'react';

interface BackProps {
	className?: string
	width?: number
	height?: number
}

const Back: FC<BackProps> = ({ className, width = 20, height = 20 }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_13712_507)">
				<path d="M13 4L7 10L13 16" stroke="#3B3B3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</g>
			<defs>
				<clipPath id="clip0_13712_507">
					<rect width="20" height="20" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

export default Back;

