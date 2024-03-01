import React, { useRef, useState } from 'react'
import stl from './CarouselImg.module.css'
import gear from './img/gear.png'
import ring from './img/ring.png'

export default function CarouselImg() {
	const [currentImage, setCurrentImage] = useState()
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [currentTranslate, setCurrentTranslate] = useState(0)
	const [captionOpen, setCaptionOpen] = useState(true)

	const carouselContentRef = useRef(null)

	const images = [
		'https://img.goodfon.com/original/3504x2336/8/45/ninja-pose-uniform.jpg',
		'https://sun9-63.userapi.com/impg/gAZ1nkU8zRXyJrGGFXOXBIejIiqBSPn5YvtbWg/WjSNJzM0QtA.jpg?size=1600x1066&quality=96&sign=1fe50d1971b9b175f0c4505096f3d693&type=album',
		'https://sun1-24.userapi.com/impf/c850216/v850216110/141c03/yapJO15iU2U.jpg?size=2560x1440&quality=96&sign=5d6fda970beba7287b7d548a13694bd9&type=album',
		'https://worldmartialarts.ru/wp-content/uploads/2018/10/Kudzi-tajnaya-praktika-nindzya1.jpg',
		'https://proprikol.ru/wp-content/uploads/2020/10/kartinki-nindzya-11.jpg',
	]
	const captions = [
		<>
			<p>
				<span className={stl.keyword}>Тестировщик-ниндзя </span>. Владеет
				уникальным мастерством в области обнаружения и устранения ошибок. Как
				настоящий ниндзя, он обладает невероятной внимательностью к деталям и
				умением быстро реагировать на любые нештатные ситуации. Его навыки
				позволяют ему проводить скрытое тестирование, исследуя приложения и
				программы как незаметный наблюдатель, готовый выявить самые тонкие
				ошибки.
			</p>
			<p>
				Тестировщик-ниндзя умеет использовать различные методы тестирования,
				будучи готовым к вызовам любого проекта. Он стремится к достижению
				идеального результат в работе, уверен в своей способности проникать в
				самую защищенную систему и обнаруживать уязвимости.
			</p>
		</>,
		<>
			<p>
				<span className={stl.keyword}>Матерый ниндзя</span>, преисполнившийся
				тайными техниками написания кода. Его код подобен тайнам ниндзюцу,
				недоступным для обычных смертных. Сложные петли, условия и обработчики
				событий задают ритм, которому не в состоянии последовать даже самурай. А
				вот функции, методы и замыкания - это подобие ниндзя-мастерства,
				доступное лишь избранным. Даже комментарии в его коде написаны так, что
				кажется, будто они закодированы на древнем языке клана
				программистов-ниндзя.
			</p>
		</>,
		<>
			<p>
				<span className={stl.keyword}>Гуру кода</span>. Его код - это не просто
				строка символов, а скрытая мудрость, переданная из поколения в
				поколение. Это медитации над правильными техниками написания кода, в
				которых он обретает силу незримого меча, метко рассекающего проблемы и
				создающего волшебство на экране монитора. Он ловок, как кошка, и
				остроумен, как шуточный комментарий в коде. Его код подобен точным
				ударам ниндзя, пронзающим сложности веб-разработки и оставляющим за
				собой лишь чистоту великолепно написанного кода.
			</p>
		</>,
		<>
			<p>
				<span className={stl.keyword}>Тайный ниндзя</span>. Его код как танец
				слона в посудной лавке - неуклюжий, неприглядный и оставляющий за собой
				только хаос. Он хитёр, как белка, и проницателен, как удар бумеранга,
				который всегда возвращается к тебе с ошибкой. Его код подобен черному
				поясу в джаваскрипте - много шума, мало смысла, все бегут, а он кинжалом
				бросает исключения в твою спину!
			</p>
		</>,
		<>
			<p>
				<span className={stl.keyword}>Ниндзя-дизайнер</span>. Его код - это
				эффективный инструмент, с помощью которого ниндзя-дизайнер творит
				волшебство. Стройность и точность его кода сравнимы с движениями
				настоящего ниндзя, который выполняет сложные маневры с невероятной
				легкостью. Будучи мастером своего дела, ниндзя-дизайнер использует код
				как оружие для создания красивых, интуитивно понятных и функциональных
				дизайнов. Его код - это не просто строка за строкой, а тщательно
				выверенная симфония, объединяющая красоту и функциональность.
			</p>
		</>,
	]

	const generalText =
		'Наша команда состоит из отборнейших профессионалов. Каждый на голову выше следующего.'

	const handleMouseDown = e => {
		setIsDragging(true)
		setStartX(e.clientX)
		setCurrentTranslate(getTranslateX())
		carouselContentRef.current.style.cursor = 'grabbing'
	}

	const handleMouseMove = e => {
		if (isDragging) {
			const width = carouselContentRef.current.offsetWidth
			// const widthParent = carouselContentRef.current.parentElement.offsetWidth

			const childWidth = Math.min(
				carouselContentRef.current.firstElementChild.clientWidth,
				carouselContentRef.current.lastElementChild.clientWidth
			)

			const diff = e.clientX - startX
			const newPos = currentTranslate + diff
			if (newPos <= 0 && newPos + width - childWidth * 4 > 0)
				carouselContentRef.current.style.transform = `translateX(${newPos}px)`
		}
	}

	const handleMouseUp = () => {
		setIsDragging(false)
		carouselContentRef.current.style.cursor = 'grab'
	}

	const handleMouseLeave = () => {
		if (isDragging) {
			setIsDragging(false)
			carouselContentRef.current.style.cursor = 'grab'
		}
	}

	const getTranslateX = () => {
		const transformStr = getComputedStyle(carouselContentRef.current).transform
		const matrix = new WebKitCSSMatrix(transformStr)
		return matrix.m41
	}

	const handleClick = index => {
		let distanceFromParentLeft
		setCurrentImage(index)
		const widthParent = carouselContentRef.current.parentElement.offsetWidth
		const imageWidth = Math.min(
			carouselContentRef.current.firstElementChild.clientWidth,
			carouselContentRef.current.lastElementChild.clientWidth
		)

		const imagesCount = carouselContentRef.current.children.length

		const viewportWidth = carouselContentRef.current.clientWidth
		const image = carouselContentRef.current.children[index]
		if (index > currentImage) distanceFromParentLeft = image.offsetLeft - 50
		else distanceFromParentLeft = image.offsetLeft

		const spaceLeft = distanceFromParentLeft - widthParent / 2 + 100

		if (spaceLeft > 0 && viewportWidth - spaceLeft - 3 * imageWidth > 0)
			carouselContentRef.current.style.transform = `translateX(${-spaceLeft}px)`
		else if (spaceLeft < 0)
			carouselContentRef.current.style.transform = `translateX(${0}px)`
		else
			carouselContentRef.current.style.transform = `translateX(${
				-viewportWidth + widthParent
			}px)`

		setCaptionOpen(false)
		setTimeout(() => {
			setCaptionOpen(true)
		}, 700)
	}

	return (
		<>
			<div className={stl.carouselContainer}>
				<div
					ref={carouselContentRef}
					className={stl.thumbnails}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseLeave}
				>
					{images.map((image, index) => (
						<img
							className={`${index === currentImage ? stl.selectedImage : ''}`}
							draggable='false'
							key={index}
							src={image}
							alt={`Картинка ${index + 1}`}
							onClick={() => handleClick(index)}
						/>
					))}
				</div>
				<div className={`${stl.caption} ${captionOpen ? stl.open : ''}`}>
					<div style={{ minHeight: 0 }}>
						{captions[currentImage] || generalText}
					</div>
					<img
						src={gear}
						className={`${stl.machine} ${stl.machine1} ${
							captionOpen ? stl.open : ''
						}`}
					></img>
					<img
						src={gear}
						className={`${stl.machine} ${stl.machine2} ${
							captionOpen ? stl.open : ''
						}`}
					></img>
					<img
						src={gear}
						className={`${stl.machine}  ${stl.machine3} ${
							captionOpen ? stl.open : ''
						}`}
					></img>
					<img
						src={gear}
						className={`${stl.machine} ${stl.machine4} ${
							captionOpen ? stl.open : ''
						}`}
					></img>

					{/* <div className={captionOpen ? `${stl.chain} ${stl.open}` : stl.chain}>
						<img
							src={ring}
							className={`${stl.ring} ${captionOpen ? stl.open : ''}`}
						></img>
					</div> */}
				</div>
			</div>
		</>
	)
}
