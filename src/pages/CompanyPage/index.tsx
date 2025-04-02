
import { useEffect, useState } from 'react';
import Flex from '../../components/ui/Flex'
import CompanyDetails from '../../components/widgets/CompanyDetails'
import HeadingItem from '../../components/widgets/HeadingItem'
import useAuth from '../../hooks/useAuth';
import { ICompany } from '../../types/company';
import { getCompany, getContract } from '../../service/api';
import { useNavigate, useParams } from 'react-router-dom';
import Contacts from '../../components/widgets/Contacts';
import { IContract } from '../../types/contract';
import Loader from '../../components/ui/Loader';

export default function CompanyPage() {
	const { id } = useParams()
	const navigate = useNavigate()

	if (!id) {
		navigate('/companies');
	}
	const [company, setCompany] = useState<ICompany>();
	const [contract, setContract] = useState<IContract>();

	const token = useAuth("USERNAME");

	useEffect(() => {
		const fetchCompany = async () => {
			try {
				const companyData = await getCompany(id!, token!);
				console.log(companyData);

				setCompany(companyData);

			} catch (error) {
				console.error("Ошибка при получении компании:", error);
			}
		};

		fetchCompany();
	}, [token, id]);

	useEffect(() => {

		const fetchContract = async () => {
			if (!company?.contactId) return
			try {
				const contractData = await getContract(company?.contactId, token!);
				console.log(contractData);

				setContract(contractData);

			} catch (error) {
				console.error("Ошибка при получении контракта:", error);
			}
		};
		fetchContract()
	}, [company?.contactId, token])

	if (!token || !company || !id || !contract) {
		return <Loader />;
	}

	return (
		<Flex gap={32}>
			<HeadingItem id={id} token={token} company={company} />
			<CompanyDetails id={id} token={token} company={company} />
			<Contacts token={token} contract={contract} />
		</Flex>
	)
}
