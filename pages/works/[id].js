import React from 'react';
import { View, Image } from 'react-native';
import Text from '../../components/utils/StyledText';
import Colors from '../../constants/Colors';
import Layout from '../../components/global/Layout';
import Wrapper from '../../components/global/Wrapper';
import Button from '../../components/button/Tag';
import { Ionicons } from '@expo/vector-icons';
import { getAllWorksIds, getWorksData } from '../../lib/works';
import Head from 'next/head';
export default function App({ postData }) {
	const tags = postData.category.split(', ');
	return (
		<>
			<Head>
				<title>{postData.title}</title>
				<link
					href="https://fonts.googleapis.com/css?family=Montserrat"
					rel="stylesheet"
				/>
			</Head>
			<Layout page="works">
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
									{postData.date} | {postData.category}
								</Text>
							</View>
						</View>

						<View
							style={{
								padding: 20,
								paddingVertical: 20,
								flexDirection: 'column',
							}}
						>
							<View
								style={{
									flexDirection: 'row',
								}}
							>
								<View style={{ flex: 1 }}>
									<Image
										style={{
											width: null,
											minHeight: 300,

											borderColor: Colors.black,
											borderWidth: 3,
											borderBottomWidth: 6,
											borderRadius: 12,
										}}
										resizeMode="cover"
										source={{
											uri: postData.image,
										}}
									/>
								</View>
							</View>

							<div
								style={{ fontFamily: 'Montserrat', lineHeight: 1.8 }}
								dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
							/>
							<View style={{ flexDirection: 'row', marginTop: 20 }}>
								{tags.map((x) => (
									<Button text={x} orange />
								))}
							</View>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
							<a
								rel="canonical"
								style={{ textDecoration: 'none' }}
								href={
									'https://twitter.com/intent/tweet?text=' +
									postData.title +
									' by @kikiding'
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
	const paths = getAllWorksIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postData = await getWorksData(params.id);
	return {
		props: {
			postData,
		},
	};
}
