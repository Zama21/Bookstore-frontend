import React, { useState } from 'react'
import stl from './TableContents.module.css'

export default function TableContents() {
	const [selectedValue, setSelectedValue] = useState('') // начальное значение

	const handleSelectChange = event => {
		setSelectedValue(event.target.value)
	}

	return (
		<select
			className={stl.select}
			value={selectedValue}
			onChange={handleSelectChange}
		>
			{selectedValue === '' && (
				<option value='' disabled hidden>
					Оглавление
				</option>
			)}
			<option value='react'>Lorem</option>
			<option value='angular'>Angular</option>
			<option value='vue'>Vue</option>
		</select>
	)
}
