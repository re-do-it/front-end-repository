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
	const [postState, setPostState] = useState(currentPost);

	//fetch all the posts
	const getPost = async () => {
		try {
			const res = await axios.get(
				`https://redoit-api.herokuapp.com/api/posts/${String(params.id)}`
			);
			let data = res.data;
			console.log(data);
			setCurrentPost(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPost();
	}, []);

	function handleChange(event) {
		setPostState({ ...postState, [event.target.id]: event.target.value });
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.put(
				`https://redoit-api.herokuapp.com/api/posts/${String(params.id)}`,
				postState
			);
			console.log(response);
			if (response.status === 200) {
				navigate('/');
				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Form
			className='create-post d-flex flex-column align-items-center p-3 gap-3 mt-5'
			onSubmit={handleSubmit}>
			<Form.Group controlId='title'>
				<Form.Control
					className='title-input'
					type='text'
					// placeholder='Title'
					placeholder={currentPost.title}
					value={postState.title}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group controlId='body'>
				<Form.Control
					className='body-input d-flex justify-content-start'
					type='text'
					// placeholder='Your Text'
					placeholder={currentPost.body}
					onChange={handleChange}
					value={postState.body}
				/>
			</Form.Group>

			<div className='bottom-button-container d-flex justify-content-end gap-2'>
				<button className='btn'>Cancel</button>
				<button className='btn'>Update</button>
			</div>
		</Form>
	);
}

export default EditPost;
