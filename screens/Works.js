import React from 'react';
import Layout from '../components/global/Layout';

import WorkContainer from '../components/pages/works/WorkContainer';
export default function App({ navigation }) {
	return (
		<Layout navigation={navigation} page="works">
			<WorkContainer />
		</Layout>
	);
}
