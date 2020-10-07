import React from 'react';
import Layout from '../components/global/Layout';

import WorkContainer from '../components/pages/works/WorkContainer';
import Head from 'next/head';
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
			<Head>
				<title>Works</title>
				<meta
					property="og:image"
					content={`https://images.bannerbear.com/requests/images/000/284/819/original/b5a817a4a421acfec7b14738c169931d9621431d.png?1602045540`}
				/>
				<meta name="og:title" content="Works by kikiding.space" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<WorkContainer data={allWorksData} />
		</Layout>
	);
}
