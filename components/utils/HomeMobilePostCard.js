import React from 'react';
import { View } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import { Link } from 'expo-next-react-navigation';
var moment = require('moment');
export default (props) => {
	return (
		<View
			style={{ flex: 1, flexDirection: 'column', backgroundColor: 'yellow' }}
		>
			{props.data.map(({ id, date, title, category, excerpt }) => (
				<View
					style={{
						backgroundColor: 'red',
						borderColor: Colors.black,
						borderWidth: 3,
						borderBottomWidth: 6,
						borderRadius: 12,
					}}
				>
					<Text bold h4 numberOfLines={2}>
						Mobile<Link routeName={'blog/' + id}>{title}</Link>
					</Text>
					<Text style={{ fontSize: 14, marginVertical: 10 }}>
						{moment(date).format('D MMM YY')} | {category}
					</Text>
					<Text
						p
						style={{
							lineHeight: 24,
						}}
						numberOfLines={3}
					>
						{excerpt}
					</Text>
				</View>
			))}
		</View>
	);
};
