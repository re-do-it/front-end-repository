import React from 'react';
import { Button, Card, DropdownButton,Dropdown } from 'react-bootstrap';
import  { useState } from 'react';
import './contentcards.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	BsFillArrowUpSquareFill,
	BsFillArrowDownSquareFill,
} from 'react-icons/bs';


function ContentCards(props) {
   const [vote, setVote] = useState(0);
   let incrementVote = () => {
			setVote(vote + 1);
		};

	let decrementVote = () => {
			setVote(vote - 1);

		};
    return (
			<div className='cards'>
				<Card className='form'>
					<Card.Header className='header'>
						<div className='d-flex flex-row'>
							<button onClick={incrementVote}>
								<BsFillArrowUpSquareFill
									className='arrow'
									
								/>
							</button>
							<span className='m-3'>{vote}</span>
							<button onClick={decrementVote} >
								<BsFillArrowDownSquareFill className='arrow m-2' />
							</button>
						</div>
						Posted by: User123 4 hours ago
						<DropdownButton
							className='drop-down'
							id='dropdown-basic-button'
							title=''>
							<Dropdown.Item href='#/action-1'>Delete post</Dropdown.Item>
							<Dropdown.Item href='#/action-2'>Edit Post</Dropdown.Item>
							<Dropdown.Item href='#/action-3'></Dropdown.Item>
						</DropdownButton>
					</Card.Header>
					<Card.Body className='cardBody'>
						<Card.Title>insert title</Card.Title>
						<Card.Text>
							With supporting text below as a natural lead-in to additional
							content.
						</Card.Text>
						<button className='btn d-flex justify-content-start'>
							comments
						</button>
					</Card.Body>
				</Card>
			</div>
		);
}

export default ContentCards;