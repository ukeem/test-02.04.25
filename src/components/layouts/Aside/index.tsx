import { NavLink } from 'react-router-dom'
import s from './index.module.scss'
import Button from '../../ui/Button'
import Organization from '../../icons/Organization'
import Flex from '../../ui/Flex'
import Text from '../../ui/Text'
import Contractors from '../../icons/Contractors'

export default function Aside() {

	return (
		<aside className={s.main}>
			<Flex gap={0}>
				<Text value='Oak Tree Cemetery' fontSize={14} fontWeight={700} />
				<Text value='Process Manager' fontSize={11} fontWeight={400} />
			</Flex>

			<span style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', height: 0 }}></span>
			<Flex gap={12}>
				<NavLink
					to="/companies"
					className={({ isActive }) => (isActive ? s.active : s.notActive)}
				>
					{({ isActive }) => (
						<Button
							type={isActive ? 'filled' : 'outline'}
							text="Organizations"
							className={s.btn}
						>
							<Organization width={16} height={16} className={isActive ? s.stroke : ''} />
						</Button>
					)}
				</NavLink>

				<NavLink
					to="/contractors"
					className={({ isActive }) => (isActive ? s.active : s.notActive)}
				>
					{({ isActive }) => (
						<Button
							type={isActive ? 'filled' : 'outline'}
							text="Contractors"
							className={s.btn}
						>
							<Contractors width={16} height={16} className={isActive ? '' : s.stroke} />
						</Button>
					)}
				</NavLink>


			</Flex>

		</aside>
	)
}
