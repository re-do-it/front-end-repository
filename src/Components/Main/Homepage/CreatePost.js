import './CreatePost.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function CreatePost(props) {
      const [searchString, setSearchString] = useState('');

    function handleChange(event) {
			setSearchString(event.target.value);
          
		} 
        function handleSubmit(event) {
		event.preventDefault();
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
