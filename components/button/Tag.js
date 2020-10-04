import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
const { width, height } = Dimensions.get('window');
export default (props) => {
	const bg = props.blue ? Colors.blue : props.orange ? Colors.orange : 'white';
	const txt = props.blue ? 'white' : props.orange ? 'white' : Colors.black;
	return (
		<TouchableOpacity disabled={props.disabled ? true : false}>
			<View
				style={{
					backgroundColor: bg,
					borderColor: Colors.black,
					borderWidth: 3,
					borderBottomWidth: 6,
					paddingHorizontal: 12,
					paddingVertical: 5,
					borderRadius: 12,
					alignItems: 'center',
					marginRight: 5,
				}}
			>
				<Text bold style={{ color: txt, fontSize: 14 }}>
					{props.text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
