import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SharedLayout from './shared/SharedLayout'
import Home from './components/Home'
import Questions from './components/Questions'
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="questions" element={<Questions />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App
