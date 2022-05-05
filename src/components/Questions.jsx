import React, { useContext } from 'react'
import QuestionContext from '../context/QuestionContext'

function Questions() {
	const { questionElements } = useContext(QuestionContext)
	return <section className="info">{questionElements}</section>
}

export default Questions
