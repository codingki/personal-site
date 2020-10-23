import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import Button from '../button/Button';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
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
		<TouchableOpacity>
			<View
				style={{
					backgroundColor: 'white',
					borderColor: Colors.black,
					borderWidth: 3,
					borderBottomWidth: 6,
					width: 55,
					paddingVertical: 5,
					borderRadius: 12,
					alignItems: 'center',
					marginLeft: isTabletOrMobileDevice ? 0 : 10,
					marginHorizontal: isTabletOrMobileDevice ? 5 : 0,
				}}
			>
				{props.children}
			</View>
		</TouchableOpacity>
	);
};
