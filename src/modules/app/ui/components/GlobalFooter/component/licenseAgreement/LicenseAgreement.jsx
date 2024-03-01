import React from 'react'
import { useState } from 'react'
import ModalAwareness from 'shared/ui/components/Modal/modalAwareness/ModalAwareness'
import stl from './licenseAgreement.module.css'

export default function LicenseAgreement() {
	const [showModal, setShowModal] = useState(false)
	const [closingAnimation, setClosingAnimation] = useState(false)

	const onHideCart = () => {
		setClosingAnimation(true)
		setTimeout(() => {
			setShowModal(false)
		}, 300)
	}
	const onShowCart = () => {
		setShowModal(true)
		setClosingAnimation(false)
	}

	let obj = {
		title: 'Лицензионное соглашение',
		text: (
			<>
				<p>
					Бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла
					-бла-бла -бла-бла -бла-бла -бла-бла -бла-бла -бла-бла-бла
					<span className={stl.keyword}> вашу душу </span>
					бла-бла-бла-бла -бла-бла -бла-бла-бла-бла-бла-бла-бла-бла
					-бла-бла-бла-бла-бла-бла-бла-бла
				</p>
				<p>
					Бла-бла-бла-бла<span className={stl.keyword}> продажа данных </span>
					бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла -бла-бла -бла-бла
					-бла-бла -бла-бла -бла-бла -бла-бла-бла бла-бла-бла-бла -бла-бла
					-бла-бла-бла-бла-бла-бла-бла-бла -бла-бла-бла-бла-бла-бла-бла-бла
				</p>
				<p>
					Бла-бла-бла-бла бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла
					-бла-бла -бла-бла -бла-бла -бла-бла -бла-бла -бла-бла-бла
					бла-бла-бла-бла -бла-бла -бла-бла-бла-бла-бла-бла-бла
					<span className={stl.keyword}> оформление микрозайма </span>-бла
					-бла-бла-бла-бла-бла-бла-бла-бла
				</p>
				<p>
					Бла-бла-бла-бла бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла
					-бла-бла -бла-бла -бла
					<span className={stl.keyword}> права на тело </span>-бла -бла-бла
					-бла-бла -бла-бла-бла бла-бла-бла-бла -бла-бла
					-бла-бла-бла-бла-бла-бла-бла -бла -бла-бла-бла-бла-бла-бла-бла-бла
				</p>
			</>
		),
		btnText: 'Понятно',
		closingAnimation,
	}
	return (
		<>
			<p className={stl.title} onClick={onShowCart}>
				Лицензионное соглашение
			</p>
			{showModal && <ModalAwareness {...obj} onHideCart={onHideCart} />}
		</>
	)
}
