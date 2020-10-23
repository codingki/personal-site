import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Wrapper from '../../../components/global/Wrapper';
import Button from '../../../components/button/Button';
import MobileButton from '../../../components/button/MobileButton';
import WorkCard from '../../card/WorkCard';
import WideWorkCard from '../../card/WideWorkCard';
import { Link } from 'expo-next-react-navigation';
export default (props) => {
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
					{isTabletOrMobileDevice ? (
						<>
							<MobileButton disabled blue text="Recent Works" width={180} />
							<Link routeName="works">
								<MobileButton text="View All" />
							</Link>
						</>
					) : (
						<>
							<MobileButton disabled blue text="Recent Works" width={180} />
							<Link routeName="works">
								<MobileButton text="View All" />
							</Link>
						</>
					)}
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
