import { NavLink } from 'react-router-dom'
import Text from '../../components/ui/Text'
import Flex from '../../components/ui/Flex'
import ArrowLink from '../../components/icons/ArrowLink'

export default function OrganizationsPage() {
	return (
		<NavLink
			to="/companies/12"
		>
			<Flex flexDirection='row' gap={20} width='auto' alignItems='center'>
				<Text
					value="Eternal Rest Funeral Home"
					fontSize={24}
					fontWeight={700}

				/>
				<ArrowLink />
			</Flex>
		</NavLink>
	)
}
