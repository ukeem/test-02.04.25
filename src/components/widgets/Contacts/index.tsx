import { useEffect, useState } from 'react'
import Card from '../Card'
import s from './index.module.scss'
import Flex from '../../ui/Flex'
import Text from '../../ui/Text'
import Button from '../../ui/Button'
import SaveChanges from '../../icons/SaveChanges'
import Cancel from '../../icons/Cancel'
import Edit from '../../icons/Edit'
import Input from '../../ui/Input'
import { updateContract } from '../../../service/api'
import { IContract } from '../../../types/contract'

export default function Contacts({ token, contract }: { token: string, contract: IContract }) {

	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [name, setName] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	useEffect(() => {

		setName(`${contract.firstname} ${contract.lastname}`)
		setPhone(contract.phone)
		setEmail(contract.email)

	}, [contract]);

	const handleSave = async () => {
		setIsEdit(false);

		const updatedData = {
			name,
			phone,
			email,
		};
		console.log(updatedData);
		console.log(contract.id);
		console.log(token);

		try {
			const data = await updateContract(contract.id, updatedData, token);

			setName(`${data.firstname} ${data.lastname}`)
			setPhone(data.phone)
			setEmail(data.email)

		} catch (error) {
			console.error("Ошибка при обновлении контракта:", error);
		}
	};

	return (
		<Card>
			<Flex flexDirection='row' alignItems='center' justifyContent='space-between' width='100%'>
				<Text value='Contacts' fontSize={14} fontWeight={700} />
				{isEdit ?
					(
						<Flex flexDirection='row' gap={12}>
							<Button type='flattened' text='Save changes' onClick={handleSave} >
								<SaveChanges className={s.stroke} />
							</Button>
							<Button type='flattened' text='Cancel' onClick={() => setIsEdit(false)}>
								<Cancel className={s.stroke} />
							</Button>
						</Flex>
					) : (
						<Button type='flattened' text='Edit' onClick={() => setIsEdit(true)}>
							<Edit width={16} height={16} className={s.stroke} />
						</Button>
					)
				}
			</Flex>
			{isEdit ?
				(
					<Flex gap={12} width='100%'>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemEditWrap}>

							<Text value='Responsible person:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Input
								value={name}
								onChange={setName}
							/>
						</Flex>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemEditWrap}>
							<Text value='Phone number:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Input
								value={phone}
								onChange={setPhone}
							/>
						</Flex>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemEditWrap}>
							<Text value='E-mail:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Input
								value={email}
								onChange={setEmail}
							/>
						</Flex>
					</Flex>
				) : (
					<Flex gap={0} width='100%'>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemWrap}>
							<Text value='Responsible person:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Text value={name} fontSize={14} fontWeight={400} className={s.textDescr} />
						</Flex>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemWrap}>
							<Text value='Phone number:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Text value={phone} fontSize={14} fontWeight={400} className={s.textDescr} />
						</Flex>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemWrap}>
							<Text value='E-mail:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Text value={email} fontSize={14} fontWeight={400} className={s.textDescr} />
						</Flex>
					</Flex>
				)
			}
		</Card>
	)
}
