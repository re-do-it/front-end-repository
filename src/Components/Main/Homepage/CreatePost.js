import './CreatePost.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePost(props) {
    const navigate = useNavigate();
      const [searchString, setSearchString] = useState({
				title: '',
				body: '',
			});

    function handleChange(event) {
			setSearchString(event.target.value);
          
		} 
        const handleSubmit =async (event) => {
		event.preventDefault();
        try {
					const response = await axios.post(
						'https://redoit-api.herokuapp.com/api/post',
						searchString
					);
					// const response = await fetch('http://localhost:3111/icecreams', {
					// 	method: 'POST',
					// 	body: JSON.stringify(flavor),
					// 	headers:{
					// 		'Content-type': 'application/json'
					// 	}
					// });
					console.log(response);
					if (response.status === 201) {
						console.log(response)
					}
				} catch (error) {
					console.log(error);
				}
				
        }
	return (
		<Form className='create-post d-flex flex-column align-items-center p-3 gap-3' onSubmit={handleSubmit}>
			<Form.Control className='title-input' type='text' placeholder='Title' onChange={handleChange} />

			<Form.Control
				className='body-input d-flex justify-content-start'
				type='text'
				placeholder='Your Text' onChange={handleChange}
			/>

			<div className='bottom-button-container d-flex justify-content-end gap-2'>
				<button className='btn'>Cancel</button>
				<button className='btn'>Post</button>
			</div>
		</Form>
	);
    }



export default CreatePost;
