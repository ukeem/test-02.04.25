import type { FC } from 'react';

interface SearchProps {
	className?: string
	width?: number
	height?: number
}

const Search: FC<SearchProps> = ({ className, width = 20, height = 20 }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9.0625 15.625C12.6869 15.625 15.625 12.6869 15.625 9.0625C15.625 5.43813 12.6869 2.5 9.0625 2.5C5.43813 2.5 2.5 5.43813 2.5 9.0625C2.5 12.6869 5.43813 15.625 9.0625 15.625Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M13.7026 13.7032L17.4996 17.5001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export default Search;

