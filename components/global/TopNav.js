import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import Button from '../button/Button';
import { Link } from 'expo-next-react-navigation';
const { width, height } = Dimensions.get('window');
export default (props) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<View
				style={{
					flex: 1,
					backgroundColor: Colors.orange,
					minHeight: 82,
					borderBottomColor: Colors.black,
					borderBottomWidth: 3,
					justifyContent: 'center',
					alignItems: 'center',
					paddingVertical: 25,
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
						<Link routeName="./">
							<Button
								text="Home"
								blue={props.active == 'home' ? true : false}
							/>
						</Link>
					</View>

					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'space-between',
						}}
					>
						<Link routeName="works">
							<Button
								text="Works"
								blue={props.active == 'works' ? true : false}
							/>
						</Link>
						<Link routeName="blog">
							<Button
								text="Blog"
								blue={props.active == 'blog' ? true : false}
							/>
						</Link>
						<a
							href="mailto: codingki@gmail.com"
							style={{ textDecoration: 'none' }}
						>
							<Button
								text="Contact"
								blue={props.active == 'contact' ? true : false}
							/>
						</a>
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
