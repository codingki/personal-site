import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import TopNav from '../global/TopNav';
import Footer from '../global/Footer';

export default function App(props) {
	return (
		<>
			<View style={styles.container}>
				<TopNav active={props.page} navigation={props.navigation} />
				{props.children}
			</View>
			<Footer />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.yellow,
	},
});
