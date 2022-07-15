import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setLoggedIn }) {
	let navigate = useNavigate();
	const initialFormState = {
		email: '',
		password: '',
	};

	const [formState, setFormState] = useState(initialFormState);

	function handleChange(event) {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log('you clicked me');
		// setFormState(initialFormState);
	}
	const handleLogIn = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				'https://redoit-api.herokuapp.com/api/users/login',
				formState
			);
			if (response.status === 200) {
				setLoggedIn(true);
				navigate('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container className='login-form-container'>
			<Form
				onSubmit={handleLogIn}
				id='sign-in-form'
				className='text-center form mt-5 login-form'
				style={{
					padding: '1em 3em',
				}}>
				<h1 className='mb-5 fs-3 fw-normal'>Please Log In</h1>

				<Form.Group controlId='email'>
					<Form.Control
						type='email'
						size='lg'
						placeholder='Email address'
						className='position-relative mb-1 input'
						value={formState.email}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='password'>
					<Form.Control
						type='password'
						size='lg'
						placeholder='Password'
						autoComplete='current-password'
						className='position-relative mb-4 input'
						value={formState.password}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group
					controlId='remember-me'
					className='d-flex justify-content-center mb-5'>
					<Form.Check label='Remember me' />
				</Form.Group>
				<div className='button-box'>
					<div className='d-grid mb-5 signup button'>
						<button className='btn' type='button'>
							<p className='signup-text'>Don't have an account?</p>
							<a href='' className='signup-text'>
								Sign up!
							</a>
						</button>
					</div>
					<div className='d-grid mb-5 signin button'>
						<button className='btn' type='submit'>
							Sign In
						</button>
					</div>
				</div>
			</Form>
		</Container>
	);
}

export default LoginPage;
