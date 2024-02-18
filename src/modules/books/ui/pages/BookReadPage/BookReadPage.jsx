import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import stl from './BookReadPage.module.css'
import stlTableContents from './stl/TableContents.module.css'
import stlCommentsBookRead from './stl/Comments.module.css'
import TableContents from 'shared/ui/components/TableСontents/TableСontents'
import BookReadSvgSelector from './svg/BookReadSvgSelector'
import Comments from 'shared/ui/components/Comments/Comments'

const tableContentsObj = {
	defaultValue: 'titletetghg',
	data: ['арбfdghghуз', 'глава2', 'kio rio'],
	stl: stlTableContents,
}

const commentsObj = {
	data: [
		{
			avatar:
				'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663110850_6-mykaleidoscope-ru-p-spokoinii-chelovek-vkontakte-8.jpg',
			firstName: 'Grot',
			lastName: 'Grotovich',
			date: '12.02.2024',
			time: '12:03',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.',
			answers: [
				{
					avatar:
						'https://get.wallhere.com/photo/face-women-model-portrait-long-hair-blue-eyes-brunette-looking-at-viewer-photography-blue-fashion-hair-Person-skin-head-girl-beauty-smile-eye-woman-lady-blond-hairstyle-portrait-photography-photo-shoot-brown-hair-facial-expression-41103.jpg',
					firstName: 'Grot',
					lastName: '',
					date: '12.02.2024',
					time: '12:03',
					text: 'Да, согласен!',
					Answers: [],
				},
				{
					avatar:
						'http://microsac.es/wp-content/uploads/2019/06/8V1z7D_t20_YX6vKm.jpg',
					firstName: 'Grot',
					lastName: 'Mimrovich',
					date: '12.02.2024',
					time: '12:03',
					text: 'Плюсую!111!1111!111',
					Answers: [],
				},
			],
		},
		{
			avatar:
				'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663110850_6-mykaleidoscope-ru-p-spokoinii-chelovek-vkontakte-8.jpg',
			firstName: 'Grot',
			lastName: 'Grotovich',
			date: '12.02.2024',
			time: '12:03',
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, id, harum temporibus tenetur perspiciatis, consequatur quae omnis libero accusamus odit totam facilis aspernatur quo iste ab amet velit iusto possimus.',
			answers: [
				{
					avatar:
						'https://get.wallhere.com/photo/face-women-model-portrait-long-hair-blue-eyes-brunette-looking-at-viewer-photography-blue-fashion-hair-Person-skin-head-girl-beauty-smile-eye-woman-lady-blond-hairstyle-portrait-photography-photo-shoot-brown-hair-facial-expression-41103.jpg',
					firstName: 'Grot',
					lastName: '',
					date: '12.02.2024',
					time: '12:03',
					text: 'Да, согласен!',
					Answers: [],
				},
				{
					avatar:
						'http://microsac.es/wp-content/uploads/2019/06/8V1z7D_t20_YX6vKm.jpg',
					firstName: 'Grot',
					lastName: 'Mimrovich',
					date: '12.02.2024',
					time: '12:03',
					text: 'Плюсую!111!1111!111',
					Answers: [],
				},
			],
		},
	],
	stl: stlCommentsBookRead,
}

export const BookReadPage = () => {
	const { bookId } = useParams()
	const [fontSize, setFontSize] = useState('16px')

	const increaseFontSize = () => {
		setFontSize(prevFontSize => {
			if (parseInt(prevFontSize, 10) > 60) return prevFontSize
			const currentSize = parseInt(prevFontSize, 10)
			const newSize = currentSize + 2
			return `${newSize}px`
		})
	}

	const decreaseFontSize = () => {
		setFontSize(prevFontSize => {
			if (parseInt(prevFontSize, 10) < 6) return prevFontSize
			const currentSize = parseInt(prevFontSize, 10)
			const newSize = currentSize - 2
			return `${newSize}px`
		})
	}

	return (
		<>
			<main>
				<div className={stl.wrapper}>
					<div>хлебные крошки</div>

					<h1 className={stl.bookReadH1}>
						<a href='http://localhost:5173/book/13'>
							Тёмный Травник. Верховья Стикса
						</a>
					</h1>

					<div className={stl.WrapperTableContentsAndBtn}>
						<TableContents {...tableContentsObj}></TableContents>
						<div className={stl.wrapperBtnZoom}>
							<button className={stl.textZoomButton} onClick={increaseFontSize}>
								<BookReadSvgSelector nameSvg='+'></BookReadSvgSelector>
							</button>
							<button className={stl.textZoomButton} onClick={decreaseFontSize}>
								<BookReadSvgSelector nameSvg='-'></BookReadSvgSelector>
							</button>
						</div>
					</div>

					<div>Пагинация</div>
					<span className={stl.divider}></span>

					<div className={stl.WrapperBodyText} style={{ fontSize: fontSize }}>
						<h2>Бунт Таиши</h2>
						<p>
							Стоило СТЕРВЕ опуститься на песок, как тут же рядом со мной
							возникла Серая Стая в полном составе. Моя подругу это очень сильно
							удивило – она-то полагала, что волки, волкодлаки и мифический пёс
							остались далеко позади.
						</p>
						<p>
							– Просто они мои спутники, и снова возникают рядом со мной, если
							умирают или отстают, – пояснил я Таише игровые правила
							«Бескрайнего Мира».
						</p>
						<p>
							Стоило СТЕРВЕ опуститься на песок, как тут же рядом со мной
							возникла Серая Стая в полном составе. Моя подругу это очень сильно
							удивило – она-то полагала, что волки, волкодлаки и мифический пёс
							остались далеко позади.
						</p>
						<p>
							– Просто они мои спутники, и снова возникают рядом со мной, если
							умирают или отстают, – пояснил я Таише игровые правила
							«Бескрайнего Мира».
						</p>
						<p>
							Стоило СТЕРВЕ опуститься на песок, как тут же рядом со мной
							возникла Серая Стая в полном составе. Моя подругу это очень сильно
							удивило – она-то полагала, что волки, волкодлаки и мифический пёс
							остались далеко позади.
						</p>
						<p>
							– Просто они мои спутники, и снова возникают рядом со мной, если
							умирают или отстают, – пояснил я Таише игровые правила
							«Бескрайнего Мира».
						</p>
						<p>
							Стоило СТЕРВЕ опуститься на песок, как тут же рядом со мной
							возникла Серая Стая в полном составе. Моя подругу это очень сильно
							удивило – она-то полагала, что волки, волкодлаки и мифический пёс
							остались далеко позади.
						</p>
						<p>
							– Просто они мои спутники, и снова возникают рядом со мной, если
							умирают или отстают, – пояснил я Таише игровые правила
							«Бескрайнего Мира».
						</p>
					</div>

					<span className={stl.divider}></span>
					<div>Пагинация</div>

					<Comments {...commentsObj}></Comments>
				</div>
			</main>
			<footer>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
				ratione distinctio quaerat nisi, labore repellendus modi quidem omnis!
				Tempore perferendis officiis atque dolores nesciunt saepe quam ex
				excepturi necessitatibus harum libero molestiae consequuntur maxime vel
				commodi iste doloriLorem ipsum, dolor sit amet consectetur adipisicing
				elit. Temporibus ratione distinctio quaerat nisi, labore repellendus
				modi quidem omnis! Tempore perferendis officiis atque dolores nesciunt
				saepe quam ex excepturi necessitatibus harum libero molestiae
				consequuntur maxime vel commodi iste doloribus incidunt magni dolorem,
				asperiores aspernatur rem ipsam numquam mollitia. Magnam ea officia
				dignissimos quod voluptate delectus, deleniti ab velit modi temporibus
				iure id dolorem illo similique ratione dolorum porro enim numquam atque?
				Aspernatur saepe vero excepturi dolorem iure expedita reprehenderit
				architecto recusandae, dolorum tempora, eius non natus repellendus
				accusantium, id quibusdam? Illum molestias impedit blanditiis laudantium
				dolores eum esse omnis doloremque neque.Lorem ipsum, dolor sit amet
				consectetur adipisicing elit. Temporibus ratione distinctio quaerat
				nisi, labore repellendus modi quidem omnis! Tempore perferendis officiis
				atque dolores nesciunt saepe quam ex excepturi necessitatibus harum
				libero molestiae consequuntur maxime vel commodi iste doloribus incidunt
				magni dolorem, asperiores aspernatur rem ipsam numquam mollitia. Magnam
				ea officia dignissimos quod voluptate delectus, deleniti ab velit modi
				temporibus iure id dolorem illo similique ratione dolorum porro enim
				numquam atque? Aspernatur saepe vero excepturi dolorem iure expedita
				reprehenderit architecto recusandae, dolorum tempora, eius non natus
				repellendus accusantium, id quibusdam? Illum molestias impedit
				blanditiis laudantium dolores eum esse omnis doloremque neque.Lorem
				ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ratione
				distinctio quaerat nisi, labore repellendus modi quidem omnis! Tempore
				perferendis officiis atque dolores nesciunt saepe quam ex excepturi
				necessitatibus harum libero molestiae consequuntur maxime vel commodi
				iste doloribus incidunt magni dolorem, asperiores aspernatur rem ipsam
				numquam mollitia. Magnam ea officia dignissimos quod voluptate delectus,
				deleniti ab velit modi temporibus iure id dolorem illo similique ratione
				dolorum porro enim numquam atque? Aspernatur saepe vero excepturi
				dolorem iure expedita reprehenderit architecto recusandae, dolorum
				tempora, eius non natus repellendus accusantium, id quibusdam? Illum
				molestias impedit blanditiis laudantium dolores eum esse omnis
				doloremque neque.Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Temporibus ratione distinctio quaerat nisi, labore repellendus
				modi quidem omnis! Tempore perferendis officiis atque dolores nesciunt
				saepe quam ex excepturi necessitatibus harum libero molestiae
				consequuntur maxime vel commodi iste doloribus incidunt magni dolorem,
				asperiores aspernatur rem ipsam numquam mollitia. Magnam ea officia
				dignissimos quod voluptate delectus, deleniti ab velit modi temporibus
				iure id dolorem illo similique ratione dolorum porro enim numquam atque?
				Aspernatur saepe vero excepturi dolorem iure expedita reprehenderit
				architecto recusandae, dolorum tempora, eius non natus repellendus
				accusantium, id quibusdam? Illum molestias impedit blanditiis laudantium
				dolores eum esse omnis doloremque neque.Lorem ipsum, dolor sit amet
				consectetur adipisicing elit. Temporibus ratione distinctio quaerat
				nisi, labore repellendus modi quidem omnis! Tempore perferendis officiis
				atque dolores nesciunt saepe quam ex excepturi necessitatibus harum
				libero molestiae consequuntur maxime vel commodi iste doloribus incidunt
				magni dolorem, asperiores aspernatur rem ipsam numquam mollitia. Magnam
				ea officia dignissimos quod voluptate delectus, deleniti ab velit modi
				temporibus iure id dolorem illo similique ratione dolorum porro enim
				numquam atque? Aspernatur saepe vero excepturi dolorem iure expedita
				reprehenderit architecto recusandae, dolorum tempora, eius non natus
				repellendus accusantium, id quibusdam? Illum molestias impedit
				blanditiis laudantium dolores eum esse omnis doloremque neque.Lorem
				ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ratione
				distinctio quaerat nisi, labore repellendus modi quidem omnis! Tempore
				perferendis officiis atque dolores nesciunt saepe quam ex excepturi
				necessitatibus harum libero molestiae consequuntur maxime vel commodi
				iste doloribus incidunt magni dolorem, asperiores aspernatur rem ipsam
				numquam mollitia. Magnam ea officia dignissimos quod voluptate delectus,
				deleniti ab velit modi temporibus iure id dolorem illo similique ratione
				dolorum porro enim numquam atque? Aspernatur saepe vero excepturi
				dolorem iure expedita reprehenderit architecto recusandae, dolorum
				tempora, eius non natus repellendus accusantium, id quibusdam? Illum
				molestias impedit blanditiis laudantium dolores eum esse omnis
				doloremque neque.Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Temporibus ratione distinctio quaerat nisi, labore repellendus
				modi quidem omnis! Tempore perferendis officiis atque dolores nesciunt
				saepe quam ex excepturi necessitatibus harum libero molestiae
				consequuntur maxime vel commodi iste doloribus incidunt magni dolorem,
				asperiores aspernatur rem ipsam numquam mollitia. Magnam ea officia
				dignissimos quod voluptate delectus, deleniti ab velit modi temporibus
				iure id dolorem illo similique ratione dolorum porro enim numquam atque?
				Aspernatur saepe vero excepturi dolorem iure expedita reprehenderit
				architecto recusandae, dolorum tempora, eius non natus repellendus
				accusantium, id quibusdam? Illum molestias impedit blanditiis laudantium
				dolores eum esse omnis doloremque neque.Lorem ipsum, dolor sit amet
				consectetur adipisicing elit. Temporibus ratione distinctio quaerat
				nisi, labore repellendus modi quidem omnis! Tempore perferendis officiis
				atque dolores nesciunt saepe quam ex excepturi necessitatibus harum
				libero molestiae consequuntur maxime vel commodi iste doloribus incidunt
				magni dolorem, asperiores aspernatur rem ipsam numquam mollitia. Magnam
				ea officia dignissimos quod voluptate delectus, deleniti ab velit modi
				temporibus iure id dolorem illo similique ratione dolorum porro enim
				numquam atque? Aspernatur saepe vero excepturi dolorem iure expedita
				reprehenderit architecto recusandae, dolorum tempora, eius non natus
				repellendus accusantium, id quibusdam? Illum molestias impedit
				blanditiis laudantium dolores eum esse omnis doloremque neque.bus
				incidunt magni dolorem, asperiores aspernatur rem ipsam numquam
				mollitia. Magnam ea officia dignissimos quod voluptate delectus,
				deleniti ab velit modi temporibus iure id dolorem illo similique ratione
				dolorum porro enim numquam atque? Aspernatur saepe vero excepturi
				dolorem iure expedita reprehenderit architecto recusandae, dolorum
				tempora, eius non natus repellendus accusantium, id quibusdam? Illum
				molestias impedit blanditiis laudantium dolores eum esse omnis
				doloremque neque.Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Temporibus ratione distinctio quaerat nisi, labore repellendus
				modi quidem omnis! Tempore perferendis officiis atque dolores nesciunt
				saepe quam ex excepturi necessitatibus harum libero molestiae
				consequuntur maxime vel commodi iste doloribus incidunt magni dolorem,
				asperiores aspernatur rem ipsam numquam mollitia. Magnam ea officia
				dignissimos quod voluptate delectus, deleniti ab velit modi temporibus
				iure id dolorem illo similique ratione dolorum porro enim numquam atque?
				Aspernatur saepe vero excepturi dolorem iure expedita reprehenderit
				architecto recusandae, dolorum tempora, eius non natus repellendus
				accusantium, id quibusdam? Illum molestias impedit blanditiis laudantium
				dolores eum esse omnis doloremque neque.Lorem ipsum, dolor sit amet
				consectetur adipisicing elit. Temporibus ratione distinctio quaerat
				nisi, labore repellendus modi quidem omnis! Tempore perferendis officiis
				atque dolores nesciunt saepe quam ex excepturi necessitatibus harum
				libero molestiae consequuntur maxime vel commodi iste doloribus incidunt
				magni dolorem, asperiores aspernatur rem ipsam numquam mollitia. Magnam
				ea officia dignissimos quod voluptate delectus, deleniti ab velit modi
				temporibus iure id dolorem illo similique ratione dolorum porro enim
				numquam atque? Aspernatur saepe vero excepturi dolorem iure expedita
				reprehenderit architecto recusandae, dolorum tempora, eius non natus
				repellendus accusantium, id quibusdam? Illum molestias impedit
				blanditiis laudantium dolores eum esse omnis doloremque neque.Lorem
				ipsum, dolor sit amet consectetur adipisicing elit. Temporibus ratione
				distinctio quaerat nisi, labore repellendus modi quidem omnis! Tempore
				perferendis officiis atque dolores nesciunt saepe quam ex excepturi
				necessitatibus harum libero molestiae consequuntur maxime vel commodi
				iste doloribus incidunt magni dolorem, asperiores aspernatur rem ipsam
				numquam mollitia. Magnam ea officia dignissimos quod voluptate delectus,
				deleniti ab velit modi temporibus iure id dolorem illo similique ratione
				dolorum porro enim numquam atque? Aspernatur saepe vero excepturi
				dolorem iure expedita reprehenderit architecto recusandae, dolorum
				tempora, eius non natus repellendus accusantium, id quibusdam? Illum
				molestias impedit blanditiis laudantium dolores eum esse omnis
				doloremque neque.
			</footer>
		</>
	)
}
