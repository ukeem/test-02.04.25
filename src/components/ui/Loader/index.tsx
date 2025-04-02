import s from './index.module.scss'

export default function Loader() {
	return (
		<div className={s.main}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" >
				<g>
					<circle r="20" fill="#6d4aff" cy="50" cx="30">
						<animate begin="-0.5617977528089888s" values="30;70;30" keyTimes="0;0.5;1" dur="1.1235955056179776s" repeatCount="indefinite" attributeName="cx"></animate>
					</circle>
					<circle r="20" fill="#3b3b3b" cy="50" cx="70">
						<animate begin="0s" values="30;70;30" keyTimes="0;0.5;1" dur="1.1235955056179776s" repeatCount="indefinite" attributeName="cx"></animate>
					</circle>
					<circle r="20" fill="#6d4aff" cy="50" cx="30">
						<animate begin="-0.5617977528089888s" values="30;70;30" keyTimes="0;0.5;1" dur="1.1235955056179776s" repeatCount="indefinite" attributeName="cx"></animate>
						<animate repeatCount="indefinite" dur="1.1235955056179776s" keyTimes="0;0.499;0.5;1" calcMode="discrete" values="0;0;1;1" attributeName="fill-opacity"></animate>
					</circle>
				</g>
			</svg>
		</div>
	)
}
