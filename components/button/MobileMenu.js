import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import Button from '../button/Button';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
export default (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<View
				style={{
					backgroundColor: 'white',
					borderColor: Colors.black,
					borderWidth: 3,
					borderBottomWidth: 6,
					width: 55,
					paddingVertical: 10,
					borderRadius: 12,
					alignItems: 'center',
				}}
			>
				{props.children}
			</View>
		</TouchableOpacity>
	);
};
