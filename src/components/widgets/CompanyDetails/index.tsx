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
import Select from '../../ui/Select'
import { ICompany } from '../../../types/company'
import { updateCompany } from '../../../service/api'

export default function CompanyDetails({ id, token, company }: { id: string, token: string, company: ICompany }) {

	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [businessEntity, setBusinessEntity] = useState<ICompany['businessEntity']>('');
	const [issue_date, setIssue_date] = useState<ICompany['contract']['issue_date']>('');
	const [no, setNo] = useState<ICompany['contract']['no']>('');
	const [type, setType] = useState<ICompany['type']>([]);

	useEffect(() => {

		setBusinessEntity(company.businessEntity)
		setIssue_date(company.contract.issue_date)
		setNo(company.contract.no)
		setType(formatCompanyType(company.type))

	}, [company]);

	const handleSave = async () => {
		setIsEdit(false);

		const updatedData = {
			businessEntity,
			contract: {
				issue_date,
				no
			},
			type
		};
		console.log(updatedData);

		try {
			const data = await updateCompany(id, updatedData, token);

			setBusinessEntity(data.businessEntity);
			setIssue_date(data.contract.issue_date);
			setNo(data.contract.no);
			setType(formatCompanyType(data.type));

		} catch (error) {
			console.error("Ошибка при обновлении компании:", error);
		}
	};


	const formatCompanyType = (arr: string[]): string[] => {
		return arr.map((str) => {
			return str
				.split('_')
				.map((word) => {
					return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
				})
				.join(' ');
		});
	};

	const formattedDate = (dateStr: string) => {
		const date = new Date(dateStr);
		return date.toLocaleDateString('ru-RU');
	};

	return (
		<Card>
			<Flex flexDirection='row' alignItems='center' justifyContent='space-between' width='100%'>
				<Text value='Company Details' fontSize={14} fontWeight={700} />
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

							<Text value='Agreement number:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Input
								value={no}
								onChange={setNo}
							/>
							<Text value='Date:' fontSize={13} fontWeight={400} className={s.textSecondTitle} />
							<Input
								type='date'
								value={issue_date}
								onChange={setIssue_date}
							/>
						</Flex>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemEditWrap}>
							<Text value='Business entity:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Select
								type='radio'
								defaultValue={businessEntity || 'Select business entity'}
								onChange={setBusinessEntity}
								options={['Partnership', 'Sole Proprietorship', 'Limited Liability Company']}
							/>
						</Flex>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemEditWrap}>
							<Text value='Company type:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Select
								type='checkbox'
								defaultValue={type.length ? type : 'Select company type'}
								onMultiChange={setType}
								options={company?.type ? formatCompanyType(company.type) : []}
							/>
						</Flex>
					</Flex>
				) : (
					<Flex gap={0} width='100%'>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemWrap}>
							<Text value='Agreement:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Text value={`${no} / ${formattedDate(issue_date)}`} fontSize={14} fontWeight={400} className={s.textDescr} />
						</Flex>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemWrap}>
							<Text value='Business entity:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Text value={businessEntity || 'Empty'} fontSize={14} fontWeight={400} className={s.textDescr} />
						</Flex>
						<Flex flexDirection='row' alignItems='center' width='100%' gap={12} className={s.itemWrap}>
							<Text value='Company type:' fontSize={13} fontWeight={400} className={s.textTitle} />
							<Text value={type.join(', ') || 'Empty'} fontSize={14} fontWeight={400} className={s.textDescr} />
						</Flex>
					</Flex>
				)
			}
		</Card>
	)
}
