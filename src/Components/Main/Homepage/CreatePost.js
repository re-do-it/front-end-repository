import './CreatePost.css';

import Form from 'react-bootstrap/Form';

function CreatePost(props) {
	return (
		<Form className='create-post d-flex flex-column align-items-center p-3 gap-3'>
			<Form.Control className='title-input' type='text' placeholder='Title' />

			<Form.Control
				className='body-input d-flex justify-content-start'
				type='text'
				placeholder='Your Text'
			/>

			<div className='bottom-button-container d-flex justify-content-end gap-2'>
				<button className='btn'>Post</button>
			</div>
		</Form>
	);
}

export default CreatePost;
