import React from 'react';
import { View } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import { Link } from 'expo-next-react-navigation';
var moment = require('moment');
export default (props) => {
	return (
		<View
			style={{
				marginTop: 25,
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			{props.data.map(({ id, date, title, category, excerpt }) => (
				<View
					style={{
						width: 374,
						backgroundColor: 'white',
						borderColor: Colors.black,
						borderWidth: 3,
						borderBottomWidth: 6,
						borderRadius: 12,
						padding: 20,
					}}
				>
					<Text bold h4 numberOfLines={1}>
						Web<Link routeName={'blog/' + id}>{title}</Link>
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
