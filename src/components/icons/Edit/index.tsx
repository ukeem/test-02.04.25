import type { FC } from 'react';

interface EditProps {
	className?: string
	width?: number
	height?: number
}

const Edit: FC<EditProps> = ({ className, width = 20, height = 20 }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M7.24112 16.875H3.75C3.58424 16.875 3.42527 16.8092 3.30806 16.6919C3.19085 16.5747 3.125 16.4158 3.125 16.25V12.7589C3.125 12.6768 3.14117 12.5955 3.17258 12.5197C3.20398 12.4439 3.25002 12.375 3.30806 12.3169L12.6831 2.94195C12.8003 2.82474 12.9592 2.75889 13.125 2.75889C13.2908 2.75889 13.4497 2.82474 13.5669 2.94195L17.0581 6.43306C17.1753 6.55027 17.2411 6.70924 17.2411 6.875C17.2411 7.04076 17.1753 7.19974 17.0581 7.31695L7.68306 16.6919C7.62502 16.75 7.55612 16.796 7.48029 16.8274C7.40447 16.8588 7.32319 16.875 7.24112 16.875Z" stroke="#3B3B3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M10.625 5L15 9.375" stroke="#3B3B3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M7.46011 16.8351L3.16479 12.5397" stroke="#3B3B3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default Edit;

