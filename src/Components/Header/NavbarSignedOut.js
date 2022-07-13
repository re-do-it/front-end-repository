import './NavBarSignedOut.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';

function NavbarSignedOut(props) {
	let navigate = useNavigate();

	// function for the logo button to redirect to the home
	function logoButton(event) {
		event.preventDefault();
		navigate('/');
		console.log('clicked');
	}

	// function that will work with the search
	function handleSubmit() {
		console.log('click from handleSubmit');
	}

	// function for the login
	function handleLogIn(event) {
		event.preventDefault();
		navigate('/login');
	}

	// function for signUp
	function handleSignUp(event) {
		event.preventDefault();
		navigate('/signup');
	}

	//function for new post
	function handleNewPost(event) {
		event.preventDefault();
		navigate('/newpost');
	}
	// function for user
	function handleUser(event) {
		event.preventDefault();
		navigate('/user');
	}

	return (
			<Navbar className='form fluid-container navbar'>
				<Container className='d-flex align-items-center justify-content-space-between'>
					<Navbar.Brand className='d-flex align-items-center'>
						<img src='asdfasdfasdf' alt='logo' onClick={logoButton} />
					</Navbar.Brand>
					<Form>
						<Form.Control
							className='input search-bar'
							type='text'
							placeholder='Search Redo-it'
						/>
					</Form>
					<Nav className='d-flex align-items-center justify-content-center'>
						<Nav.Link
							className='d-flex align-items-center justify-content-center'
							onClick={handleLogIn}>
							<button className='btn' type='submit'>
								Log In
							</button>
						</Nav.Link>

						<Nav.Link
							className='d-flex align-items-center justify-content-center'
							onClick={handleSignUp}>
							<button className='btn' type='submit'>
								Sign Up
							</button>
						</Nav.Link>

						<Nav.Link
							className='d-flex align-items-center justify-content-center'
							onClick={handleNewPost}>
							<button className='btn' type='submit'>
								Create a Post
							</button>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
	);
}

export default NavbarSignedOut;
