import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

function NavbarSignedIn(props) {
	let navigate = useNavigate();

	// function for the logo button to redirect to the home
	function logoButton(event) {
		event.preventDefault();
		navigate('/');
	}

	// function that will work with the search
	function handleSubmit() {
		console.log('click from handleSubmit');
	}

	return (
		<div className='navbarSO'>
			<Navbar className='form'>
				<Container>
					<Navbar.Brand>
						<img src='asdfasdf' alt='my image' onClick={logoButton} />
					</Navbar.Brand>
					<Form>
						<Form.Control
							className='input'
							type='text'
							placeholder='Search Redo-it'
						/>
					</Form>
					<Nav className='me-auto'>
						<Nav.Link>
							<Dropdown>
								<Dropdown.Toggle className='btn'>User</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href='#/signout'>Sign out</Dropdown.Item>
									<Dropdown.Item href='#/profile'>My profile</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Nav.Link>
					</Nav>

					<Nav.Link className='d-flex align-items-center justify-content-center'>
						<button className='btn' type='submit'>
							Create a Post
						</button>
					</Nav.Link>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavbarSignedIn;
