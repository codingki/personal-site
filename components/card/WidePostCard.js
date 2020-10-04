import React from 'react';
import { View } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
export default () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'white',
				borderColor: Colors.black,
				borderWidth: 3,
				borderBottomWidth: 6,
				borderRadius: 12,
				padding: 20,
				marginTop: 25,
			}}
		>
			<Text bold h4 numberOfLines={1}>
				Making a design system from
			</Text>
			<Text style={{ fontSize: 14, marginVertical: 10 }}>
				12 Feb 2020 | Design Patterns
			</Text>
			<Text
				p
				style={{
					lineHeight: 24,
				}}
				numberOfLines={3}
			>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
				sint. Velit officia consequat duis enim velit mollit
			</Text>
		</View>
	);
};
