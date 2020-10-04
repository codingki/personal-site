import React from 'react';
import { View } from 'react-native';
import Wrapper from '../../../components/global/Wrapper';
import Button from '../../../components/button/Button';
import WorkCard from '../../card/WorkCard';

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
					<Button disabled blue text="All Works" width={180} />
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: 'column',
					}}
				>
					<WorkCard />
					<WorkCard />
					<WorkCard />
				</View>
			</View>
		</Wrapper>
	);
};
