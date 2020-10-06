import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import * as Font from 'expo-font';

export default function Montserrat(props) {
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		(async () => {
			try {
				Font.loadAsync({
					Montserrat_400Regular,
					Montserrat_500Medium,
					Montserrat_700Bold,
				});
			} catch ({ message }) {
				// This will be called if something is broken
				console.log(`Error loading font: ${message}`);
			} finally {
				setLoaded(true);
			}
		})();
	}, []);
	if (!loaded) return <View />;

	return (
		<Text
			{...props}
			style={[
				props.style,
				{
					fontFamily: props.bold
						? 'Montserrat_700Bold'
						: props.medium
						? 'Montserrat_500Medium'
						: 'Montserrat_400Regular',
					fontSize: props.h1
						? 44
						: props.h3
						? 30
						: props.h4
						? 24
						: props.p
						? 16
						: props.style.fontSize,
				},
			]}
		/>
	);
}
