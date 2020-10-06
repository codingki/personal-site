import React from 'react';
import { View, Image } from 'react-native';
import Text from '../../components/utils/StyledText';
import Colors from '../../constants/Colors';
import Button from '../button/Tag';
import { Link } from 'expo-next-react-navigation';
export default (props) => {
	const tags = props.category.split(', ');
	return (
		<View
			style={{
				marginTop: 25,
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
					borderColor: Colors.black,
					borderWidth: 3,
					borderBottomWidth: 6,
					borderRadius: 12,
					padding: 20,
				}}
			>
				<Text bold h4 numberOfLines={2}>
					<Link routeName={'works/' + props.id}>{props.title}</Link>
				</Text>

				<Text
					p
					style={{
						lineHeight: 24,
						marginVertical: 10,
					}}
					numberOfLines={2}
				>
					{props.excerpt}
				</Text>
				<View style={{ flexDirection: 'row' }}>
					{tags.map((x) => (
						<Button text={x} orange />
					))}
				</View>
			</View>
		</View>
	);
};
