import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Blog from '../screens/Blog';
import Works from '../screens/Works';
import SingleBlog from '../screens/single/Blog';

const Stack = createStackNavigator();

const stacks = () => {
	const linking = {
		config: {
			screens: {
				Home: 'home',
				Works: 'works',
				Blog: 'blog',
			},
		},
	};
	return (
		<NavigationContainer linking={linking}>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerMode: 'none',
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Works" component={Works} />
				<Stack.Screen name="Blog" component={Blog} />
				<Stack.Screen name="SingleBlog" component={SingleBlog} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default stacks;
