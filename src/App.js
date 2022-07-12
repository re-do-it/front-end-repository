import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import NavbarSignedIn from '../src/Components/Header/NavbarSignedIn';
import NavbarSignedOut from '../src/Components/Header/NavbarSignedOut';
import Footer from '../src/Components/Footer';
import Homepage from '../src/Components/Main/Homepage';
import LoginPage from './Components/Main/LoginPage';
import SignupPage from './Components/Main/SignupPage';

import ContentCards from './Components/Main/Homepage/ContentCards';

import CreatePost from './Components/Main/Homepage/CreatePost';
import FilterPosts from './Components/Main/Homepage/FilterPosts';

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	return (
		<>
			<header>
				{loggedIn ? <NavbarSignedIn /> : <NavbarSignedOut />}
				<FilterPosts />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/signup' element={<SignupPage />} />
					<Route path='/newpost' element={<CreatePost />} />
				</Routes>
			</main>
			<footer style={{ position: 'fixed', bottom: '0' }}>
				<Footer />
			</footer>
		</>
	);
}

export default App;
