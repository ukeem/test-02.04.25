import { useState } from 'react';
import s from './index.module.scss'
import Flex from '../../ui/Flex';
import Button from '../../ui/Button';
import Edit from '../../icons/Edit';
import Heading from '../../ui/Heading';
import Trash from '../../icons/Trash';
import Modal from '../../ui/Modal';
import Text from '../../ui/Text';
import Input from '../../ui/Input';
import { useNavigate } from 'react-router-dom';
import Back from '../../icons/Back';
import { ICompany } from '../../../types/company';
import { deleteCompany, updateCompany } from '../../../service/api';

const HeadingItem = ({ id, token, company }: { id: string, token: string, company: ICompany }) => {

	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [isDelete, setIsDelete] = useState<boolean>(false)
	const [value, setValue] = useState(company.name)
	const [text, setText] = useState(value)
	const navigate = useNavigate();

	const handleSaveEdit = async () => {

		const updatedData = {
			name: text
		};
		console.log(updatedData);

		try {
			const data = await updateCompany(id, updatedData, token);

			setValue(data.name)

		} catch (error) {
			console.error("Ошибка при обновлении компании:", error);
		}

		setTimeout(() => {
			setIsEdit(false)
		}, 0);
	}

	const handleDeleteCompany = async () => {
		try {
			await deleteCompany(id, token);

			navigate('/companies');

		} catch (error) {
			console.error('Ошибка при удалении компании:', error);
		}

		setIsDelete(false);
	};


	return (
		<>
			<Flex
				className={s.main}
				flexDirection='row'
				alignItems='center'
				justifyContent='space-between'
				width='100%'
			>
				<Heading type='h1' fontSize={28} value={value} />
				<Flex
					flexDirection='row'
					gap={0}
					justifyContent='end'
					className={s.btnWrap}
				>
					<Button type='icon' text='Edit' onClick={() => setIsEdit(true)}>
						<Edit width={20} height={20} className={s.stroke} />
					</Button>
					<Button type='icon' text='Edit' onClick={() => setIsDelete(true)}>
						<Trash className={s.stroke} />
					</Button>
				</Flex>
				<Button
					type='icon'
					onClick={() => navigate('/companies')}
					className={s.back}
				>
					<Back className={s.stroke} />
				</Button>
			</Flex>
			<Modal isOpen={isEdit}>
				<Flex gap={24}>
					<Text value="Specify the Organization's name" fontSize={14} fontWeight={700} />
					<Input value={text} onChange={setText} />
					<Flex flexDirection='row'>
						<Button type='outline' text='Cancel' onClick={() => setIsEdit(false)} />
						<Button type='filled' text='Save changes' onClick={handleSaveEdit} />
					</Flex>
				</Flex>
			</Modal>
			<Modal isOpen={isDelete}>
				<Flex gap={24}>
					<Text value="Remove the Organization?" fontSize={14} fontWeight={700} className={s.titleConfirmDelete} />
					<Text value="Are you sure you want to remove this Organozation?" fontSize={13} fontWeight={400} />
					<Flex flexDirection='row'>
						<Button type='outline' text='No' onClick={() => setIsDelete(false)} />
						<Button type='filled' text='Yes, remove' onClick={handleDeleteCompany} />
					</Flex>
				</Flex>
			</Modal>
		</>
	);
}

export default HeadingItem;


