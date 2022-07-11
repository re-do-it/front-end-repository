import './CreatePost.css'

function CreatePost(props) {
    return (
			<form className='create-post d-flex flex-column align-items-center p-3 gap-3'>
				<input className='title-input' type='text' placeholder='Title' />
				<input className='body-input d-flex justify-content-start' type='text' placeholder='Your text' />
                <div className='bottom-button-container d-flex justify-content-end gap-2'>
                    <button className='btn'>Save as draft</button>
                    <button className='btn'>Post</button>
                </div>
			</form>
		);
}

export default CreatePost;