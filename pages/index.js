import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Layout from '../components/global/Layout';

import Header from '../components/pages/home/Header';
import PostContainer from '../components/pages/home/PostContainer';
import WorkContainer from '../components/pages/home/WorkContainer';
import { getPostForHome } from '../lib/posts';
import { getWorksForHome } from '../lib/works';
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
		<Layout page="home">
			<Header />
			<PostContainer data={allPostsData} />
			<WorkContainer data={allWorksData} />
		</Layout>
	);
}
