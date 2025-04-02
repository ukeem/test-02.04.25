import { NavLink } from 'react-router-dom'
import s from './index.module.scss'
import Button from '../../ui/Button'
import Organization from '../../icons/Organization'
import Search from '../../icons/Search'

export default function Nav() {
	return (
		<nav className={s.main}>
			<NavLink
				to="/companies"
				className={({ isActive }) =>
					isActive ? s.active : ''
				}
			>
				<Button
					type='side'
				>
					<Organization />
				</Button>
			</NavLink>
			<NavLink
				to="/search"
				className={({ isActive }) =>
					isActive ? s.active : ''
				}
			>
				<Button
					type='side'
				>
					<Search />
				</Button>
			</NavLink>
		</nav>
	)
}
