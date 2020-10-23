import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
import { View, Dimensions, Image } from 'react-native';
import Text from '../../utils/StyledText';
import Colors from '../../../constants/Colors';
import Wrapper from '../../global/Wrapper';
import Button from '../../button/Button';
export default () => {
	const [isTabletOrMobileDevice, setIsTabletOrMobileDevice] = useState(false);
	useEffect(() => {
		setIsTabletOrMobileDevice(itMob);
	}, []);
	const itMob = useMediaQuery({
		maxDeviceWidth: 768,
	});
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
					<View
						style={{
							flex: 5,
							padding: isTabletOrMobileDevice ? 20 : 40,
							paddingRight: isTabletOrMobileDevice ? 40 : 20,
						}}
					>
						<Text bold style={{ fontSize: isTabletOrMobileDevice ? 30 : 44 }}>
							Hi, I am Kiki,
						</Text>
						<Text bold style={{ fontSize: isTabletOrMobileDevice ? 24 : 30 }}>
							Creative Technologist
						</Text>
						<Text
							style={{
								fontSize: isTabletOrMobileDevice ? 16 : 16,
								marginTop: 10,
								marginBottom: 10,
								lineHeight: 24,
							}}
						>
							Im a guy that can code and design, but internet makes me can do
							anything. Crafting apps with React Native and ❤️
						</Text>

						<iframe
							src="https://ghbtns.com/github-btn.html?user=codingki&repo=personal-site&type=star&count=true&size=large"
							frameBorder="0"
							scrolling="0"
							width="170"
							height="30"
							title="GitHub"
						></iframe>
						{/* <Button width={220} orange text="Download Resume" /> */}
					</View>
					{!isTabletOrMobileDevice && (
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
					)}
				</View>
			</View>
		</Wrapper>
	);
};
