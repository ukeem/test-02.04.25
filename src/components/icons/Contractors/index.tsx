import type { FC } from 'react';

interface ContractorsProps {
	className?: string
	width?: number
	height?: number
}

const Contractors: FC<ContractorsProps> = ({ className, width = 16, height = 16 }) => {
	return (
		<svg className={className} width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9.33326 3.70663C10.5838 4.00724 11.697 4.71962 12.4938 5.72925C13.2906 6.73888 13.7248 7.98711 13.7266 9.2733V10.5466M2.27326 10.5466V9.2733C2.27148 7.9862 2.70435 6.7362 3.50174 5.72585C4.29913 4.71551 5.41431 4.004 6.66659 3.70663" stroke="#3B3B3B" strokeWidth="1.5" strokeMiterlimit="10" />
			<path d="M13.7267 10.5467H2.27333C1.57009 10.5467 1 11.1168 1 11.82C1 12.5233 1.57009 13.0933 2.27333 13.0933H13.7267C14.4299 13.0933 15 12.5233 15 11.82C15 11.1168 14.4299 10.5467 13.7267 10.5467Z" stroke="#3B3B3B" strokeWidth="1.5" strokeMiterlimit="10" />
			<path d="M9.90672 10.5466H6.09338L6.66588 3.64056C6.70026 3.22577 7.04694 2.90665 7.46314 2.90665H8.53696C8.95316 2.90665 9.29984 3.22577 9.33422 3.64056L9.90672 10.5466Z" stroke="#3B3B3B" strokeWidth="1.5" strokeMiterlimit="10" />
		</svg>
	);
}

export default Contractors;

