import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	Image,
	TouchableOpacity,
} from 'react-native';
import Text from '../components/utils/StyledText';
import Colors from '../constants/Colors';
import TopNav from '../components/global/TopNav';
import Footer from '../components/global/Footer';
import Button from '../components/button/Button';

import Header from '../components/Header';
import PostContainer from '../components/PostContainer';
import WorkContainer from '../components/WorkContainer';
export default function App() {
	return (
		<View style={styles.container}>
			<TopNav />
			<Header />
			<PostContainer />
			<WorkContainer />
			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.yellow,
	},
});
