import React, { useState } from 'react'

export default function Comment({
	stl,
	avatar,
	firstName,
	lastName,
	date,
	time,
	text,
	replyCount = 0,
	toggleComments,
}) {
	const [arrowType, setArrowType] = useState(true)
	const [replyOpen, setReplyOpen] = useState(false)
	const [textLength, setTextLength] = useState('')

	const handleChangeText = event => {
		setTextLength(event.target.value.length)
	}

	const toggleArrow = () => {
		toggleComments()
		setArrowType(prev => !prev)
	}

	const toggleReply = () => {
		setReplyOpen(prevReplyOpen => !prevReplyOpen)
	}
	return (
		<>
			<div className={stl.comment}>
				<div className={stl.avatar}>
					<img src={avatar} alt={`${firstName} ${lastName}`} />
				</div>
				<div className={stl.wrapperNameAndDate}>
					<div className={stl.author}>
						{firstName} {lastName}
					</div>
					<div className={stl.dateTime}>
						{date} в {time}
					</div>
				</div>
				<div className={stl.content}>{text}</div>
				<div className={stl.wrapperBottomComment}>
					{replyCount != 0 && (
						<button className={stl.replyCount} onClick={toggleArrow}>
							{replyCount != 0 ? `Кол-во ответов: ${replyCount}` : ''}
							<span
								className={`${arrowType ? stl.arrowDown : stl.arrowUp}`}
							></span>
						</button>
					)}
					{replyCount == 0 && <span></span>}
					<button onClick={toggleReply}>Ответить</button>
				</div>
			</div>
			{replyOpen && (
				<div>
					<div className={stl.wrapperTextAreaComment}>
						<textarea
							onChange={handleChangeText}
							className={stl.textAreaComment}
							name='comment'
							placeholder='Напишите свой комментарий...'
							rows='6'
							maxLength={1200}
						></textarea>
						<div>
							<button className={stl.btnAdd} type='button'>
								Добавить
							</button>
							<button onClick={toggleReply} type='button'>
								Отменить
							</button>
							<span style={{ float: 'right' }}>
								Осталось <span>{1200 - textLength} </span>
								знаков
							</span>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
