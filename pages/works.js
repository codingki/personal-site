import React from 'react';
import Layout from '../components/global/Layout';

import WorkContainer from '../components/pages/works/WorkContainer';

import { getSortedWorksData } from '../lib/works';
export async function getStaticProps() {
	const allWorksData = getSortedWorksData();

	return {
		props: {
			allWorksData,
		},
	};
}
export default function App({ allWorksData }) {
	return (
		<Layout page="works">
			<WorkContainer data={allWorksData} />
		</Layout>
	);
}
