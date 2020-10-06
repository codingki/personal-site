import '@expo/match-media';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import { View } from 'react-native';
import Wrapper from '../../../components/global/Wrapper';
import Button from '../../../components/button/Button';
import MobileButton from '../../../components/button/MobileButton';
import WorkCard from '../../card/WorkCard';
import WideWorkCard from '../../card/WideWorkCard';

export default (props) => {
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
					<Button disabled blue text="All Works" width={150} />
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: 'column',
					}}
				>
					{isTabletOrMobileDevice
						? props.data.map(({ id, image, title, category, excerpt }) => (
								<WideWorkCard
									key={id}
									id={id}
									category={category}
									image={image}
									title={title}
									excerpt={excerpt}
								/>
						  ))
						: props.data.map(
								({ id, date, title, category, excerpt, image }) => (
									<WorkCard
										key={id}
										id={id}
										category={category}
										title={title}
										image={image}
										excerpt={excerpt}
									/>
								)
						  )}
				</View>
			</View>
		</Wrapper>
	);
};
