import React from 'react';
import { View } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import { Link } from 'expo-next-react-navigation';
export default (props) => {
	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'column',
				backgroundColor: 'white',
				borderColor: Colors.black,
				borderWidth: 3,
				borderBottomWidth: 6,
				borderRadius: 12,
				padding: 20,
				marginTop: 25,
			}}
		>
			<Text bold h4 numberOfLines={2}>
				<Link routeName={'blog/' + props.id}>{props.title}</Link>
			</Text>
			<Text style={{ fontSize: 14, marginVertical: 10 }}>
				{props.date} | {props.category}
			</Text>
			<Text
				p
				style={{
					lineHeight: 24,
				}}
				numberOfLines={3}
			>
				{props.excerpt}
			</Text>
		</View>
	);
};
