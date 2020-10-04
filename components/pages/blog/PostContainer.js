import React from 'react';
import { View } from 'react-native';
import Wrapper from '../../global/Wrapper';
import Button from '../../button/Button';
import PostCard from '../../card/WidePostCard';
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
					<Button disabled blue text="All Posts" width={180} />
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: 'column',
					}}
				>
					<PostCard />
					<PostCard />
				</View>
			</View>
		</Wrapper>
	);
};
