import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const stacks = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerMode: 'none',
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default stacks;
