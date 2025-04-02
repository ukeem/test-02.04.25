import type { FC } from 'react';

interface ArrowLinkProps {
	className?: string
	width?: number
	height?: number
}

const ArrowLink: FC<ArrowLinkProps> = ({ className, width = 20, height = 20 }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_13785_1592)">
				<path d="M7 16L13 10L7 4" stroke="#2C4C41" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</g>
			<defs>
				<clipPath id="clip0_13785_1592">
					<rect width="20" height="20" fill="white" transform="matrix(-1 0 0 -1 20 20)" />
				</clipPath>
			</defs>
		</svg>
	);
}

export default ArrowLink;

