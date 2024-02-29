import React, { useRef, useState } from 'react'
import stl from './CarouselImg.module.css'

export default function CarouselImg() {
	const [currentImage, setCurrentImage] = useState()
	const [isDragging, setIsDragging] = useState(false)
	const [startX, setStartX] = useState(0)
	const [currentTranslate, setCurrentTranslate] = useState(0)

	const carouselContentRef = useRef(null)

	const images = [
		'https://photo-ideal.ru/upload/iblock/817/fotosemka_sotrudnikov_58.jpg',
		'http://static.wixstatic.com/media/9e776e_2a081d8100224e409e305b095fd87dbc~mv2_d_1920_1281_s_2.jpg',
		'https://photo-ideal.ru/upload/iblock/fee/xfotosessiya_sotrudnikov_na_fone.jpg.pagespeed.ic.B74US2Gp7u.jpg',
		'http://static.wixstatic.com/media/9e776e_2a081d8100224e409e305b095fd87dbc~mv2_d_1920_1281_s_2.jpg',
		'https://photo-ideal.ru/upload/iblock/fee/xfotosessiya_sotrudnikov_na_fone.jpg.pagespeed.ic.B74US2Gp7u.jpg',
	]
	const captions = [
		'Текст поясняющий первую картинку',
		'Текст поясняющий вторую картинку',
		'Текст поясняющий третью картинку',
		'Текст поясняющий 4 картинку',
		'Текст поясняющий 5 картинку',
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
	}

	return (
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
			<div className={stl.caption}>{captions[currentImage] || generalText}</div>
		</div>
	)
}
