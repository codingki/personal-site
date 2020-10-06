import React from 'react';
import Layout from '../components/global/Layout';

import PostContainer from '../components/pages/blog/PostContainer';
import { getSortedPostsData } from '../lib/posts';
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();

	return {
		props: {
			allPostsData,
		},
	};
}

export default function App({ allPostsData }) {
	return (
		<Layout page="blog">
			<PostContainer data={allPostsData} />
		</Layout>
	);
}
