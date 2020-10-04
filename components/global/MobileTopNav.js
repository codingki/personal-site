import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import MenuButton from '../button/MobileMenu';
import Button from '../button/FullButton';
import { Entypo } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
export default (props) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<View style={{ flexDirection: 'row' }}>
				<View
					style={{
						flex: 1,
						backgroundColor: Colors.orange,
						minHeight: 82,
						borderBottomColor: Colors.black,
						borderBottomWidth: 3,
						justifyContent: 'flex-start',
						alignItems: 'center',
						flexDirection: 'row',
						paddingVertical: 25,
						paddingHorizontal: 20,
					}}
				>
					<View style={{ flexDirection: 'column', flex: 1 }}>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-start',
							}}
						>
							<MenuButton
								onPress={() => {
									setOpen(!open);
								}}
								text="Works"
								blue={props.active == 'works' ? true : false}
							>
								<Entypo name="menu" size={26} color="black" />
							</MenuButton>
						</View>
						{open && (
							<View>
								<Button
									onPress={() => {
										props.navigation.navigate('Home');
									}}
									blue={props.active == 'home' ? true : false}
									text="Home"
								/>
								<Button
									onPress={() => {
										props.navigation.navigate('Works');
									}}
									blue={props.active == 'works' ? true : false}
									text="Works"
								/>
								<Button
									onPress={() => {
										props.navigation.navigate('Blog');
									}}
									blue={props.active == 'blog' ? true : false}
									text="Blog"
								/>
								<Button
									onPress={() => {
										props.navigation.navigate('Contact');
									}}
									blue={props.active == 'contact' ? true : false}
									text="Contact"
								/>
							</View>
						)}
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.yellow,
	},
});
