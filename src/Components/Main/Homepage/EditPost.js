import './CreatePost.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function EditPost() {
	const navigate = useNavigate();
	const params = useParams();

	const [currentPost, setCurrentPost] = useState([]);
	// const [postState, setPostState] = useState(currentPost);

	//fetch all the posts
	const getPost = async () => {
		try {
			const res = await axios.get(
				`https://redoit-api.herokuapp.com/api/posts/${String(params.id)}`
			);
			let data = res.data;
			setCurrentPost(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPost();
	}, []);

	function handleChange(event) {
		setCurrentPost({ ...currentPost, [event.target.id]: event.target.value });
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.put(
				`https://redoit-api.herokuapp.com/api/posts/${String(params.id)}`,
				currentPost
			);
			console.log(response);
			if (response.status === 200) {
				navigate('/');
			}
		} catch (error) {
			console.log(error);
		}
	};

	function handleCancel(event) {
		event.preventDefault();
		navigate('/');
	}

	return (
		<div className='d-flex flex-column p-3 gap-3 align-items-center create-post-container'>
			<Form
				className='create-post d-flex flex-column p-3 gap-3 mt-5 justify-content-center'
				onSubmit={handleSubmit}>
				<Form.Group controlId='title'>
					<Form.Control
						className='title-input'
						type='text'
						// placeholder='Title'
						// placeholder={currentPost.title}
						value={currentPost.title}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='body'>
					<Form.Control
						className='body-input d-flex justify-content-start'
						type='text'
						// placeholder='Your Text'
						// placeholder={currentPost.body}
						onChange={handleChange}
						value={currentPost.body}
					/>
				</Form.Group>
				<div className='bottom-button-container d-flex justify-content-end gap-2'>
					<button className='btn' type='button' onClick={handleCancel}>
						Cancel
					</button>
					<button className='btn' type='submit'>
						Update
					</button>
				</div>
			</Form>
		</div>
	);
}

export default EditPost;
