import React from 'react'
import { Outlet } from 'react-router-dom'
import { QuestionContextProvider } from '../context/QuestionContext'
function SharedLayout() {
	return (
		<QuestionContextProvider>
			<main>
				<div className="container">
					<h3>questions and answers about login</h3>
					<Outlet />
				</div>
			</main>
		</QuestionContextProvider>
	)
}

export default SharedLayout
