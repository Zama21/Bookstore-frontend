import React from 'react'
import stl from './BookReadSvgSelector.module.css'

export default function BookReadSvgSelector({ nameSvg }) {
	switch (nameSvg) {
		case '+': {
			return (
				<svg
					className={stl.plus}
					viewBox='0 0 128 128'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						style={{ fill: '#923a65' }}
						d='M103,57H71V25c0-0.6-0.4-1-1-1H58c-0.6,0-1,0.4-1,1v32H25c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h32v32  c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V71h32c0.6,0,1-0.4,1-1V58C104,57.4,103.6,57,103,57z'
					/>
				</svg>
			)
		}
		case '-': {
			return (
				<svg
					className={stl.minus}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 32 32'
				>
					<g transform='scale(2)'>
						<rect
							style={{ fill: '#923a65' }}
							width='2'
							height='10'
							x='7'
							y='-13'
							transform='rotate(90)'
						/>
					</g>
				</svg>
			)
		}
	}
}
