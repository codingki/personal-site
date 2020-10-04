import React from 'react';
import { View, Image } from 'react-native';
import Text from '../../components/utils/StyledText';
import Colors from '../../constants/Colors';
import Button from '../button/Tag';
export default () => {
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
					Making a design system from
				</Text>

				<Text
					p
					style={{
						lineHeight: 24,
						marginVertical: 10,
					}}
					numberOfLines={2}
				>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollitenim velit
					mollitVelit officia consequat duis enim velit mollitenim velit mollit
				</Text>
				<View style={{ flexDirection: 'row' }}>
					<Button text="Redesign" orange />
					<Button text="Redesign" orange />
				</View>
			</View>
		</View>
	);
};
