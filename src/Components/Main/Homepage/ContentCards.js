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
   const [count, setCount] = useState(0);
    return (
			<div className='cards'>
				<Card>
					<Card.Header className='header'>
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
					<div className='arrows'>
						<button>
							<BsFillArrowUpSquareFill className='arrow' />
						</button>
						<button>
							<BsFillArrowDownSquareFill className='arrow' />
						</button>
					</div>
					<Card.Body className='cardBody'>
						<Card.Title>insert title</Card.Title>
						<Card.Text>
							With supporting text below as a natural lead-in to additional
							content.
						</Card.Text>
						<Button className='commentButton' variant='primary'>
							comments
						</Button>
					</Card.Body>
				</Card>
			</div>
		);
}

export default ContentCards;