import React from 'react';
import { View } from 'react-native';
import Wrapper from '../../global/Wrapper';
import Button from '../../button/Button';
import PostCard from '../../card/PostCard';
export default () => {
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
					<Button disabled blue text="Recent Posts" width={180} />
					<Button text="View All" />
				</View>
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
			</View>
		</Wrapper>
	);
};
