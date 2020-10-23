import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import Button from '../button/Button';
const { width, height } = Dimensions.get('window');
export default (props) => {
	const [isTabletOrMobileDevice, setIsTabletOrMobileDevice] = useState(false);
	useEffect(() => {
		setIsTabletOrMobileDevice(itMob);
	}, []);
	const itMob = useMediaQuery({
		maxDeviceWidth: 768,
	});

	return (
		<View style={{ flexDirection: 'row' }}>
			<View
				style={[
					props.style,
					{
						flex: 1,

						justifyContent: 'center',
						alignItems: 'center',
					},
				]}
			>
				<View
					style={[
						isTabletOrMobileDevice ? styles.mobile : styles.web,
						{
							flexDirection: 'row',
						},
					]}
				>
					{props.children}
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	web: {
		width: 768,
	},
	mobile: {
		marginHorizontal: 20,
	},
});
