import React, { useState } from 'react'
import Comment from './Comment/Comment'

export default function CommentThread({ stl, commentThread }) {
	const { avatar, firstName, lastName, date, time, text } = commentThread
	const obj = {
		stl,
		avatar,
		firstName,
		lastName,
		date,
		time,
		text,
		replyCount: commentThread.answers.length,
	}

	const [showComments, setShowComments] = useState(false)

	const toggleComments = () => {
		setShowComments(prevShowComments => !prevShowComments)
	}
	return (
		<div>
			<Comment {...obj} toggleComments={toggleComments}></Comment>
			{
				<div
					className={`${stl.wrapperAnswerComment} ${
						showComments ? stl.open : ''
					} `}
				>
					<div style={{ minHeight: 0 }}>
						{commentThread.answers.map((item, i) => {
							const { avatar, firstName, lastName, date, time, text } = item
							const obj2 = {
								stl,
								avatar,
								firstName,
								lastName,
								date,
								time,
								text,
							}
							return <Comment {...obj2} key={i}></Comment>
						})}
					</div>
				</div>
			}
		</div>
	)
}
