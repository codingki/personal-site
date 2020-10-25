import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
	StyleSheet,
	View,
	ScrollView,
	Text,
	ActivityIndicator,
} from 'react-native';
import Colors from '../../constants/Colors';
import TopNav from '../global/TopNav';
import MobileTopNav from '../global/MobileTopNav';
import Footer from '../global/Footer';
import MobileFooter from '../global/MobileFooter';

import * as Font from 'expo-font';

export default function App(props) {
	const [isTabletOrMobileDevice, setIsTabletOrMobileDevice] = useState(null);
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
			{isTabletOrMobileDevice == null ? (
				<View
					style={{
						flexDirection: 'column',
						flex: 1,
						backgroundColor: Colors.yellow,
					}}
				>
					<View style={{ flexDirection: 'row' }}>
						<View
							style={{
								backgroundColor: Colors.orange,
								height: 110,
								borderBottomColor: Colors.black,
								borderBottomWidth: 3,
								justifyContent: 'center',
								alignItems: 'center',
								paddingVertical: 25,
								flex: 1,
							}}
						/>
					</View>
					<View
						style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
					>
						<View
							style={{
								backgroundColor: 'white',
								borderColor: Colors.black,
								borderWidth: 3,
								borderBottomWidth: 6,
								width: 80,
								height: 80,
								paddingVertical: 10,
								borderRadius: 12,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<ActivityIndicator size="large" color={Colors.black} />
						</View>
					</View>

					<View
						style={{
							flexDirection: 'row',
							paddingTop: 50,
							backgroundColor: Colors.yellow,
						}}
					>
						<View
							style={{
								flex: 1,
								backgroundColor: Colors.orange,
								height: 82,
								borderBottomColor: Colors.black,
								borderTopWidth: 6,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						/>
					</View>
				</View>
			) : (
				<>
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
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.yellow,
	},
});
