import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import TopNav from '../global/TopNav';
import MobileTopNav from '../global/MobileTopNav';
import Footer from '../global/Footer';
import MobileFooter from '../global/MobileFooter';

export default function App(props) {
	const isTabletOrMobileDevice = useMediaQuery({
		maxDeviceWidth: 768,
	});
	return (
		<>
			<View style={styles.container}>
				{isTabletOrMobileDevice ? (
					<MobileTopNav active={props.page} navigation={props.navigation} />
				) : (
					<TopNav active={props.page} navigation={props.navigation} />
				)}

				{props.children}
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
