import React from 'react'
import stl from './BookViewBox.module.css'
import BookSvgSelector from './svg/BookSvgSelector'

export default function BookViewBox() {
	return (
		<div className={`${stl.wrapper} `}>
			<div className={`${stl.column} `}>
				<img
					className={stl.img}
					src='https://фантазеры.рф/wa-data/public/shop/products/72/11/81172/images/152544/152544.750x0.jpg'
					alt='img'
				/>
			</div>
			<div className={`${stl.column} ${stl.columnSameWidth}`}>
				<div className={stl.bookInformation}>
					<h1 className={stl.h1}>Чужая семья генерала драконов</h1>
					<h2>
						<a className={stl.authorNic} href=''>
							Мария Лунёва
						</a>
					</h2>
					<p className={stl.nonPriorityInformation}>
						<span className={stl.metaName}>Цикл: </span>
						<a className={stl.anchor} href=''>
							Генералы Драконов
						</a>
					</p>
					<p>
						<span className={stl.metaName}>Жанры: </span>
						<a className={stl.anchor} href=''>
							Стихи
						</a>
						,{' '}
						<a className={stl.anchor} href=''>
							Литрпг
						</a>
						,{' '}
						<a className={stl.anchor} href=''>
							Любовный роман
						</a>
					</p>
					<div className={stl.wrapperBtnForRead}>
						<a className={stl.bookBtnForRead} href='#'>
							Читать
						</a>
					</div>
				</div>
			</div>
			<div className={`${stl.column} ${stl.columnSameWidth}`}>
				<div className={stl.containerFor3Column}>
					<div className={stl.headerColumn3}>
						<div className={stl.likeContainer}>
							<BookSvgSelector nameSvg='starLike'></BookSvgSelector>
							<span>12346</span>
						</div>
						<div className={stl.ratingContainer}>
							<p>Рейтинг</p>
							<p className='flxVrt'>
								<BookSvgSelector nameSvg='starRating'></BookSvgSelector>
								<span>1245</span>
							</p>
						</div>
					</div>
					<span className={stl.divider}></span>
					<div className={stl.mainColumn3}>
						<div className={`${stl.addViewStatistics}  flxRow`}>
							<div className='flxVrt'>
								<BookSvgSelector nameSvg='bookshelf'></BookSvgSelector>
								<span>1245</span>
							</div>
							<div className='flxVrt'>
								<BookSvgSelector nameSvg='eye'></BookSvgSelector>
								<span>1245</span>
							</div>
						</div>
						<span className={stl.divider}></span>
						<div className={`${stl.bookPublicationStatus}  flxRow`}>
							<BookSvgSelector nameSvg='tick'></BookSvgSelector>
							<span>Полный текст</span>
						</div>
						<span className={stl.divider}></span>
						<div className={stl.lifeCycleOfBook}>
							<p className={stl.publicationTitle}>Публикация</p>
							<p>
								<span className={stl.bookDate}>Начата:</span> 12.06.2022
							</p>
							<p>
								<span className={stl.bookDate}>Завершена:</span> 1.10.2023
							</p>
						</div>
					</div>
					<div className={`${stl.footerColumn3} flxVrt`}>
						<BookSvgSelector nameSvg='libraryOfBooks'></BookSvgSelector>
						<span>Добавьте в библиотеку</span>
					</div>
				</div>
			</div>
		</div>
	)
}
