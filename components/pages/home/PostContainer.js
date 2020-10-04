import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import { View } from 'react-native';
import Wrapper from '../../global/Wrapper';
import Button from '../../button/Button';
import MobileButton from '../../../components/button/MobileButton';
import PostCard from '../../card/PostCard';
import WidePostCard from '../../card/WidePostCard';
export default () => {
	const isTabletOrMobileDevice = useMediaQuery({
		maxDeviceWidth: 768,
	});
	return (
		<Wrapper style={{ marginTop: 50 }}>
			<View
				style={{
					flexDirection: 'column',
					flex: 1,
				}}
			>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					{' '}
					{isTabletOrMobileDevice ? (
						<>
							<MobileButton disabled blue text="Recent Posts" width={180} />
							<MobileButton text="View All" />
						</>
					) : (
						<>
							<Button disabled blue text="Recent Posts" width={180} />
							<Button text="View All" />
						</>
					)}
				</View>
				{isTabletOrMobileDevice ? (
					<View
						style={{
							flex: 1,
							flexDirection: 'column',
						}}
					>
						<WidePostCard />
						<WidePostCard />
					</View>
				) : (
					<View
						style={{
							marginTop: 25,
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<PostCard />
						<PostCard />
					</View>
				)}
			</View>
		</Wrapper>
	);
};
