import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import Colors from '../../constants/Colors';
import TopNav from '../global/TopNav';
import MobileTopNav from '../global/MobileTopNav';
import Footer from '../global/Footer';
import MobileFooter from '../global/MobileFooter';

import * as Font from 'expo-font';
import {
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default function App(props) {
	const [isTabletOrMobileDevice, setIsTabletOrMobileDevice] = useState(false);
	useEffect(() => {
		setIsTabletOrMobileDevice(itMob);
	}, []);
	const itMob = useMediaQuery({
		maxDeviceWidth: 768,
	});

	return (
		<>
			<Head>
				<link
					rel="icon"
					type="image/png"
					href="https://i.ibb.co/vkyMyjz/rsz-11me.png"
				/>
			</Head>
			<View style={styles.container}>
				{isTabletOrMobileDevice ? (
					<MobileTopNav active={props.page} navigation={props.navigation} />
				) : (
					<TopNav active={props.page} navigation={props.navigation} />
				)}
				<View>{props.children}</View>
			</View>
			{isTabletOrMobileDevice ? <MobileFooter /> : <Footer />}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.yellow,
	},
});
