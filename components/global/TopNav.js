import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import Button from '../button/Button';
import { Link } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
export default (props) => {
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
						<Button
							onPress={() => {
								props.navigation.navigate('Home');
							}}
							text="Home"
							blue={props.active == 'home' ? true : false}
						/>
					</View>

					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'space-between',
						}}
					>
						<Button
							onPress={() => {
								props.navigation.navigate('Works');
							}}
							text="Works"
							blue={props.active == 'works' ? true : false}
						/>

						<Button
							onPress={() => {
								props.navigation.navigate('Blog');
							}}
							text="Blog"
							blue={props.active == 'blog' ? true : false}
						/>
						<Button
							onPress={() => {
								props.navigation.navigate('Contact');
							}}
							text="Contact"
							blue={props.active == 'contact' ? true : false}
						/>
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
