import React, { useState } from 'react'

export default function TableContents({ defaultValue, data, stl }) {
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
					{defaultValue}
				</option>
			)}
			{data.map(item => (
				<option value={item} key={item}>
					{item}
				</option>
			))}
		</select>
	)
}
