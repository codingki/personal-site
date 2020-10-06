import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import MenuButton from '../button/MobileMenu';
import Button from '../button/FullButton';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-next-react-navigation';
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
								<Link routeName="./">
									<Button
										blue={props.active == 'home' ? true : false}
										text="Home"
									/>
								</Link>
								<Link routeName="works">
									<Button
										blue={props.active == 'works' ? true : false}
										text="Works"
									/>
								</Link>
								<Link routeName="blog">
									<Button
										blue={props.active == 'blog' ? true : false}
										text="Blog"
									/>
								</Link>
								<a
									href="mailto: codingki@gmail.com"
									style={{ textDecoration: 'none' }}
								>
									<Button
										blue={props.active == 'contact' ? true : false}
										text="Contact"
									/>
								</a>
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
