import { useState } from 'react';
import ContentCards from './Homepage/ContentCards';
import './Homepage.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage(props) {
	let navigate = useNavigate();
	const [currentPosts, setCurrentPosts] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	//fetch all the posts
	const getPosts = async () => {
		try {
			const res = await axios.get(`https://redoit-api.herokuapp.com/api/posts`);
			let data = res.data;
			setCurrentPosts(data.reverse());
		} catch (error) {
			console.log(error);
		}
	};


	useEffect(() => {
		getPosts();
	}, []);
	useEffect(() => {
		setSearchInput(props.inputQuery);
	});
	function topFilter() {
		let topSorted = currentPosts.sort((a,b) => b.votes - a.votes);
		setCurrentPosts(topSorted)
		navigate('/')
	
	}
	function worstFilter() {
		let botSorted = currentPosts.sort((a, b) => a.votes - b.votes);
		setCurrentPosts(botSorted);
		navigate('/');

	}
	function newFilter() {
		getPosts();
		navigate('/');
	
	}

	return (
		<>
			<div className='mt-2 d-flex flex-column gap-2'>
				
				<div className='filter-posts fluid-container d-flex align-items-center p-3 gap-3'>
					<button className='hot btn' onClick={newFilter}>New</button>
					<button className='top btn' onClick={topFilter}>
						Top
					</button>
					<button className='new btn' onClick={worstFilter}>
						Worst
					</button>
				</div>

				{currentPosts
					.filter((post) => {
						if (searchInput == '') {
							return post;
						} else if (
							post.title.toLowerCase().includes(searchInput.toLowerCase())
						) {
							return post;
						}
					})
					.map((post) => {
						return (
							<ContentCards
								title={post.title}
								body={post.body}
								createdAt={post.createdAt}
								id={post._id}
								getPosts={getPosts}
								votes={post.votes}
								key={post._id}
							/>
						);
					})}
			</div>
		</>
	);
}

export default Homepage;
