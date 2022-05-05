import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
	return (
		<>
			<div>Home</div>
			<Link to="questions">
				<button>questions and answers</button>
			</Link>
		</>
	)
}

export default Home
