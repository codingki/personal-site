import React from 'react';
import { View, Dimensions, Image } from 'react-native';
import Text from '../../utils/StyledText';
import Colors from '../../../constants/Colors';
import Wrapper from '../../global/Wrapper';
import Button from '../../button/Button';
export default () => {
	return (
		<Wrapper style={{ marginTop: 50 }}>
			<View
				style={{
					flex: 1,
					backgroundColor: 'white',
					borderColor: Colors.black,
					borderWidth: 3,
					borderBottomWidth: 6,

					borderRadius: 12,
				}}
			>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ flex: 5, padding: 40, paddingRight: 20 }}>
						<Text bold h1>
							Hi, I am Kiki, {'\n'}Creative Technologist
						</Text>
						<Text p style={{ marginTop: 10, marginBottom: 15, lineHeight: 24 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</Text>
						<Button width={220} orange text="Download Resume" />
					</View>
					<View
						style={{
							flex: 2,
							alignItems: 'center',
							justifyContent: 'flex-end',
						}}
					>
						<Image
							resizeMode="contain"
							style={{
								width: 200,
								height: 200,
							}}
							source={require('../../../assets/images/me.png')}
						/>
					</View>
				</View>
			</View>
		</Wrapper>
	);
};
