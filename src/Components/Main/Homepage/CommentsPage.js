import './CommentsPage.css';
import { useState, useEffect } from 'react';
import './contentcards.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import './contentcards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	BsFillArrowUpSquareFill,
	BsFillArrowDownSquareFill,
} from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import Comments from './Comments';

function CommentsPage({ title, body, createdAt, id, getPosts }) {
	const navigate = useNavigate();
	const params = useParams();

	const [currentPost, setCurrentPost] = useState([]);

	//fetch all the posts
	const getPost = async () => {
		try {
			const res = await axios.get(
				`https://redoit-api.herokuapp.com/api/posts/${String(params.id)}`
			);
			let data = res.data;
			console.log(data);
			setCurrentPost(data);
            setCurrentComments(data.comments.reverse())
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPost();
	}, []);

	const [currentComments, setCurrentComments] = useState([]);

	const initialCommentState = {
		title: '',
		body: '',
	};

	const [commentState, setCommentState] = useState(initialCommentState);

	function handleChange(event) {
		setCommentState({ ...commentState, [event.target.id]: event.target.value });
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(
				'https://redoit-api.herokuapp.com/comments',
				{...commentState,  postId: params.id}
			);
			console.log(response);
			if (response.status === 201) {
				navigate('/');
				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const [vote, setVote] = useState(0);
	let incrementVote = () => {
		setVote(vote + 1);
	};

	let decrementVote = () => {
		setVote(vote - 1);
	};

	const handleDelete = async () => {
		try {
			const response = await axios.delete(
				`https://redoit-api.herokuapp.com/api/posts/${String(id)}`
			);
			if (response.status === 204) {
				getPosts();
				navigate('/');
			}
		} catch (error) {}
	};

	const handleEdit = async () => {
		navigate(`/editpost/${String(id)}`);
	};

	return (
		<div>
			<div className='cards'>
				<Card className='form mt-3'>
					<Card.Header className='header'>
						<div className='d-flex flex-row'>
							<button onClick={incrementVote}>
								<BsFillArrowUpSquareFill className='arrow' />
							</button>
							<span className='m-3'>{vote}</span>
							<button onClick={decrementVote}>
								<BsFillArrowDownSquareFill className='arrow m-2' />
							</button>
						</div>
						<div className='d-flex flex-column justify-content-start align-items-start'>
							<span>Posted by: {currentPost.createdAt}</span>
							<span>Id:{currentPost._id}</span>
						</div>
						<DropdownButton
							className='drop-down'
							id='dropdown-basic-button'
							title=''>
							<Dropdown.Item onClick={handleDelete} href='#/action-1'>
								Delete post
							</Dropdown.Item>
							<Dropdown.Item onClick={handleEdit} value={id} href='#/action-2'>
								Edit Post
							</Dropdown.Item>
						</DropdownButton>
					</Card.Header>
					<Card.Body className='cardBody'>
						<Card.Title>{currentPost.title}</Card.Title>
						<Card.Text>{currentPost.body}</Card.Text>

						<br />
						<hr />

						<div className=''>
							<span className='d-flex p-1'>Make a comment</span>

							<Form
								className='form d-flex flex-column p-2 gap-2 mt-2 mb-5'
								onSubmit={handleSubmit}>
								<Form.Group controlId='title'>
									<Form.Control
										className='title-input'
										type='text'
										placeholder='Title'
										value={commentState.title}
										onChange={handleChange}
									/>
								</Form.Group>
								<Form.Group controlId='body'>
									<Form.Control
										className='body-input d-flex justify-content-start'
										type='text'
										placeholder='Your Comment'
										onChange={handleChange}
										value={commentState.body}
									/>
								</Form.Group>

								{/* <Form.Group
									controlId='postId'
									value={}
									type='text'
									onChange={handleChange}
									></Form.Group> */}

								<div className='d-flex justify-content-end'>
									<button className='btn'>Comment</button>
								</div>
							</Form>

							<span className='d-flex comments-title'>Comments</span>
							<div>
								{currentComments.map((comment) => {
									return (
										<Comments
											title={comment.title}
											body={comment.body}
											createdAt={comment.createdAt}
											id={comment._id}
										/>
									);
								})}
							</div>
						</div>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}

export default CommentsPage;
