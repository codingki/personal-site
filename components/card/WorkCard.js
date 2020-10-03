import React from 'react';
import { View, Image } from 'react-native';
import Text from '../../components/utils/StyledText';
import Colors from '../../constants/Colors';

export default () => {
	return (
		<View
			style={{
				marginTop: 25,
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<Image
				style={{
					width: 225,
					height: 225,
					borderColor: Colors.black,
					borderWidth: 3,
					borderBottomWidth: 6,
					borderRadius: 12,
				}}
				resizeMode="cover"
				source={{
					uri: 'https://via.placeholder.com/150',
				}}
			/>

			<View
				style={{
					flex: 1,
					height: 180,
					backgroundColor: 'white',
					borderColor: Colors.black,
					borderWidth: 3,
					borderBottomWidth: 6,
					borderRadius: 12,
					padding: 20,
					borderLeftWidth: 0,
					borderTopLeftRadius: 0,
					borderBottomLeftRadius: 0,
				}}
			>
				<Text bold h4 numberOfLines={1}>
					Making a design system from
				</Text>
				<Text style={{ fontSize: 14, marginVertical: 10 }}>
					12 Feb 2020 | Design Patterns
				</Text>
				<Text
					style={{
						lineHeight: 24,
					}}
					numberOfLines={2}
				>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollitenim velit
					mollitVelit officia consequat duis enim velit mollitenim velit mollit
				</Text>
			</View>
		</View>
	);
};
