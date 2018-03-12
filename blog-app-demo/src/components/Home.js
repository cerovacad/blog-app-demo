import React from 'react'
import BlogPostList from './BlogPostList';

const Home = (props) => {
	return (
		<div>
			<h1>Home</h1>
			<BlogPostList/>
			<button
				className='btn btn-primary'  
				style={{marginTop: '1em'}}
				onClick={() => {props.history.push('/new')}}>Add new</button>
		</div>
	)
}

export default Home;