import React, { useState, createContext } from 'react'
import data from '../data/data'
import Question from '../components/Question'
const QuestionContext = createContext()
export function QuestionContextProvider({ children }) {
	const [questions, setQuestions] = useState(data)
	const questionElements = questions.map((question) => (
		<Question {...question} />
	))
	return (
		<QuestionContext.Provider value={{ questionElements }}>
			{children}
		</QuestionContext.Provider>
	)
}

export default QuestionContext
