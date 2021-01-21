import React from 'react';
import { View } from 'react-native';
import Text from '../../components/utils/StyledText';
import Colors from '../../constants/Colors';
import Layout from '../../components/global/Layout';
import Wrapper from '../../components/global/Wrapper';
import Button from '../../components/button/Tag';
import htmr from 'htmr';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
var moment = require('moment');
export default function App({ postData }) {
	const tags = postData.category.split(', ');
	const Paragraph = styled.p`
		fontsize: 16;
		lineheight: 24;
		fontfamily: 'Montserrat';
	`;
	const transform = {
		p: Paragraph,
	};
	function HTMLComponent() {
		return htmr(postData.contentHtml, { transform });
	}
	return (
		<>
			<Head>
				<title>{postData.title}</title>
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat"
					rel="stylesheet"
				/>
				<meta name="description" content={postData.excerpt} />
				<meta
					property="og:image"
					content={`https://images.bannerbear.com/requests/images/000/288/700/original/a3055043626673f8c6fc4bbee64221a93a9ae266.png?1602078565`}
				/>
				<meta name="og:title" content={postData.title} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Layout page="blog">
				<Wrapper>
					<View
						style={{
							flex: 1,
							backgroundColor: 'white',
							borderColor: Colors.black,
							borderWidth: 3,
							borderBottomWidth: 6,
							borderRadius: 12,
							marginTop: 50,
						}}
					>
						<View
							style={{
								backgroundColor: Colors.blue,
								borderTopRightRadius: 6,
								borderTopLeftRadius: 6,
								padding: 20,
								borderBottomWidth: 3,
								borderColor: Colors.black,
							}}
						>
							<Text bold h3 style={{ color: 'white' }}>
								{postData.title}
							</Text>
						</View>

						<View style={{ flexDirection: 'row' }}>
							<View
								style={{
									backgroundColor: Colors.orange,
									padding: 20,
									paddingVertical: 10,
									borderBottomWidth: 3,
									borderColor: Colors.black,
									borderRightWidth: 3,
									borderBottomRightRadius: 12,
								}}
							>
								<Text medium style={{ color: 'white', fontSize: 14 }}>
									{moment(postData.date).format('D MMM YY')} |{' '}
									{postData.category}
								</Text>
							</View>
						</View>

						<View style={{ padding: 20, paddingVertical: 10 }}>
							{HTMLComponent()}
							{/* <HTML
								textSelectable
								html={postData.contentHtml}
								baseFontStyle={{
									fontSize: 16,
									lineHeight: 24,
									fontFamily: 'Montserrat',
								}}
								tagsStyles={{
									img: { width: 600 },
								}}
							/> */}
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
							<a
								style={{ textDecoration: 'none' }}
								href={
									'https://twitter.com/intent/tweet?text=' +
									postData.title +
									' by @kikiding ' +
									'https://kikiding.space/blog/' +
									postData.id
								}
								target="_blank"
							>
								<View
									style={{
										backgroundColor: '#1DA1F2',
										padding: 20,
										paddingVertical: 10,
										borderTopWidth: 3,
										borderColor: Colors.black,
										borderLeftWidth: 3,
										borderTopLeftRadius: 12,
									}}
								>
									<View
										style={{
											flexDirection: 'row',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<Ionicons name="logo-twitter" size={16} color="white" />
										<Text
											bold
											style={{ color: 'white', fontSize: 16, marginLeft: 5 }}
										>
											Tweet this
										</Text>
									</View>
								</View>
							</a>
						</View>
					</View>
				</Wrapper>
			</Layout>
		</>
	);
}
export async function getStaticPaths() {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
}
