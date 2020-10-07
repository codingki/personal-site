import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Layout from '../components/global/Layout';

import Header from '../components/pages/home/Header';
import PostContainer from '../components/pages/home/PostContainer';
import WorkContainer from '../components/pages/home/WorkContainer';
import { getPostForHome } from '../lib/posts';
import { getWorksForHome } from '../lib/works';
import Head from 'next/head';
export async function getStaticProps() {
	const allPostsData = getPostForHome();
	const allWorksData = getWorksForHome();

	return {
		props: {
			allPostsData,
			allWorksData,
		},
	};
}

export default function App({ allPostsData, allWorksData }) {
	return (
		<>
			<Head>
				<title>Welcome to my site</title>
				<meta
					property="og:image"
					content={`https://images.bannerbear.com/requests/images/000/284/819/original/b5a817a4a421acfec7b14738c169931d9621431d.png?1602045540`}
				/>
				<meta name="og:title" content="Welcome to my site" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Layout page="home">
				<Header />
				<PostContainer data={allPostsData} />
				<WorkContainer data={allWorksData} />
			</Layout>
		</>
	);
}
