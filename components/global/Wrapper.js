import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import Button from '../button/Button';
const { width, height } = Dimensions.get('window');
export default (props) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View
				style={[
					props.style,
					{
						flex: 1,

						justifyContent: 'center',
						alignItems: 'center',
					},
				]}
			>
				<View
					style={{
						width: 768,
						flexDirection: 'row',
					}}
				>
					{props.children}
				</View>
			</View>
		</View>
	);
};
