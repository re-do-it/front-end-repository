import React from 'react';
import { Button, Card } from 'react-bootstrap';
import  { useState } from 'react';



function ContentCards(props) {
   const [count, setCount] = useState(0);
    return (
			<div className='cards'>
				<Card>
					<Card.Header className='header'>
						Featured
						<div class='dropdown'>
							<button
								class='btn btn-secondary dropdown-toggle'
								type='button'
								id='dropdownMenuButton'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'>
								Dropdown button
							</button>
							<div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
								<a className='dropdown-item' href='#'>
									Action
								</a>
								<a className='dropdown-item' href='#'>
									Another action
								</a>
								<a className='dropdown-item' href='#'>
									Something else here
								</a>
							</div>
						</div>
					</Card.Header>
					<Card.Body>
						<div className='arrows'>
							<i className='bi bi-arrow-up-square-fill' height='100px'></i>
							<i className='bi bi-arrow-down-square-fill'></i>
						</div>

						<Card.Title>Special title treatment</Card.Title>
						<Card.Text>
							With supporting text below as a natural lead-in to additional
							content.
						</Card.Text>
						<Button variant='primary'>comment</Button>
					</Card.Body>
				</Card>
			</div>
		);
}

export default ContentCards;