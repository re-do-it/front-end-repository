import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignupPage(props) {
	const initialFormState = {
		username: '',
		password: '',
		firstName: '',
		LastName: '',
	};

	const [formState, setFormState] = useState(initialFormState);

	function handleChange(event) {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log('you clicked me');
		console.log(formState);
		// setFormState(initialFormState);
	}

	return (
		<div>
			<Container
				id='main-container'
				style={{ height: '100vh', display: 'grid' }}>
				<Form
					onSubmit={handleSubmit}
					id='sign-in-form'
					className='text-center w-100'
					style={{
						padding: '1em 3em',
						boxShadow: '0 4px 15px 0',
						backgroundColor: 'rgb(250,250,255)',
					}}>
					<h1 className='mb-5 fs-3 fw-normal'>Please Sign Up</h1>
					<Form.Group controlId='firstName'>
						<Form.Control
							type='text'
							size='lg'
							placeholder='First Name'
							className='position-relative mb-1'
							value={formState.firstName}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId='lastName'>
						<Form.Control
							type='text'
							size='lg'
							placeholder='Last Name'
							className='position-relative mb-1'
							value={formState.lastName}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId='username'>
						<Form.Control
							type='email'
							size='lg'
							placeholder='Email address'
							autoComplete='username'
							className='position-relative mb-1'
							value={formState.username}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId='password'>
						<Form.Control
							type='password'
							size='lg'
							placeholder='Password'
							autoComplete='current-password'
							className='position-relative mb-4'
							value={formState.password}
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group
						controlId='remember-me'
						className='d-flex justify-content-center mb-5'>
						<Form.Check label='Remember me' />
					</Form.Group>
					<div className='d-grid mb-5'>
						<Button variant='primary' size='lg' type='submit'>
							Sign In
						</Button>
					</div>
					<p className='text-muted'>&copy; 2021-2022</p>
				</Form>
			</Container>
		</div>
	);
}

export default SignupPage;
