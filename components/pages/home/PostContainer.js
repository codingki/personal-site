import { useMediaQuery } from 'react-responsive';
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Wrapper from '../../global/Wrapper';
import Button from '../../button/Button';
import MobileButton from '../../../components/button/MobileButton';
import PostCard from '../../card/PostCard';
import WidePostCard from '../../card/WidePostCard';
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
							<MobileButton disabled blue text="Recent Posts" width={180} />
							<Link routeName="blog">
								<MobileButton text="View All" />
							</Link>
						</>
					) : (
						<>
							<MobileButton disabled blue text="Recent Posts" width={180} />
							<Link routeName="blog">
								<MobileButton text="View All" />
							</Link>
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
						{props.data.map(({ id, date, title, category, excerpt }) => (
							<WidePostCard
								key={id}
								title={title}
								date={date}
								id={id}
								excerpt={excerpt}
								category={category}
							/>
						))}
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
				)}
			</View>
		</Wrapper>
	);
};
