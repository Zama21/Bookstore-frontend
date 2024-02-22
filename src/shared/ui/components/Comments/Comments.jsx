import React, { useState } from 'react'
import CommentThread from './CommentThread/CommentThread'

export default function Comments({ stl, data }) {
	const [textLength, setTextLength] = useState('')
	const [replyOpen, setReplyOpen] = useState(false)

	const handleChangeText = event => {
		setTextLength(event.target.value.length)
	}

	const toggleReply = () => {
		setReplyOpen(prevReplyOpen => !prevReplyOpen)
	}
	return (
		<div className={stl.wrapperComments}>
			<div className={stl.commentsHead}>
				<h3 className={stl.commentsHeadTitle}>346 комментариев </h3>
				<div>
					<div
						className={`${stl.wrapperTextAreaComment} ${
							replyOpen ? stl.hide : ' '
						}`}
					>
						<textarea
							onClick={() => setReplyOpen(false)}
							onChange={handleChangeText}
							className={stl.textAreaComment}
							name='comment'
							placeholder='Напишите свой комментарий...'
							rows='4'
							maxLength={1200}
						></textarea>
						<div className={stl.replyBtnAndMetaInfo}>
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
			</div>
			{data.map((item, i) => (
				<CommentThread stl={stl} commentThread={item} key={i}></CommentThread>
			))}
		</div>
	)
}
