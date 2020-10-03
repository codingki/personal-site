import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import Button from '../button/Button';
const { width, height } = Dimensions.get('window');
export default () => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View
				style={{
					flex: 1,
					backgroundColor: Colors.orange,
					height: 82,
					borderBottomColor: Colors.black,
					borderBottomWidth: 3,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						width: 768,
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<View
						style={{
							flex: 1,
							alignItems: 'flex-start',
						}}
					>
						<Button text="Home" blue />
					</View>

					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'space-between',
						}}
					>
						<Button text="Works" />
						<Button text="Blog" />
						<Button text="Contact" />
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.yellow,
	},
});
