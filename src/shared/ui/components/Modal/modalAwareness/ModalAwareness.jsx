import React from 'react'
import Modal from '../Modal'
import stl from './modalAwareness.module.css'
import { content } from 'modules/books/ui/pages/BookReadPage/stl/Comments.module.css'

export default function ModalAwareness({
	title,
	text,
	btnText,
	onHideCart,
	closingAnimation,
}) {
	return (
		<Modal onHideCart={onHideCart} closingAnimation={closingAnimation}>
			<h2 className={stl.title}>{title}</h2>
			<div className={stl.content}>{text}</div>
			<button className={stl.btnYes} onClick={onHideCart}>
				{btnText}
			</button>
		</Modal>
	)
}
