import React from 'react';
import { Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import './contentcards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	BsFillArrowUpSquareFill,
	BsFillArrowDownSquareFill,
} from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ContentCards({ title, body, createdAt, id, getPosts }) {
	// const { id } = useParams();
	const navigate = useNavigate();

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
		//GET the post with the given id
		try {
			const getResp = await axios.get(
				`https://redoit-api.herokuapp.com/api/posts/${id}`
			);
			const getRespData = await getResp.json();
			console.log(getRespData);
		} catch (error) {}
		//allow user to edit in the newpost component
		//PUT the edited post to the db
		navigate('/newpost');
	};

	return (
		<div className='cards'>
			<Card className='form'>
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
					Posted by: {createdAt}
					Id: {id}
					<DropdownButton
						className='drop-down'
						id='dropdown-basic-button'
						title=''>
						<Dropdown.Item onClick={handleDelete} href='#/action-1'>
							Delete post
						</Dropdown.Item>
						<Dropdown.Item onClick={handleEdit} href='#/action-2'>
							Edit Post
						</Dropdown.Item>
					</DropdownButton>
				</Card.Header>
				<Card.Body className='cardBody'>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{body}</Card.Text>
					<button className='btn d-flex justify-content-start'>comments</button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default ContentCards;
