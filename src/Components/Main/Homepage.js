import FilterPosts from './Homepage/FilterPosts';
import { useState } from 'react';
import ContentCards from './Homepage/ContentCards';
import './Homepage.css'

function Homepage(props) {
	return (
		<div className="mt-2 d-flex flex-column gap-2">
			<FilterPosts />
			<ContentCards />
		</div>
	);
}

export default Homepage;
