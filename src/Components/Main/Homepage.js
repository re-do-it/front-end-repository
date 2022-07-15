import FilterPosts from './Homepage/FilterPosts';
import { useState } from 'react';
import ContentCards from './Homepage/ContentCards';
import './Homepage.css';
import axios from 'axios';
import { useEffect } from 'react';

function Homepage(props) {
	const [currentPosts, setCurrentPosts] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	//fetch all the posts
	const getPosts = async () => {
		try {
			const res = await axios.get(`https://redoit-api.herokuapp.com/api/posts`);
			// const res = await axios.get(`http://localhost:8000/api/posts`);
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

	return (
		<div className='mt-2 d-flex flex-column gap-2'>
			<FilterPosts />

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
						/>
					);
				})}
		</div>
	);
}

export default Homepage;
