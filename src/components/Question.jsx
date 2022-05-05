import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Question = ({ id, title, info }) => {
	const [showInfo, setShowInfo] = useState(false)
	const handleClick = () => {
		setShowInfo((prev) => !prev)
	}

	return (
		<article className="question" key={id}>
			<header>
				<h4>{title}</h4>
				<button className="btn" onClick={handleClick}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>

			{showInfo && <p>{info}</p>}
		</article>
	)
}

export default Question
