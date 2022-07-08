import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import ContentCards from './Homepage/ContentCards';
import CreatePost from './Homepage/CreatePost';
import FilterPosts from './Homepage/FilterPosts';

function Homepage(props) {
	return (
		<div>
			<Routes>
				<Route path='/createpost' element={<CreatePost />} />
			</Routes>
			<FilterPosts />
			<ContentCards />
		</div>
	);
}

export default Homepage;
