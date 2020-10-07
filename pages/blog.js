import React from 'react';
import Layout from '../components/global/Layout';
import Head from 'next/head';
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
			<Head>
				<title>Blog</title>
				<meta
					property="og:image"
					content={`https://images.bannerbear.com/requests/images/000/284/819/original/b5a817a4a421acfec7b14738c169931d9621431d.png?1602045540`}
				/>
				<meta name="og:title" content="Blog from kikiding.space" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<PostContainer data={allPostsData} />
		</Layout>
	);
}
