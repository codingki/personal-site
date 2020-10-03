import * as React from 'react';
import { Text } from 'react-native';

export default function NunitoText(props) {
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
					fontSize: props.h1 ? 44 : props.h3 ? 30 : props.h4 ? 24 : 16,
				},
			]}
		/>
	);
}
