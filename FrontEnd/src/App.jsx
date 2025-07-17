import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'

function App() {

	const COMPONENT = (
		<>
		<BrowserRouter>
			<div className="container">
				<Header/>
				<Routes>
					<Route path='/' element={<Navigate to='/dashboard'/>}/>
					<Route path='/dashboard' element={<Dashboard/>}/>
					<Route path='/register' element={<Register/>}/>
					<Route path='/login' element={<Login/>}/>
				</Routes>
				<ToastContainer/>
			</div>
		</BrowserRouter>
		</>
	)

	return COMPONENT
}

export default App

// EOF
