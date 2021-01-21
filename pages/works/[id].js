import React, { useState, useEffect } from 'react';
import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';
import { View, Image } from 'react-native';
import Text from '../../components/utils/StyledText';
import Colors from '../../constants/Colors';
import Layout from '../../components/global/Layout';
import Wrapper from '../../components/global/Wrapper';
import Button from '../../components/button/Tag';
import Button2 from '../../components/button/MobileButton';
import htmr from 'htmr';
import { Ionicons } from '@expo/vector-icons';
import { getAllWorksIds, getWorksData } from '../../lib/works';
import Head from 'next/head';
export default function App({ postData }) {
	const tags = postData.category.split(', ');
	const tech = postData.technology.split(', ');
	const [isTabletOrMobileDevice, setIsTabletOrMobileDevice] = useState(false);
	useEffect(() => {
		setIsTabletOrMobileDevice(itMob);
	}, []);
	const itMob = useMediaQuery({
		maxDeviceWidth: 768,
	});
	function HTMLComponent() {
		const options = {
			transform: {
				p: `fontSize: 16;
			lineHeight: 24;
			fontFamily: 'Montserrat';`,
			},
			preserveAttributes: [],
			dangerouslySetChildren: ['style'],
		};
		return htmr(postData.contentHtml, options);
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

						<View
							style={{
								flex: 1,
								padding: 20,
								paddingVertical: 20,
								flexDirection: 'column',
							}}
						>
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 20,
									flexWrap: 'wrap',
								}}
							>
								{tags.map((x, index) => (
									<Button key={index} text={x} orange />
								))}
							</View>
							<View
								style={{
									flexDirection: 'row',
									marginBottom: 20,
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
							<Text medium style={{ fontSize: 20 }}>
								About the project :
							</Text>
							{HTMLComponent()}
							<Text medium style={{ fontSize: 20 }}>
								Technology used :
							</Text>
							<View
								style={{
									flexDirection: 'row',
									marginTop: 10,
									flexWrap: 'wrap',
								}}
							>
								{tech.map((x, index) => (
									<Button key={index} text={x} />
								))}
							</View>

							<Text medium style={{ marginTop: 20, fontSize: 20 }}>
								Deployment :
							</Text>
							<View
								style={{
									flexDirection: 'row',
									marginTop: 10,
									flexWrap: 'wrap',
								}}
							>
								{postData.web && (
									<a
										style={{ textDecoration: 'none' }}
										href={postData.web}
										target="_blank"
									>
										<Button text="Web" blue />
									</a>
								)}
								{postData.android && (
									<a
										style={{ textDecoration: 'none' }}
										href={postData.android}
										target="_blank"
									>
										<Button text="Android" blue />
									</a>
								)}
								{postData.ios && (
									<a
										style={{ textDecoration: 'none' }}
										href={postData.ios}
										target="_blank"
									>
										<Button text="ios" blue />
									</a>
								)}
								{postData.expo && (
									<a
										style={{ textDecoration: 'none' }}
										href={postData.expo}
										target="_blank"
									>
										<Button text="Expo" blue />
									</a>
								)}
								{postData.github && (
									<a
										style={{ textDecoration: 'none' }}
										href={postData.github}
										target="_blank"
									>
										<Button text="Github" blue />
									</a>
								)}
								{postData.github &&
									postData.expo &&
									postData.ios &&
									postData.android &&
									postData.web && <>-</>}
							</View>
							{/* <div
								style={{ fontFamily: 'Montserrat', lineHeight: 1.8 }}
								dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
							/> */}
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
							<a
								style={{ textDecoration: 'none' }}
								href={
									'https://twitter.com/intent/tweet?text=' +
									postData.title +
									' by @kikiding ' +
									'https://kikiding.space/works/' +
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
