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
					paddingHorizontal: 20,
					paddingVertical: 5,
					borderRadius: 12,
					width: props.width ? props.width : 120,
					alignItems: 'center',
				}}
			>
				<Text bold style={{ color: txt }}>
					{props.text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.yellow,
	},
});
