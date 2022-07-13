import FilterPosts from './Homepage/FilterPosts';
import { useState } from 'react';
import ContentCards from './Homepage/ContentCards';
import './Homepage.css';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function Homepage(props) {
	const [currentPosts, setCurrentPosts] = useState([]);
	//fetch all the posts
	const getPosts = async () => {
		try {
			const res = await axios.get(`https://redoit-api.herokuapp.com/api/posts`);
			let data = res.data;
			console.log(data);
			setCurrentPosts(data.reverse());
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div className='mt-2 d-flex flex-column gap-2'>
			<FilterPosts />
			{/* map through the fetched data and display them using the card */}
			{currentPosts.map((post) => {
				return (
					<ContentCards
						title={post.title}
						body={post.body}
						createdAt={post.createdAt}
						id={post._id}
						getPosts={getPosts}
					/>
				);
			})}
		</div>
	);
}

export default Homepage;
