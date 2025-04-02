import { useEffect, useState } from 'react'
import Card from '../Card'
import s from './index.module.scss'
import Flex from '../../ui/Flex'
import Text from '../../ui/Text'
import Button from '../../ui/Button'
import Edit from '../../icons/Edit'
import { deleteCompanyImage, uploadCompanyImage } from '../../../service/api'
import { ICompany } from '../../../types/company'
import Trash from '../../icons/Trash'
import AddPhoto from '../../icons/AddPhoto'

export default function Photos({ token, company }: { token: string, company: ICompany }) {

	const [photos, setPhotos] = useState<ICompany['photos']>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {

		setPhotos(company.photos)

	}, [company]);

	const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]; // Безопасная проверка
		if (!file) {
			console.log("Файл не выбран");
			return;
		}

		// const formData = new FormData();
		// formData.append("file", file);

		setLoading(true);
		try {
			const response = await uploadCompanyImage(company.id, file, token)

			setPhotos([...photos, response]);
		} catch (error) {
			console.error("Ошибка при загрузке фото:", error);
		} finally {
			setLoading(false);
		}
	};

	const deletePhoto = async (photoName: string) => {
		try {
			await deleteCompanyImage(company.id, photoName, token)
			setPhotos(photos.filter(photo => photo.name !== photoName));
		} catch (error) {
			console.error("Ошибка при удалении фото:", error);
		}
	};

	const handleFileClick = () => {
		document.getElementById('upload')?.click();
	};
	return (
		<Card>
			<Flex flexDirection='row' alignItems='center' justifyContent='space-between' width='100%'>
				<Text value='Photos' fontSize={14} fontWeight={700} />
				<label htmlFor="upload">
					<Button type='flattened' text='Add' onClick={handleFileClick}>
						<AddPhoto width={16} height={16} className={s.stroke} />
					</Button>
					<input id='upload' type='file' style={{ opacity: 0, position: 'absolute', zIndex: -1 }} onChange={uploadPhoto} disabled={loading} />
				</label>
			</Flex>
			<div className={s.photoWrap}>
				{photos.map(photo => (
					<div key={photo.name} className={s.photoCard}>
						<img src={photo.thumbpath} alt="Фото" />
						<Button type='filled' onClick={() => deletePhoto(photo.name)}>
							<Trash className={`${s.stroke} ${s.trash}`} />
						</Button>
					</div>
				))}
			</div>
		</Card>
	)
}
