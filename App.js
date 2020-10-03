import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import {
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => handleFinishLoading(setLoadingComplete)}
			/>
		);
	} else {
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar
					barStyle="dark-content"
					translucent
					backgroundColor="#f7f7f7"
				/>

				<AppNavigator />
			</SafeAreaView>
		);
	}
}

async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([
			require('./assets/icon.png'),
			require('./assets/splash.png'),
		]),
		Font.loadAsync({
			Montserrat_400Regular,
			Montserrat_500Medium,
			Montserrat_700Bold,
		}),
	]);
}

function handleLoadingError(error) {
	// In this case, you might want to report the error to your error reporting
	// service, for example Sentry
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
