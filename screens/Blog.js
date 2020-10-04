import React from 'react';
import Layout from '../components/global/Layout';

import PostContainer from '../components/pages/blog/PostContainer';
export default function App({ navigation }) {
	return (
		<Layout navigation={navigation} page="blog">
			<PostContainer />
		</Layout>
	);
}
