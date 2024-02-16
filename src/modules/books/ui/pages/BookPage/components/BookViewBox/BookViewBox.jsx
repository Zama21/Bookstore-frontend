import React from 'react'
import stl from './BookViewBox.module.css'

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
			<div className={`${stl.column} ${stl.columnSameWidth}`}></div>
		</div>
	)
}
