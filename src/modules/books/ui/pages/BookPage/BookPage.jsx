import React from 'react'
import { useParams } from 'react-router-dom'
import stl from './BookPage.module.css'

export const BookPage = () => {
	const { bookId } = useParams()

	return (
		<div className='stl.page'>
			<h1>Book with ID = {bookId}!</h1>
		</div>
	)
}
