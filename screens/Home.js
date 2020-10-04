import React from 'react';
import { StyleSheet } from 'react-native';
import Layout from '../components/global/Layout';

import Header from '../components/pages/home/Header';
import PostContainer from '../components/pages/home/PostContainer';
import WorkContainer from '../components/pages/home/WorkContainer';

export default function App({ navigation }) {
	return (
		<Layout navigation={navigation} page="home">
			<Header />
			<PostContainer />
			<WorkContainer />
		</Layout>
	);
}
