import React from 'react'
import { useParams } from 'react-router-dom'
import stl from './BookPage.module.css'
import BookViewBox from './components/BookViewBox/BookViewBox'

export const BookPage = () => {
	const { bookId } = useParams()

	return (
		<>
			<main>
				<div className={stl.wrapper}>
					<BookViewBox></BookViewBox>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
					molestiae delectus accusantium voluptatem, autem voluptatum
					recusandae, omnis molestias maiores aliquam itaque nulla modi, aperiam
					numquam eveniet cupiditate ratione pariatur eos!
				</div>
			</main>
			<footer>aenth</footer>
		</>
	)
}
