import React from 'react';
import { View } from 'react-native';
import Wrapper from '../../global/Wrapper';
import Button from '../../button/Button';
import PostCard from '../../card/WidePostCard';

export default (props) => {
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
					<Button disabled blue text="All Posts" width={150} />
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: 'column',
					}}
				>
					{props.data.map(({ id, date, title, category, excerpt }) => (
						<PostCard
							key={id}
							id={id}
							title={title}
							date={date}
							excerpt={excerpt}
							category={category}
						/>
					))}
				</View>
			</View>
		</Wrapper>
	);
};
