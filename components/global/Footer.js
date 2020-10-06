import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import Text from '../utils/StyledText';
import Colors from '../../constants/Colors';
import SocialMedia from '../button/SocialMedia';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-next-react-navigation';
const { width, height } = Dimensions.get('window');
export default () => {
	return (
		<View
			style={{
				flexDirection: 'row',
				paddingTop: 50,
				backgroundColor: Colors.yellow,
			}}
		>
			<View
				style={{
					flex: 1,
					backgroundColor: Colors.orange,
					height: 82,
					borderBottomColor: Colors.black,
					borderTopWidth: 6,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						width: 768,
						flexDirection: 'row',
					}}
				>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							alignItems: 'flex-end',
							justifyContent: 'flex-end',
						}}
					>
						<a
							style={{ textDecoration: 'none' }}
							href="https://www.instagram.com/kikidding/"
							target="_blank"
						>
							<SocialMedia>
								<Ionicons
									name="logo-instagram"
									size={24}
									color={Colors.black}
								/>
							</SocialMedia>
						</a>
						<a
							style={{ textDecoration: 'none' }}
							href="https://twitter.com/kikiding"
							target="_blank"
						>
							<SocialMedia>
								<Ionicons name="logo-twitter" size={24} color={Colors.black} />
							</SocialMedia>
						</a>
						<a
							style={{ textDecoration: 'none' }}
							href="https://github.com/codingki"
							target="_blank"
						>
							<SocialMedia>
								<AntDesign name="github" size={24} color={Colors.black} />
							</SocialMedia>
						</a>
						<a
							style={{ textDecoration: 'none' }}
							href="https://medium.com/@kikidding/"
							target="_blank"
						>
							<SocialMedia>
								<AntDesign
									name="medium-monogram"
									size={24}
									color={Colors.black}
								/>
							</SocialMedia>
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
